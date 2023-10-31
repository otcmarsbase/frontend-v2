import { Button, HStack, Heading, Image } from '@chakra-ui/react';

export interface TitleBlockProps {
  title: React.ReactNode;
  logoUrl: string;
  analyticsUrl?: string;
}

export function TitleBlock({ logoUrl, title, analyticsUrl }: TitleBlockProps) {
  return (
    <HStack w="100%" gap="1.5rem">
      <HStack gap="0.5rem">
        {logoUrl && <Image borderRadius="sm" w="4rem" h="4rem" src={logoUrl} />}
        {title && (
          <Heading variant="h2" fontWeight="500">
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
