import { PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';
import { DashboardListType, useStore } from '@app/store';
import {
  Box,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from '@chakra-ui/react';
import { RadioButtons, SearchIcon } from '@shared/ui-kit';
import { RawCheckbox } from '@shared/ui-kit/components/RawCheckbox/RawCheckbox';
import { AppLayout } from '../appLayout';

export interface DashboardLayoutProps {
  listType: DashboardListType;
  onChangeListType: (listType: DashboardListType) => void;
}

const listTypeTexts = {
  [DashboardListType.ORDERS]: 'My orders',
  [DashboardListType.BIDS]: 'My bid',
};

export const DashboardLayout: React.FC<
  PropsWithChildren<DashboardLayoutProps>
> = observer(({ children, listType, onChangeListType }) => {
  const { dashboardStore } = useStore();

  return (
    <Box>
      <Heading
        fontFamily="promo"
        fontSize="2rem"
        marginTop="3rem"
        marginBottom="2.25rem"
      >
        Dashboard
      </Heading>
      <VStack gap="0.5rem">
        <HStack
          justifyContent="space-between"
          width="100%"
          gap="0"
          borderRadius="0.75rem"
          bg="dark.900"
          padding="0.5rem"
          paddingRight="1.25rem"
        >
          <HStack width="100%" gap="1rem">
            <RadioButtons
              value={listType}
              variant="solid"
              onChange={onChangeListType}
              items={(Object.keys(listTypeTexts) as DashboardListType[]).map(
                (value) => ({
                  value,
                  label: listTypeTexts[value],
                }),
              )}
            />
            <InputGroup size="xs">
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="orange.500" />
              </InputLeftElement>
              <Input
                variant="ghost"
                size="xs"
                maxW="17rem"
                placeholder="Search"
              />
            </InputGroup>
          </HStack>
          <HStack gap="1rem">
            <RawCheckbox
              value={dashboardStore.filters.showAll}
              label={'All'}
              id={'showAll'}
              handleChange={dashboardStore.changeFilters}
            />
            <RawCheckbox
              value={dashboardStore.filters.showActive}
              label={'Active'}
              id={'showActive'}
              handleChange={dashboardStore.changeFilters}
            />
            <RawCheckbox
              value={dashboardStore.filters.showModerated}
              label={'Moderated'}
              id={'showModerated'}
              handleChange={dashboardStore.changeFilters}
            />
            <RawCheckbox
              value={dashboardStore.filters.showDraft}
              label={'Draft'}
              id={'showDraft'}
              handleChange={dashboardStore.changeFilters}
            />
          </HStack>
        </HStack>
        {children}
      </VStack>
    </Box>
  );
});

DashboardLayout.getLayout = ({ children }) => (
  <AppLayout containerSize="md">{children}</AppLayout>
);
