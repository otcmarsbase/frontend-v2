import { useCallback, useEffect, useState } from 'react';

import { Image, ImageProps, Skeleton, SkeletonCircle, Spinner } from '@chakra-ui/react';
import { Resource } from '@schema/otc-desk-gateway';
import { useLoadingCallback } from '@shared/ui-kit';

export interface AssetImageProps extends Omit<ImageProps, 'src'> {
  asset: Resource.Asset.Asset;
}

export const AssetImage: React.FC<AssetImageProps> = ({ asset, ...imageProps }) => {
  const [img, setImg] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const loadImage = useLoadingCallback(
    useCallback((imageName) => {
      import(`./images/${imageName}.png`).then((image) => {
        setImg(image.default);
        setIsLoading(false);
      });
    }, []),
  );

  useEffect(() => {
    loadImage(asset.id);
  }, [asset.id, loadImage]);

  return (
    <Skeleton borderRadius="50%" isLoaded={!isLoading}>
      <Image {...imageProps} src={img} />
    </Skeleton>
  );
};
