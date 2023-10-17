export interface LotWizardStep<T> {
  title: string;
  description: string;
  stepTitle: string;
  backSteps: T[];
  skippable: boolean;
}

export interface LotWizardStepField {
  title: string;
  placeholder?: string;
  tooltip?: string;
}
