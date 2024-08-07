import * as yup from 'yup';

export const FeedbackCreateSchema = yup.object({
  text: yup.string().required(),
  rating: yup.number().oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).required(),
});

export type FeedbackCreateModel = yup.InferType<typeof FeedbackCreateSchema>;
