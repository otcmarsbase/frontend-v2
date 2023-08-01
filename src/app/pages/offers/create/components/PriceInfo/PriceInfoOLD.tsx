// import {
//   Box,
//   FormControl,
//   FormLabel,
//   HStack,
//   Input,
//   VStack,
// } from '@chakra-ui/react';
// import { FC } from 'react';
// import { UseFormReturn } from 'react-hook-form';
// import { STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE } from '../../StepTwo/consts';
//
// export const PriceInfo: FC<{
//   form: UseFormReturn;
//   helperText: string;
//   lotType: string;
//   label: string;
//   handleRecountPriceInfoValues: (curIds: [], id: string, value: string) => void;
// }> = (props) => {
//   const { form, helperText, label, lotType, handleRecountPriceInfoValues } =
//     props;
//   const { register, getValues, formState } = form;
//   const { errors } = formState;
//   const curIds = STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE[lotType].map(
//     (item) => item.id,
//   );
//   return (
//     <HStack>
//       <FormLabel>{label}</FormLabel>
//       <VStack>
//         <Box>{helperText}</Box>
//         <VStack>
//           {STEP_TWO_PRICE_INFO_LABELS_BY_LOT_TYPE[lotType].map((item) => {
//             // let fieldRules = {...register(item.id), type: 'number'}
//             return (
//               <HStack key={item.id}>
//                 <FormControl>
//                   <FormLabel>{item.fieldLabel}</FormLabel>
//                   <Input
//                     placeholder={'Amount'}
//                     value={getValues(item.id)}
//                     type={'number'}
//                     id={item.id}
//                     onChange={(e) =>
//                       handleRecountPriceInfoValues(
//                         curIds,
//                         e.currentTarget.id,
//                         e.currentTarget.value,
//                       )
//                     }
//                   />
//                 </FormControl>
//               </HStack>
//             );
//           })}
//         </VStack>
//       </VStack>
//     </HStack>
//   );
// };
export {}
