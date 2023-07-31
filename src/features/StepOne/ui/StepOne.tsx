// import { VStack } from '@chakra-ui/react';
// import { ILotType, InvAccTypes, LotTypes } from '../types';
// import { RawCheckbox } from '@shared/ui-kit/components/RawCheckbox/RawCheckbox';
// import { FC } from 'react';
// import { RawField } from '@shared/ui-kit/components/RawFIeld/RawField';
// import { UseFormReturn } from 'react-hook-form';
// import { ProjectInfoFields } from '../consts';
// import _ from 'lodash';
// import { MultiSelectWrapper } from '@shared/ui-kit/components/MultiSelectBtns/MultiSelectWrapper';
//
// export const StepOne: FC<{ form: UseFormReturn }> = (props) => {
//     const { register, getValues, formState, setValue } = props.form;
//     const { errors } = formState;
//
//     const handleSetUniqArrayByValue = (accType, value) => {
//         const currentSellerTypes = getValues(accType);
//         if (_.includes(currentSellerTypes, value)) {
//             setValue(accType, _.without(currentSellerTypes, value));
//         } else {
//             setValue(accType, _.concat(currentSellerTypes, value));
//         }
//     };
//
//     return (
//         <VStack bg={'gray'}>
//             <RawField
//                 register={{ ...register('projectName') }}
//                 errors={errors}
//                 id={'projectName'}
//                 placeholder={'Project info'}
//                 value={getValues('projectName')}
//                 label={ProjectInfoFields.PROJECT_NAME}
//             />
//             <RawField
//                 register={{ ...register('projectWebsite') }}
//                 errors={errors}
//                 id={'projectWebsite'}
//                 placeholder={'Website'}
//                 value={getValues('projectWebsite')}
//                 label={ProjectInfoFields.PROJECT_WEBSITE}
//             />
//             <MultiSelectWrapper
//                 data={LotTypes}
//                 errors={errors}
//                 handleChange={(id, value) => setValue(id, value)}
//                 id={'lotType'}
//                 label={ProjectInfoFields.LOT_TYPE}
//                 children={
//                     <>
//                         {getValues('lotType') === ILotType.SAFE ? (
//                             <RawCheckbox
//                                 handleChange={(id, value) => setValue(id, value)}
//                                 id={'isTokenWarrant'}
//                                 value={getValues('isTokenWarrant')}
//                                 label={ProjectInfoFields.IS_TOKEN_WARRANT}
//                             />
//                         ) : null}
//                     </>
//                 }
//             />
//             <MultiSelectWrapper
//                 handleChange={handleSetUniqArrayByValue}
//                 data={InvAccTypes}
//                 id={'typesOfSeller'}
//                 errors={errors}
//                 label={'Type of seller'}
//                 children={null}
//             />
//             <RawCheckbox
//                 handleChange={(id, value) => setValue(id, value)}
//                 id={'isDirectSeller'}
//                 value={getValues('isDirectSeller')}
//                 label={ProjectInfoFields.IS_DIRECT_SELLER}
//             />
//             <RawCheckbox
//                 handleChange={(id, value) => setValue(id, value)}
//                 id={'isReadyToSVP'}
//                 value={getValues('isReadyToSVP')}
//                 label={ProjectInfoFields.IS_READY_TO_SVP}
//             />
//
//             <RawField
//                 register={{ ...register('telegram') }}
//                 errors={errors}
//                 id={'telegram'}
//                 placeholder={'@nikname'}
//                 value={getValues('telegram')}
//                 label={ProjectInfoFields.TELEGRAM}
//             />
//             <RawCheckbox
//                 handleChange={(id, value) => setValue(id, value)}
//                 id={'isReAssigned'}
//                 value={getValues('isReAssigned')}
//                 label={ProjectInfoFields.IS_RE_ASSIGNED}
//             />
//             <MultiSelectWrapper
//                 handleChange={handleSetUniqArrayByValue}
//                 data={InvAccTypes}
//                 id={'typesOfBuyer'}
//                 errors={errors}
//                 label={'Type of buyer'}
//                 children={null}
//             />
//             <RawCheckbox
//                 value={getValues('isAdmToBuy')}
//                 handleChange={(id, value) => setValue(id, value)}
//                 id={'isAdmToBuy'}
//                 label={ProjectInfoFields.IS_ADM_TO_BUY}
//             />
//             {/*<DatePickerComp*/}
//             {/*    handleGetDate={(value) => setValue('deadlineDate', value)}*/}
//             {/*/>*/}
//             <RawCheckbox
//                 handleChange={(id, value) => setValue(id, value)}
//                 id={'isDataPickerDisabled'}
//                 value={getValues('isDataPickerDisabled')}
//                 label={ProjectInfoFields.IS_DATE_PICKER_DISABLED}
//             />
//         </VStack>
//     );
// };
export {}
