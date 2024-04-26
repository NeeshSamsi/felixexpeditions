import { z } from "zod"

export const mailingListSchema = z.object({
  email: z.string().email(),
})
