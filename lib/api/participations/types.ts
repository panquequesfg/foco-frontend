import type { z } from 'zod';
import type * as schemas from './schemas';

export type ParticipationFields = z.infer<typeof schemas.fields>;
export type ParticipationCreate = z.infer<typeof schemas.create>;