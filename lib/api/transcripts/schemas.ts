import { z } from "zod"

export const fields = z.object({
  id: z.string().uuid(),
  content: z.string(),
  session_id: z.string().uuid(),
  created_at: z.string(),
  updated_at: z.string()
})