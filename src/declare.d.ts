declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.gif"
declare module "*.scss"

declare module "*.svg" {
    import { ReactElement, SVGProps } from "react";
    export const ReactComponent: (props: SVGProps<SVGElement>) => ReactElement;
    const src: string
    export default src
  }