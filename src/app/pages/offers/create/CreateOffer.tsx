// import {Box, HStack, VStack} from "@chakra-ui/react";
// import {useForm} from "@shared/ui-kit";
// import {useEffect, useState} from "react";
// import {observer} from "mobx-react-lite";
// import {useStore} from "@app/store";
// import {hasAllProperties, hasNoProperties} from "@app/pages/offers/utils";
// import {YupProjectInfoShema} from "../../../../features/StepOne/consts";
// import {STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE, YupTokenInfoShema} from "../../../../features/StepTwo/consts";
// import {StepThreeShema} from "../../../../features/StepThree/consts";
// import {StepOne} from "../../../../features/StepOne";
// // import {TokenInfoSafe} from "../../../../features/TokenInfoSafe";
// import {StepTwo} from "../../../../features/StepTwo";
// import {StepThree} from "../../../../features/StepThree";
// import {ILotType} from "../../../../features/StepOne/types";
// import Decimal from "decimal.js";
// import {ICreateOffer} from "@app/pages/offers/create/types";
// import {Summary} from "@app/pages/offers/create/components";
//
// function reorderItems<T>(arr: Array<T>, value: T): Array<T> {
//   const index = arr.indexOf(value);
//   if (index > -1) {
//     arr.splice(index, 1);
//   }
//   arr.push(value);
//   arr.reverse();
//   return arr;
// }
//
// const defaultValues = {
//     typesOfBuyer: [],
//     typesOfSeller: [],
//     projectName: '',
//     projectWebsite: '',
//     lotType: '',
//     telegram: '',
//     deadlineDate: '',
//     investmentRound: ''
// }
// function getDefaultValues(typeOfDeal){
//
//     const draftByTypeOfDeal = JSON.parse(localStorage.getItem(`${typeOfDeal}Draft`));
//
//     if(!draftByTypeOfDeal){
//         return defaultValues
//     }else{
//         return draftByTypeOfDeal
//     }
//
// }
// export const CreateOffer = observer(({typeOfDeal}:ICreateOffer) => {
//     const {SellOfferStore} = useStore();
//     const {
//         setBasicInfo,
//         setStepOneSuccess,
//         setStepOneWasOnSuccess,
//         stepOneWasOnSuccess,
//         stepOneSuccess,
//         stepTwoWasOnSuccess,
//         stepTwoSuccess,
//         setStepTwoSuccess,
//         setStepTwoWasOnSuccess,
//         setStepThreeWasOnSuccess,
//         setStepThreeSuccess
//     } = SellOfferStore;
//     const schema = YupProjectInfoShema.concat(YupTokenInfoShema).concat(StepThreeShema);
//
//     const form = useForm({
//         schema, defaultValues: getDefaultValues(typeOfDeal)
//     });
//     const data = form.watch();
//
//     useEffect(() => {
//         //TODO add validations
//         const hasStepOneFieldsDirty = hasAllProperties(form.formState.dirtyFields, ['projectName', 'projectWebsite', 'telegram'])
//         const hasStepTwoFieldsDirty = hasAllProperties(form.formState.dirtyFields, ['investmentRound', 'roundFDV', 'contractValue'])
//         const stepThreeFiledsValid = data.contractSizeToOffer > 0 && data.minDealSize > 0
//
//         const stepOneOnError = hasNoProperties(form.formState.errors, ['projectName', 'projectWebsite', 'telegram'])
//         const stepTwoOnError = hasNoProperties(form.formState.errors, ['investmentRound', 'roundFDV', 'contractValue'])
//         const stepThreeOnError = hasNoProperties(form.formState.errors, ['contractSizeToOffer', 'minDealSize'])
// //TODO костылька
//         const stepOnePassed = !stepOneOnError && hasStepOneFieldsDirty && data.lotType && data.lotType.length > 0;
//         setStepOneSuccess(stepOnePassed)
//         if (stepOnePassed) {
//             setStepOneWasOnSuccess(true)
//         }
//
//         const stepTwoPassed = !stepTwoOnError && hasStepTwoFieldsDirty;
//         setStepTwoSuccess(stepTwoPassed)
//         if (stepTwoPassed) {
//             setStepTwoWasOnSuccess(true)
//         }
//         const stepThreePassed = !stepThreeOnError && stepThreeFiledsValid;
//         setStepThreeSuccess(stepThreePassed)
//         if (stepTwoPassed) {
//             setStepThreeWasOnSuccess(true)
//         }
//         setBasicInfo(data)
//         localStorage.setItem(`${typeOfDeal}Draft`, JSON.stringify(data));
//     }, [data])
//
//     useEffect(() => {
//         if (!data.lotType) return
//         if (!data.contractValue) return
//         const fieldOne = STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE[data.lotType][0].id;
//         const fieldTwo = STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE[data.lotType][1].id;
//
//         const fieldOneValue = form.getValues(fieldOne);
//         if (!fieldOneValue) {
//             return
//         }
//
//         const contractValue = new Decimal(data.contractValue);
//         const recountedValue = contractValue.div(fieldOneValue).toString();
//
//         form.setValue(fieldTwo, recountedValue)
//     }, [data.contractValue])
//
//     function handleRecountPriceInfoValues(curIds, id, value) {
//         if (!value) {
//             form.setValue(id, value.toString())
//             return
//         }
//         const orderedArr = reorderItems(curIds, id);
//
//         const fieldOneID = orderedArr[0];
//         const fieldTwoID = orderedArr[1];
//
//         const contractValue = form.getValues('contractValue');
//
//         if (!contractValue) {
//             form.setValue(fieldOneID, value.toString())
//             return
//         }
//
//         const _contractValue = new Decimal(contractValue);
//         const _fieldOneStore = new Decimal(value);
//
//         const recountedValue = _contractValue.div(_fieldOneStore).toString();
//
//         form.setValue(fieldTwoID, recountedValue)
//         form.setValue(fieldOneID, value.toString())
//     }
//
//
//     const [showStepTwo, setShowStepTwo] = useState(false)
//
//     useEffect(()=>{
//         let _showStepTwo = stepOneWasOnSuccess || stepOneSuccess;
//         if(typeOfDeal === 'Sell'){
//             setShowStepTwo(prev=>_showStepTwo)
//         }else{
//             setShowStepThree(prev=>_showStepTwo)
//             setShowStepTwo(prev=>false)
//         }
//     },[stepOneWasOnSuccess, stepOneSuccess, typeOfDeal]);
//
//     const [showStepThree, setShowStepThree] = useState(false);
//
//     useEffect(()=>{
//         let _showStepThree = (stepOneWasOnSuccess || stepOneSuccess) && (stepTwoWasOnSuccess || stepTwoSuccess);
//         if(typeOfDeal === 'Sell'){
//             setShowStepThree(prev=>_showStepThree)
//         }
//     },[stepTwoWasOnSuccess, stepTwoSuccess, typeOfDeal]);
//
//
//
//   function handleRecountValues({currentID, bindedID, value, pricingModel}) {
//       const isCurtargetFDV = currentID === 'targetFDV';
//
//       // cv1 =  5,000,000 $
//       // fdv1 = 1,000,000,000 $
//       const cv1 = Number(form.getValues('contractSizeToOffer'));
//       const cv0 = Number(form.getValues('contractValue'));
//       const fdv1 = Number(isCurtargetFDV ? value : 'targetFDV');
//       const fdv0 = Number(form.getValues('roundFDV'));
//       const uq0 = Number(form.getValues('tokensBought'));
//
//       if(pricingModel === 'In Stablecoin'){
//           const share0 = (cv0*100) / fdv0;
//           const share1 = (cv1*100) / fdv1;
//           const ratio = share1 / share0;
//           const uq1 = uq0 * ratio;
//           if(currentID === 'targetFDV'){
//               const result = cv1 / uq1;
//               form.setValue(bindedID,result)
//               form.setValue('targetFDV',value)
//           }else{
//               const result = cv1 / value;
//               form.setValue('targetFDV',result)
//               form.setValue(bindedID,value)
//           }
//
//       }
//   }
//
//   return (
//     <HStack justifyContent={'center'} mt={'20px'} gap={'20px'} padding={'50px'}>
//       <VStack>
//         <StepOne
//           // @ts-ignore
//           form={form}
//           typeOfDeal={typeOfDeal}
//         />
//
//         {stepOneWasOnSuccess || stepOneSuccess ? (
//           <StepTwo
//             // @ts-ignore
//             form={form}
//             lotType={data.lotType as ILotType}
//             handleRecountPriceInfoValues={handleRecountPriceInfoValues}
//           />
//         ) : null}
//         {(stepOneWasOnSuccess || stepOneSuccess) &&
//         (stepTwoWasOnSuccess || stepTwoSuccess) ? (
//           <StepThree
//             // @ts-ignore
//             form={form}
//             lotType={data.lotType as ILotType}
//             handleRecountValues={handleRecountValues}
//             label={'Pricing model'}
//           />
//         ) : null}
//       </VStack>
//       <VStack h={'100%'} alignSelf={'flex-start'}>
//         <Summary onPublishLot={() => {}} />
//       </VStack>
//     </HStack>
//   );
// });
//
// // export {}
export {}
