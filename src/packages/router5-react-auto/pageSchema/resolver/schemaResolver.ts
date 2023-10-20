import { PageSchema, PageSchemaStringify } from '../pageSchema';

export function schemaResolver<T>(schemaData: T | PageSchemaStringify<T>, schema: PageSchema<T>): T {
  return null;
}
