import { z } from "zod"
import {users} from "@/lib/api/users";

export const fields = z.object({
  id: z.string().uuid(),
  code: z.string().min(6).max(6),
  name: z.string().min(1),
  created_at: z.string(),
  updated_at: z.string(),
  send_transcript: z.boolean().default(false),
  send_summary: z.boolean().default(false),
  summary: z.string().nullable()
})
export const relations = z.object({
  user: users.schemas.create,
  creator: users.schemas.fields
})
export const show = fields.merge(relations.pick({ creator: true }));
export const create = z.object({
  session: fields.pick({
    name: true,
    send_summary: true,
    send_transcript: true
  })
}).merge(relations.pick({ user: true }));