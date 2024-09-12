import { HStack, Link } from '@chakra-ui/react';
import { UIIcons } from '@shared/ui-icons';

export interface SocialBlockProps {
  github: string;
  twitter: string;
  telegram: string;
  medium: string;
  linktree: string;
  linkedin: string;
  youtube: string;
}

export function SocialBlock({ github, twitter, linkedin, telegram, medium, linktree, youtube }: SocialBlockProps) {
  return (
    <HStack gap="1.75rem">
      {twitter && (
        <Link target="_blank" href={twitter}>
          <UIIcons.Social.TwitterIcon color="dark.50" />
        </Link>
      )}
      {linkedin && (
        <Link target="_blank" href={linkedin}>
          <UIIcons.Social.LinkedinIcon color="dark.50" />
        </Link>
      )}
      {telegram && (
        <Link target="_blank" href={telegram}>
          <UIIcons.Social.TelegramIcon color="dark.50" />
        </Link>
      )}
      {medium && (
        <Link target="_blank" href={medium}>
          <UIIcons.Social.MediumIcon color="dark.50" />
        </Link>
      )}
      {linktree && (
        <Link target="_blank" href={linktree}>
          <UIIcons.Social.LinktreeIcon color="dark.50" />
        </Link>
      )}
      {github && (
        <Link target="_blank" href={github}>
          <UIIcons.Social.GithubIcon color="dark.50" />
        </Link>
      )}
      {youtube && (
        <Link target="_blank" href={youtube}>
          <UIIcons.Social.YoutubeIcon color="dark.50" />
        </Link>
      )}
    </HStack>
  );
}
