import { useMemo } from 'react';

import { Text, HStack, useToken, ChakraProps } from '@chakra-ui/react';
import { PieTooltipProps, ResponsivePie } from '@nivo/pie';
import { Tooltip } from '@shared/ui-kit';

import theme from './theme';

export type ChartPieData = {
  id: string;
  label: string;
  value: number;
  color: ChakraProps['color'];
};

export interface ChartPieProps {
  size?: 'xs' | 'sm' | 'md';
  data: ChartPieData[];
  formatValue?: (point: PieTooltipProps<ChartPieData>) => React.ReactNode;
}

export const ChartPie: React.FC<ChartPieProps> = ({ size = 'md', formatValue, data }) => {
  const colors: string[] = useToken('colors', data.map((item) => item.color) as any);

  const chartData = useMemo(() => {
    return data.map((item, index) => ({
      ...item,
      color: colors[index],
    }));
  }, [data, colors]);

  return (
    <ResponsivePie
      data={chartData}
      margin={{ top: 20, bottom: 20, left: 10, right: 150 }}
      innerRadius={0.5}
      tooltip={(point) => (
        <Tooltip
          isOpen
          children={<div />}
          label={
            <HStack alignItems="start">
              <Text fontSize="sm" fontWeight={800}>
                {point.datum.label}:
              </Text>
              {formatValue ? formatValue(point) : <Text fontSize="sm">{point.datum.formattedValue}</Text>}
            </HStack>
          }
        />
      )}
      padAngle={4}
      cornerRadius={4}
      activeOuterRadiusOffset={8}
      colors={colors}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.6]],
      }}
      theme={theme}
      enableArcLinkLabels={false}
      enableArcLabels={false}
      legends={[
        {
          anchor: 'right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemWidth: 60,
          itemHeight: 14,
          itemTextColor: '#94969A',
          itemDirection: 'left-to-right',
          itemsSpacing: 15,
          itemOpacity: 1,
          symbolSize: 14,
          toggleSerie: true,
          symbolShape: 'square',
        },
      ]}
    />
  );
};
