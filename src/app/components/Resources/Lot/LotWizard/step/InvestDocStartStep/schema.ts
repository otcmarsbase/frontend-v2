import { LotCreateSchema } from '../../schema';

export const schema = LotCreateSchema.pick(['type', 'COMMON_DIRECTION_INPUT']);
