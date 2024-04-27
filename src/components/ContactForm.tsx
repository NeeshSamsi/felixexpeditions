"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema } from "@/lib/schemas"
import { cn } from "@/lib/utils"

import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import Icon from "./Icon"
import { send } from "@/actions/contact-form"

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    send(values)
  }

  const textStyles = "text-base lg:text-lg 2xl:text-xl"

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-8 space-y-4 md:space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={cn(textStyles)}>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your full name..."
                  type="text"
                  {...field}
                  className={cn(textStyles, "placeholder:font-light")}
                />
              </FormControl>
              <FormMessage className={cn(textStyles)} />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={cn(textStyles)}>Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your email address..."
                  type="email"
                  {...field}
                  className={cn(textStyles, "placeholder:font-light")}
                />
              </FormControl>
              <FormMessage className={cn(textStyles)} />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={cn(textStyles)}>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your message here"
                  className={cn(
                    textStyles,
                    "resize-none placeholder:font-light",
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage className={cn(textStyles)} />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className={cn(textStyles, "group flex items-center gap-2")}
        >
          <span>Send message</span>
          <Icon
            name="send-horizontal"
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </Button>
      </form>
    </Form>
  )
}
