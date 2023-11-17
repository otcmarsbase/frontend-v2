import { PropsWithChildren, useCallback } from 'react';
import { Controller, FormProvider, useFieldArray, useForm } from 'react-hook-form';

import { AppLayout } from '@app/layouts';
import { MBPages } from '@app/pages';
import { Box, HStack, Heading, VStack, Checkbox } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { UIKit } from '@shared/ui-kit';

import { DashboardFilterStatusDictionary, DashboardTabType, DashboardTabTypeTitleMap } from './const';
import { DashboardFilters } from './types';

export interface DashboardLayoutProps {
  tabType: DashboardTabType;
}

export const DashboardLayout: React.FC<PropsWithChildren<DashboardLayoutProps>> = ({ tabType, children }) => {
  const router = useRouter();
  const onRoute = useCallback(
    (value: DashboardTabType) => {
      if (value === 'MY_LOTS') router.navigateComponent(MBPages.Dashboard.Lots, {}, {});
      if (value === 'MY_BIDS') router.navigateComponent(MBPages.Dashboard.Bids, {}, {});
      if (value === 'MY_DEALS') router.navigateComponent(MBPages.Dashboard.Deals, {}, {});
    },
    [router],
  );
  const { control, ...formProps } = useForm<{ filters: DashboardFilters }>({
    defaultValues: { filters: { status: [] } },
  });

  return (
    <FormProvider control={control} {...formProps}>
      <Box>
        <Heading fontFamily="promo" fontSize="2rem" marginTop={{ base: '0', md: '2.5rem' }} marginBottom="0.75rem">
          Dashboard
        </Heading>
        <VStack gap="0.5rem">
          <HStack
            justifyContent="space-between"
            width="full"
            gap="0"
            borderRadius="0.75rem"
            bg="dark.900"
            padding={{ base: '0', md: '0.5rem' }}
            paddingRight={{ base: '0', md: '1.25rem' }}
          >
            <HStack width="full" gap="1rem">
              <UIKit.RadioButtons
                maxW={{
                  xl: '32rem',
                }}
                items={DashboardTabType}
                renderKey={(item) => item}
                renderItem={(item) => DashboardTabTypeTitleMap.get(item)}
                variant={{ base: 'outline', md: 'solid' }}
                value={tabType}
                onChange={onRoute}
                bg={{ base: 'transparent', md: 'dark.800' }}
              />
            </HStack>
            {tabType !== 'MY_DEALS' && (
              <HStack gap="1rem">
                {DashboardFilterStatusDictionary.entries().map(([status, label]) => (
                  <Controller
                    name="filters.status"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        isChecked={field.value.includes(status)}
                        onChange={(e) => {
                          const oldValue = [...field.value];
                          if (e.target.checked) {
                            field.onChange(oldValue.concat(status));
                          } else {
                            const i = field.value.indexOf(status);
                            oldValue.splice(i, 1);
                            field.onChange(oldValue);
                          }
                        }}
                      >
                        {label}
                      </Checkbox>
                    )}
                  />
                ))}
              </HStack>
            )}
          </HStack>
          {children}
        </VStack>
      </Box>
    </FormProvider>
  );
};

DashboardLayout.getLayout = ({ children }) => <AppLayout containerSize="lg">{children}</AppLayout>;
