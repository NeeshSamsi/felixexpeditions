"use server"

import { z } from "zod"
import { mailingListSchema } from "@/lib/schemas"

export async function subscribe({ email }: z.infer<typeof mailingListSchema>) {
  console.log(`TODO - subscribe ${email}`)
}
