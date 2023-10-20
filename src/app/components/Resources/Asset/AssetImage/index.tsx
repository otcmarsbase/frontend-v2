import { Image, ImageProps } from '@chakra-ui/react';
import { Resource } from '@schema/otc-desk-gateway';

export interface AssetImageProps extends Omit<ImageProps, 'src'> {
  asset: Resource.Asset.Asset;
}

export const AssetImage: React.FC<AssetImageProps> = ({ asset, ...imageProps }) => {
  return <Image {...imageProps} src={asset.info.logoURL} />;
};
