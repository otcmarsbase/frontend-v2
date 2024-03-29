import { ComponentWithAs, IconProps } from '@chakra-ui/react';
import { DeskGatewaySchema } from '@schema/desk-gateway';
import { UIIcons } from '@shared/ui-icons';

export const AssetLinkTypeIconMap = new Map<DeskGatewaySchema.AssetLinkType, ComponentWithAs<'svg', IconProps>>([
  ['DISCORD', UIIcons.Social.DiscordIcon],
  ['GITHUB', UIIcons.Social.GithubIcon],
  ['OTHER', UIIcons.Social.InternetIcon],
  ['REDDIT', UIIcons.Social.RedditIcon],
  ['SITE', UIIcons.Social.GithubIcon],
  ['TWITTER', UIIcons.Social.TwitterIcon],
  ['WHITE_PAPER', UIIcons.Social.TelegramIcon],
]);
