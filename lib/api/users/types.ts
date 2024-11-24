import type { z } from 'zod';
import type * as schemas from './schemas';

export type UserShow = z.infer<typeof schemas.show>;
export type UserFields = z.infer<typeof schemas.fields>;