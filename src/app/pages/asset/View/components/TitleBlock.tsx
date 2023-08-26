import { Box, Button, HStack, Heading, Image, Link } from '@chakra-ui/react';

export interface TitleBlockProps {
  title?: React.ReactNode;
  logoUrl?: string;
  analyticsUrl?: string;
}

export function TitleBlock({ logoUrl, title, analyticsUrl }: TitleBlockProps) {
  return (
    <HStack w="100%" gap="1.5rem">
      <HStack gap="0.5rem">
        {logoUrl && (
          <Box>
            <Image src={logoUrl} />
          </Box>
        )}
        {title && (
          <Heading variant="h2" fontWeight="500">
            {title}
          </Heading>
        )}
      </HStack>
      {analyticsUrl && (
        <Link href={analyticsUrl}>
          <Button as="a">Download asset research</Button>
        </Link>
      )}
    </HStack>
  );
}
