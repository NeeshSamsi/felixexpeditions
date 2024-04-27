"use server"

import { z } from "zod"
import { contactFormSchema } from "@/lib/schemas"

export async function send({
  name,
  email,
  message,
}: z.infer<typeof contactFormSchema>) {
  console.log(`TODO - send contact form`, { name, email, message })
}
