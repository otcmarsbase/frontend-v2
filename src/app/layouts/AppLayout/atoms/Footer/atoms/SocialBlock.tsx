import { Grid, GridItem, Link } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';

export interface SocialBlockProps {
  github: string;
  twitter: string;
  discord: string;
  telegram: string;
  medium: string;
}

export function SocialBlock({ github, twitter, discord, telegram, medium }: SocialBlockProps) {
  return (
    <Grid templateColumns="repeat(6, 1fr)" columnGap="1.75rem">
      {github && (
        <GridItem>
          <Link target="_blank" href={github}>
            <UIIcons.Social.GithubIcon color="dark.50" />
          </Link>
        </GridItem>
      )}
      {twitter && (
        <GridItem>
          <Link target="_blank" href={twitter}>
            <UIIcons.Social.TwitterIcon color="dark.50" />
          </Link>
        </GridItem>
      )}
      {discord && (
        <GridItem>
          <Link target="_blank" href={discord}>
            <UIIcons.Social.DiscordIcon color="dark.50" />
          </Link>
        </GridItem>
      )}
      {telegram && (
        <GridItem>
          <Link target="_blank" href={telegram}>
            <UIIcons.Social.TelegramIcon color="dark.50" />
          </Link>
        </GridItem>
      )}
      {medium && (
        <GridItem>
          <Link target="_blank" href={medium}>
            <UIIcons.Social.MediumIcon color="dark.50" />
          </Link>
        </GridItem>
      )}
    </Grid>
  );
}
