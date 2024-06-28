import { useEffect, useState } from 'react';
import { useLocation, useSearchParam } from 'react-use';

import { StackProps } from '@chakra-ui/layout/dist/stack/stack';
import { Button, HStack } from '@chakra-ui/react';
import { SpaceProps } from '@chakra-ui/styled-system';
import { useQueryParams } from '@shared/hooks';
import { UIIcons } from '@shared/ui-icons'
import * as yup from 'yup';

export const VIEW_TYPE = ['LIST', 'GRID']
export type VIEW_TYPE = (typeof VIEW_TYPE)[number]

export const ViewSwitcherQueryParamsSchema = yup.lazy((_, { context }) =>
  yup.object({
    view_type: yup.string().oneOf(VIEW_TYPE).default(context.defaultViewType),
  }),
);

export interface ViewSwitcherProps {
  stackProps?: StackProps
  initialValue?: VIEW_TYPE
  onChange?: (type: VIEW_TYPE) => void
}

export function ViewSwitcher({ stackProps, initialValue, onChange }: ViewSwitcherProps) {
  const { queryParams, setQueryParams } = useQueryParams(
    ViewSwitcherQueryParamsSchema.resolve({ context: { defaultViewType: initialValue || 'LIST' } })
  );

  const [selectedViewType, setSelectedViewType] = useState<VIEW_TYPE>(initialValue || 'LIST')

  useEffect(() => {
    setSelectedViewType(queryParams.view_type)

    if (onChange) {
      onChange(queryParams.view_type)
    }
  }, [onChange, queryParams])

  const onClick = (type: VIEW_TYPE) => {
    setQueryParams({ ...queryParams, view_type: type })
  }

  return (
    <HStack {...stackProps}>
      <Button
        width="2.25rem"
        height="2.25rem"
        bg="rgba(37, 38, 40, 0.5)"
        onClick={() => onClick('GRID')}
      >
        <UIIcons.Common.GridIcon width="1.5rem" height="1.5rem" color={ selectedViewType === 'GRID' ? 'orange.300' : 'currentColor' } />
      </Button>
      <Button
        width="2.25rem"
        height="2.25rem"
        bg="rgba(37, 38, 40, 0.5)"
        onClick={() => onClick('LIST')}
      >
        <UIIcons.Common.ListIcon width="1.5rem" height="1.5rem" color={ selectedViewType === 'LIST' ? 'orange.300' : 'currentColor' } />
      </Button>
    </HStack>
  )
}
