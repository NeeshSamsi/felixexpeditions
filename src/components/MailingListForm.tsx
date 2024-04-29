"use client"

import type { KeyTextField } from "@prismicio/client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { mailingListSchema } from "@/lib/schemas"
import { subscribe } from "@/actions/mailing-list"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Icon from "./Icon"
import Text from "./Text"

type Props = {
  cta: KeyTextField
}

export default function MailingListForm({ cta }: Props) {
  const form = useForm<z.infer<typeof mailingListSchema>>({
    resolver: zodResolver(mailingListSchema),
    defaultValues: {
      email: "",
    },
  })

  const [submitting, setSubmitting] = useState(false)
  const [confirmation, setConfirmation] = useState<string | undefined>(
    undefined,
  )

  async function onSubmit(values: z.infer<typeof mailingListSchema>) {
    const { email } = values

    setSubmitting(true)
    const res = await fetch("/api/mailing-list/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
    const data: { success: boolean; message: string } = await res.json()

    if (data.success) {
      setSubmitting(false)
      form.reset()
      setConfirmation(data.message)
      setTimeout(() => setConfirmation(undefined), 5000)
    } else {
      setSubmitting(false)
      setConfirmation(data.message)
      setTimeout(() => setConfirmation(undefined), 5000)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 sm:flex-row"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Your email address..."
                  type="email"
                  {...field}
                  className="rounded-sm text-lg placeholder:font-light xl:text-xl"
                />
              </FormControl>

              <FormMessage className="text-base font-normal xl:text-lg" />
            </FormItem>
          )}
        />
        <Button
          variant="secondary"
          type="submit"
          disabled={submitting}
          className="group flex items-center gap-4 text-lg font-normal sm:gap-2 xl:text-xl"
        >
          <span>{submitting ? "Submitting" : cta}</span>
          {submitting ? (
            <Icon name="loader-circle" size={20} className="animate-spin" />
          ) : (
            <Icon
              name="send-horizontal"
              size={20}
              className="transition-transform group-hover:translate-x-0.5"
            />
          )}
        </Button>
      </form>
      {confirmation && (
        <Text size="base" className="text-primary">
          {confirmation}
        </Text>
      )}
    </Form>
  )
}
