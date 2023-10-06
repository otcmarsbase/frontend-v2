import { PropsWithChildren } from 'react';

import { DealRowSkeleton } from '@app/components';
import { VStack } from '@chakra-ui/react';
import { ListLoaderProps, SkeletonLoader } from '@shared/ui-kit';

export const ListLoader: React.FC<PropsWithChildren<ListLoaderProps>> = ({ isLoading, children }) => (
  <SkeletonLoader
    isLoading={isLoading}
    skeleton={
      <VStack width="full">
        {[...Array(5)].map((_, index) => (
          <DealRowSkeleton key={index} />
        ))}
      </VStack>
    }
  >
    {children}
  </SkeletonLoader>
);
