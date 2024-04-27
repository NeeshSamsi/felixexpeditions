"use client"

import type { Content } from "@prismicio/client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { mailingListSchema } from "@/lib/schemas"
import { subscribe } from "@/actions/mailing-list"

import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Icon from "./Icon"

type Props = {
  cta: Content.SiteSettingsDocumentData["mailing_list_call_to_action"]
}

export default function MailingListForm({ cta }: Props) {
  const form = useForm<z.infer<typeof mailingListSchema>>({
    resolver: zodResolver(mailingListSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof mailingListSchema>) {
    const { email } = values

    subscribe({ email })
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
                  className="rounded-sm text-lg placeholder:font-light xl:text-xl"
                  {...field}
                />
              </FormControl>

              <FormMessage className="text-base font-normal xl:text-lg" />
            </FormItem>
          )}
        />
        <Button
          variant="secondary"
          type="submit"
          className="group flex items-center gap-4 text-lg font-normal sm:gap-2 xl:text-xl"
        >
          <span>{cta}</span>
          <Icon
            name="send-horizontal"
            size={20}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Button>
      </form>
    </Form>
  )
}
