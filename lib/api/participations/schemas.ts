import { z } from "zod"
import {sessions} from "@/lib/api/sessions";
import {users} from "@/lib/api/users";

export const fields = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  session_id: z.string().uuid(),
  created_at: z.string(),
  updated_at: z.string()
})
export const relations = z.object({
  session: sessions.schemas.fields.pick({ code: true }),
  user: users.schemas.create
})
export const create = relations.pick({
  session: true,
  user: true
});