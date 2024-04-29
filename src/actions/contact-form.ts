"use server"

import { z } from "zod"
import { contactFormSchema } from "@/lib/schemas"

export async function send({
  name,
  email,
  message,
}: z.infer<typeof contactFormSchema>) {
  await fetch("https://submit-form.com/ijoC9pZN1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _replyto: email,
      "_email.form": name,
    }),
  })
}
