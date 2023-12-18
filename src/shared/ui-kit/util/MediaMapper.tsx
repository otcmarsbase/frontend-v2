import { useBreakpointValue } from '@chakra-ui/react';

const MediaMapperSize = ['base', 'sm', 'md', ''] as const;
type MediaMapperSize = (typeof MediaMapperSize)[number];

export interface MediaMapperProps {}

export const MediaMapper: React.FC<MediaMapperProps> = () => {
  const Component = useBreakpointValue<React.ComponentType>({}, { ssr: false });

  return <></>;
};
