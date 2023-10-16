import { PropsWithChildren } from 'react';

import { BidRowSkeleton } from '@app/components';
import { VStack } from '@chakra-ui/react';
import { ListLoaderProps, SkeletonLoader } from '@shared/ui-kit';

export const ListLoader: React.FC<PropsWithChildren<ListLoaderProps>> = ({ isLoading, children }) => (
  <SkeletonLoader
    isLoading={isLoading}
    skeleton={
      <VStack width="full">
        {[...Array(5)].map((_, index) => (
          <BidRowSkeleton key={index} />
        ))}
      </VStack>
    }
  >
    {children}
  </SkeletonLoader>
);
