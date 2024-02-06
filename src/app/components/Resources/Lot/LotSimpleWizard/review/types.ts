export type StepReviewField<T> = {
  renderTitle: (item: T) => React.ReactNode;
  renderValue: (item: T) => React.ReactNode;
  isRequired?: boolean;
};

export interface ReviewFieldDescriptor {
  label: string;
  addon?: string;
}
