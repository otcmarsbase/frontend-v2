import { PortalController } from '../internal';

export interface PortalRenderProvider extends React.FC<{}> {}

export interface Portal {
  RenderProvider: PortalRenderProvider;
  Controller: PortalController;
}
