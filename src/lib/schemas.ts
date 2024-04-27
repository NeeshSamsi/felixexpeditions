import { z } from "zod"

export const mailingListSchema = z.object({
  email: z.string().email(),
})

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name" }).max(75),
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z.string().min(5, { message: "Please enter a message" }),
})
