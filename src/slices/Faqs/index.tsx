import Heading3 from "@/components/Heading3"
import SectionTitle from "@/components/SectionTitle"
import Text from "@/components/Text"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { Content } from "@prismicio/client"
import type { SliceComponentProps } from "@prismicio/react"

/**
 * Props for `Faqs`.
 */
export type FaqsProps = SliceComponentProps<Content.FaqsSlice>

/**
 * Component for "Faqs" Slices.
 */
const Faqs = ({ slice }: FaqsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SectionTitle
        heading={slice.primary.heading}
        subheading={slice.primary.sub_heading}
        description={slice.primary.description}
      />

      <Accordion type="single" collapsible className="mt-8 grid space-y-6">
        {slice.items.map(({ question, answer }, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="space-y-4 rounded-sm border-b-0 bg-muted p-6 shadow-md shadow-secondary/20"
          >
            <AccordionTrigger className="p-0 text-start hover:no-underline">
              <Heading3>{question}</Heading3>
            </AccordionTrigger>
            <AccordionContent className="p-0">
              <Text size="base" className="font-light">
                {answer}
              </Text>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export default Faqs
