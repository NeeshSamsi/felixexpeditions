"use server"

import { z } from "zod"
import { contactFormSchema } from "@/lib/schemas"

export async function send({
  name,
  email,
  message,
}: z.infer<typeof contactFormSchema>): Promise<{
  success: boolean
  message: string
}> {
  try {
    await fetch(`https://submit-form.com/${process.env.FORMSPARK_FORM_ID}`, {
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

    return {
      success: true,
      message: "Sent message! We'll get back to you soon.",
    }
  } catch (error) {
    return {
      success: false,
      message:
        "Something went wrong. Please try again later or contact us via the information below.",
    }
  }
}
