import { Icons } from '@shared/ui-kit';

export namespace Assets {
  export type AssetIcon = keyof typeof Icons.ProjectsIcons;
  export interface Asset {
    name: string;
    iconName: AssetIcon;
  }
}
