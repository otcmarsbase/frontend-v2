import { ComponentWithAs, IconProps } from '@chakra-ui/react';
import { UIIcons } from '@components/icons';
import { Resource } from '@schema/api-gateway';

export const AssetLinkTypeIconMap = new Map<Resource.Asset.AssetLinkType, ComponentWithAs<'svg', IconProps>>([
  ['DISCORD', UIIcons.Social.DiscordIcon],
  ['GITHUB', UIIcons.Social.GithubIcon],
  ['OTHER', UIIcons.Social.DiscordIcon],
  ['REDDIT', UIIcons.Social.RedditIcon],
  ['SITE', UIIcons.Social.GithubIcon],
  ['TWITTER', UIIcons.Social.TwitterIcon],
  ['WHITE_PAPER', UIIcons.Social.TelegramIcon],
]);
