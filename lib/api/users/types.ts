import type { z } from 'zod';
import type * as schemas from './schemas';

export type UserCreate = z.infer<typeof schemas.create>;
export type UserFields = z.infer<typeof schemas.fields>;