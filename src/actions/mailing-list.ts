"use server"

import { z } from "zod"
import { mailingListSchema } from "@/lib/schemas"
import { getXataClient } from "@/xata"

export async function subscribe({
  email,
}: z.infer<typeof mailingListSchema>): Promise<{
  success: boolean
  message: string
}> {
  try {
    const xata = getXataClient()

    const record = await xata.db.MailingList.create({
      email,
    })

    return {
      success: true,
      message: "Subscribed! Stay tuned for updates.",
    }
  } catch (error: any) {
    if (
      error.errors[0].message ===
      "invalid record: column [email]: is not unique"
    )
      return {
        success: false,
        message: "You are already subscribed.",
      }

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
