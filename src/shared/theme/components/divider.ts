import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const dashed = defineStyle({
  border: 'none',
  backgroundImage: `url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill: none; stroke: red; stroke-width: 4; stroke-dasharray: 5 20'/></svg>")`,
});

export const Divider = defineStyleConfig({
  variants: { dashed },
});
