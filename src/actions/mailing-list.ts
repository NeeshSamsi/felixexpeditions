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

    await xata.db.MailingList.create({
      email,
    })

    return {
      success: true,
      message: "Subscribed! Stay tuned for updates.",
    }
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
