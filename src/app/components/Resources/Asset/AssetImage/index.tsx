import { Image, ImageProps } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';

export interface AssetImageProps extends Omit<ImageProps, 'src'> {
  asset: DeskGatewaySchema.Asset;
}

export const AssetImage: React.FC<AssetImageProps> = ({ asset, ...imageProps }) => {
  return <Image {...imageProps} src={asset.info.logoURL} />;
};
