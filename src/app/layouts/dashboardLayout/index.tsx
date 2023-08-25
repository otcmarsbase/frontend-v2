import { PropsWithChildren, useCallback } from 'react';

import { observer } from 'mobx-react-lite';

import { router } from '@app/logic';
import pages from '@app/pages';
import { DashboardListType, useStore } from '@app/store';
import { Box, Checkbox, HStack, Heading, Input, InputGroup, InputLeftElement, VStack } from '@chakra-ui/react';
import { FormField, RadioButtons, SearchIcon } from '@shared/ui-kit';

import { AppLayout } from '../appLayout';

export interface DashboardLayoutProps {
  listType: DashboardListType;
}

const listTypeTexts = {
  [DashboardListType.ORDERS]: 'My orders',
  [DashboardListType.BIDS]: 'My bid',
  [DashboardListType.DEALS]: 'My deals',
};

export const DashboardLayout: React.FC<PropsWithChildren<DashboardLayoutProps>> = observer(({ children, listType }) => {
  const { dashboardStore } = useStore();

  const onRoute = useCallback((value: DashboardListType) => {
    if (value === DashboardListType.ORDERS) router.navigateComponent(pages.dashboard.offers, {}, {});
    if (value === DashboardListType.BIDS) router.navigateComponent(pages.dashboard.bids, {}, {});
    if (value === DashboardListType.DEALS) router.navigateComponent(pages.dashboard.deals, {}, {});
  }, []);

  return (
    <Box>
      <Heading fontFamily="promo" fontSize="2rem" marginTop="3rem" marginBottom="2.25rem">
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
            <RadioButtons
              value={listType}
              variant="solid"
              onChange={onRoute}
              items={(Object.keys(listTypeTexts) as DashboardListType[]).map((value) => ({
                value,
                label: listTypeTexts[value],
              }))}
            />
            <InputGroup size="xs">
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="orange.500" />
              </InputLeftElement>
              <Input variant="ghost" size="xs" maxW="17rem" placeholder="Search" />
            </InputGroup>
          </HStack>
          <HStack gap="1rem">
            <FormField
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
            />
          </HStack>
        </HStack>
        {children}
      </VStack>
    </Box>
  );
});

DashboardLayout.getLayout = ({ children }) => <AppLayout containerSize="md">{children}</AppLayout>;
