import { z } from "zod"

export const fields = z.object({
  id: z.string().uuid(),
  email: z.string().min(1).email(),
  name: z.string().min(4),
  created_at: z.string(),
  updated_at: z.string()
})
export const create = fields.pick({
  email: true,
  name: true
})