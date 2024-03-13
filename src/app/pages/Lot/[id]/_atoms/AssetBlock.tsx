import { UILogic } from '@app/components';
import { MBPages } from '@app/pages';
import { Button, HStack, Heading, Link } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIIcons } from '@shared/ui-icons';

export interface AssetBlockProps {
  asset: DeskGatewaySchema.Asset | DeskGatewaySchema.LotAssetRequest;
  onCreateBidClick?: () => void;
}

export const AssetBlock: React.FC<AssetBlockProps> = ({ asset, onCreateBidClick }) => {
  const router = useRouter();

  const isAssetCreateRequest = 'title' in asset;

  return (
    <HStack
      w="100%"
      justifyContent="space-between"
      padding={{ base: '0.75rem', md: '1rem 1.25rem' }}
      bg="dark.900"
      borderRadius="0.75rem"
    >
      <HStack gap="2.12rem" flexDirection={{ base: 'column', md: 'row' }}>
        <HStack
          gap={{ base: '0.25rem', md: '1.5rem' }}
          onClick={
            !isAssetCreateRequest
              ? () => router.navigateComponent(MBPages.Asset.__id__, { id: asset.id }, {})
              : undefined
          }
          cursor={isAssetCreateRequest ? 'initial' : 'pointer'}
          _hover={{
            textDecoration: isAssetCreateRequest ? 'initial' : 'underline',
          }}
        >
          {!isAssetCreateRequest && (
            <UILogic.AssetImage w={{ base: '2rem', md: '4rem' }} asset={asset} borderRadius="light" />
          )}
          <Heading as="h2" variant="h4" fontSize={{ base: 'md', md: 'lg' }} fontFamily="promo">
            {isAssetCreateRequest ? asset.title : asset.info.title}
          </Heading>
        </HStack>
        {!isAssetCreateRequest && asset.info.analyticURL && (
          <Button
            as={Link}
            href={asset.info.analyticURL}
            target="_blank"
            size="xs"
            variant="darkOutline"
            leftIcon={<UIIcons.Common.DownloadIcon />}
          >
            Get analytics
          </Button>
        )}
      </HStack>
      <UILogic.AuthAction>
        <Button
          variant="brand"
          onClick={onCreateBidClick}
          size="xs"
          display={{ base: 'block', md: 'none' }}
          leftIcon={<UIIcons.Common.AddIcon />}
        >
          Create bid
        </Button>
      </UILogic.AuthAction>
    </HStack>
  );
};
