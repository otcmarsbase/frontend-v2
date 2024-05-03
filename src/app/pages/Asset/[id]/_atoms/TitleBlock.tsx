import { Button, HStack, Heading, Image } from '@chakra-ui/react';

export interface TitleBlockProps {
  title: React.ReactNode;
  logoUrl: string;
  analyticsUrl?: string;
}

export function TitleBlock({ logoUrl, title, analyticsUrl }: TitleBlockProps) {
  return (
    <HStack
      w="100%"
      gap="1.5rem"
      bg={{ base: 'dark.900', lg: 'none' }}
      borderRadius={{ base: 'sm', lg: 'none' }}
      p={{ base: '0.75rem', lg: '0' }}
    >
      <HStack gap="0.5rem">
        {logoUrl && (
          <Image borderRadius="sm" w={{ base: '2rem', lg: '4rem' }} h={{ base: '2rem', lg: '4rem' }} src={logoUrl} />
        )}
        {title && (
          <Heading variant="h2" fontSize={{ base: '1rem', lg: '2rem' }} fontWeight="500">
            {title}
          </Heading>
        )}
      </HStack>
      {analyticsUrl && (
        <Button as="a" href={analyticsUrl} size="xs" variant="darkOutline">
          Download asset research
        </Button>
      )}
    </HStack>
  );
}
