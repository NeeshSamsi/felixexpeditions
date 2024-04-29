import { mailingListSchema } from "@/lib/schemas"
import { getXataClient } from "@/xata"

export async function POST(
  request: Request,
): Promise<{ success: boolean; message: string }> {
  const { email } = await request.json()
  const { success, error } = mailingListSchema.safeParse({ email })

  if (!success) {
    return {
      success: false,
      message: error?.errors[0].message,
    }
  }

  try {
    const xata = getXataClient()

    await xata.db.MailingList.create({
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
