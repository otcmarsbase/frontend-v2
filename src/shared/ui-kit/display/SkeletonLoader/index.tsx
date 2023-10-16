import { PropsWithChildren, ReactNode } from 'react';

export interface SkeletonLoaderProps {
  skeleton: ReactNode;
  isLoading?: boolean;
}

export const SkeletonLoader: React.FC<PropsWithChildren<SkeletonLoaderProps>> = ({ skeleton, isLoading, children }) => {
  return <>{isLoading ? skeleton : children}</>;
};
