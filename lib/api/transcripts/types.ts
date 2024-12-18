import type { z } from 'zod';
import type * as schemas from './schemas';

// export type Index = z.infer<typeof schemas.index>;
// export type IndexValue = Index['values'][number];
export type TranscriptFields = z.infer<typeof schemas.fields>;