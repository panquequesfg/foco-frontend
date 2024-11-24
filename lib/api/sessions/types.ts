import type { z } from 'zod';
import type * as schemas from './schemas';

export type SessionShow = z.infer<typeof schemas.show>;
export type SessionFields = z.infer<typeof schemas.fields>;
export type SessionCreate = z.infer<typeof schemas.create>;