import * as yup from 'yup';

export const LotQuestionSchema = yup.object({
  text: yup.string().required().min(10).max(300),
});

export type LotQuestionModel = yup.InferType<typeof LotQuestionSchema>;
