import { PropsWithChildren, useCallback, FormEvent } from 'react';

import { observer } from 'mobx-react-lite';

import { AppLayout } from '@app/layouts';
import { MBPages } from '@app/pages';
import { Box, HStack, Heading, Input, InputGroup, InputLeftElement, VStack } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { UIIcons } from '@shared/ui-icons';
import { UIKit } from '@shared/ui-kit';

import { DashboardTabType, DashboardTabTypeTitleMap } from './const';

export interface DashboardLayoutProps {
  tabType: DashboardTabType;
  handleSearch?: (e: FormEvent<HTMLInputElement>) => void;
}

export const DashboardLayout: React.FC<PropsWithChildren<DashboardLayoutProps>> = ({
  tabType,
  handleSearch,
  children,
}) => {
  const router = useRouter();
  const onRoute = useCallback(
    (value: DashboardTabType) => {
      if (value === 'MY_LOTS') router.navigateComponent(MBPages.Dashboard.Lots, {}, {});
      if (value === 'MY_BIDS') router.navigateComponent(MBPages.Dashboard.Bids, {}, {});
      if (value === 'MY_DEALS') router.navigateComponent(MBPages.Dashboard.Deals, {}, {});
    },
    [router],
  );

  return (
    <Box>
      <Heading fontFamily="promo" fontSize="2rem" marginTop="2.5rem" marginBottom="0.75rem">
        Dashboard
      </Heading>
      <VStack gap="0.5rem">
        <HStack
          justifyContent="space-between"
          width="full"
          gap="0"
          borderRadius="0.75rem"
          bg="dark.900"
          padding="0.5rem"
          paddingRight="1.25rem"
        >
          <HStack width="full" gap="1rem">
            <UIKit.RadioButtons
              maxW="32rem"
              items={DashboardTabType}
              renderKey={(item) => item}
              renderItem={(item) => DashboardTabTypeTitleMap.get(item)}
              variant="solid"
              value={tabType}
              onChange={onRoute}
            />
            {/* <InputGroup size="xs">
                <InputLeftElement pointerEvents="none">
                  <UIIcons.Common.SearchIcon color="orange.500" />
                </InputLeftElement>
                <Input variant="ghost" size="xs" maxW="17rem" placeholder="Search" onInput={handleSearch} />
              </InputGroup> */}
          </HStack>
          <HStack gap="1rem">
            {/* TODO привязать к нормальным компонентам
            <UIKit.Forms.FormField
              name="showAll"
              value={dashboardStore.filters.showAll}
              component={
                <Checkbox onChange={(e) => dashboardStore.changeFilters('showAll', e.target.checked)}>All</Checkbox>
              }
            />
            <FormField
              name="showActive"
              value={dashboardStore.filters.showActive}
              component={
                <Checkbox onChange={(e) => dashboardStore.changeFilters('showActive', e.target.checked)}>
                  Active
                </Checkbox>
              }
            />
            <FormField
              name="showModerated"
              value={dashboardStore.filters.showModerated}
              component={
                <Checkbox onChange={(e) => dashboardStore.changeFilters('showModerated', e.target.checked)}>
                  Moderated
                </Checkbox>
              }
            />
            <FormField
              name="showDraft"
              value={dashboardStore.filters.showDraft}
              component={
                <Checkbox onChange={(e) => dashboardStore.changeFilters('showDraft', e.target.checked)}>Draft</Checkbox>
              }
            /> */}
          </HStack>
        </HStack>
        {children}
      </VStack>
    </Box>
  );
};

DashboardLayout.getLayout = ({ children }) => <AppLayout containerSize="lg">{children}</AppLayout>;
