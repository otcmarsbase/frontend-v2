export interface LotWizardStep<T extends string> {
  title: string;
  description: string;
  stepTitle: string;
  backSteps: T[];
  skippable: boolean;
}
