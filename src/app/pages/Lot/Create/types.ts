export interface CreateStepValue<T> {
  title: string;
  description: string;
  stepTitle: string;
  backSteps: T[];
  skippable: boolean;
}

export interface StepFieldInfo {
  title: string;
  placeholder?: string;
}
