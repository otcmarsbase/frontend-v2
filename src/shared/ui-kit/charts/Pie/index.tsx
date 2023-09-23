import { useMemo } from 'react';

import { Tooltip, VStack, Text, HStack, Colors, useToken, ChakraProps } from '@chakra-ui/react';
import { ResponsivePie, Pie } from '@nivo/pie';

import { PieSizeDictionary } from './const';

export type ChartPieData = {
  id: string;
  label: string;
  value: number;
  color: ChakraProps['color'];
};

export interface ChartPieProps {
  size?: 'xs' | 'sm' | 'md';
  data: ChartPieData[];
}

export const ChartPie: React.FC<ChartPieProps> = ({ size = 'md', data }) => {
  const { radius } = PieSizeDictionary.get(size);
  const colors = useToken('colors', data.map((item) => item.color) as any);

  const chartData = useMemo(() => {
    return data.map((item, index) => ({
      ...item,
      color: colors[index],
    }));
  }, [data, colors]);

  console.log({ chartData });

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
                {point.datum.label}
              </Text>
              <Text fontSize="sm">{point.datum.formattedValue}</Text>
            </HStack>
          }
        />
      )}
      padAngle={6}
      cornerRadius={4}
      activeOuterRadiusOffset={8}
      colors={{ scheme: 'paired' }}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.6]],
      }}
      enableArcLinkLabels={false}
      enableArcLabels={false}
      legends={[
        {
          anchor: 'right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 5,
          itemWidth: 60,
          itemHeight: 40,
          itemTextColor: '#999',
          itemDirection: 'top-to-bottom',
          itemOpacity: 1,
          symbolSize: 15,
          symbolShape: 'square',
        },
      ]}
    />
  );
};
