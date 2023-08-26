import { ComponentWithAs, IconProps } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';
import { GithubIcon } from 'src/shared/ui-kit/icons/socials';

export const AssetLinkTypeIconMap = new Map<Resource.Asset.AssetLinkType, ComponentWithAs<'svg', IconProps>>([
  ['DISCORD', GithubIcon],
  ['GITHUB', GithubIcon],
  ['OTHER', GithubIcon],
  ['REDDIT', GithubIcon],
  ['SITE', GithubIcon],
  ['TWITTER', GithubIcon],
  ['WHITE_PAPER', GithubIcon],
]);
