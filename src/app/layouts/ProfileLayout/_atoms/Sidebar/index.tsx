import { FC } from 'react';

import pages from '@app/pages';
import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { SystemProps } from '@chakra-ui/styled-system';
import { UIIcons } from '@shared/ui-icons';

import { SidebarLink } from './SidebarLink';

export const Sidebar: FC = () => {
  const flexDirection: SystemProps['flexDirection'] = useBreakpointValue({
    base: 'row',
    xl: 'column',
  });

  return (
    <Flex flexDirection={flexDirection} w="full" gap="0.5rem">
      <SidebarLink page={pages.Profile.Home} pageProps={{}} icon={<UIIcons.Common.ProfileIcon />}>
        My profile
      </SidebarLink>
      <SidebarLink page={pages.Profile.Notification} pageProps={{}} icon={<UIIcons.Common.NotificationIcon />}>
        Notification
      </SidebarLink>
      {/* <SidebarLink page={pages.Profile.Verification} pageProps={{}} icon={<UIIcons.Common.ShieldIcon />}>
        Verification
      </SidebarLink> */}
      <SidebarLink page={pages.Profile.Settings} pageProps={{}} icon={<UIIcons.Common.SettingsIcon />}>
        Settings
      </SidebarLink>
    </Flex>
  );
};
