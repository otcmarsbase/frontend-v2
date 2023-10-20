import { PropsWithChildren } from 'react';

import { LotRowSkeleton } from '@app/components';
import { VStack } from '@chakra-ui/react';
import { ListLoaderProps, SkeletonLoader } from '@shared/ui-kit';

export const ListLoader: React.FC<PropsWithChildren<ListLoaderProps>> = ({ isLoading, children }) => (
  <SkeletonLoader
    skeleton={
      <VStack width="full">
        {[...Array(5)].map((_, index) => (
          <LotRowSkeleton key={index} />
        ))}
      </VStack>
    }
    isLoading={isLoading}
  >
    {children}
  </SkeletonLoader>
);
