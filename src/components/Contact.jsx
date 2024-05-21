import {
  Description,
  Field,
  Fieldset,
  Label,
  Legend,
  Textarea,
  Input,
  Button,
} from '@headlessui/react'
import Section from './Section'
import clsx from 'clsx'

const Contact = () => {
  return (
    <Section leftText text="Contact me">
      <form
        className="w-full px-4 ring-1 bg-zinc-900 ring-zinc-800 rounded-md  p-6 sm:p-10"
        action="">
        <Fieldset className="space-y-8">
          <Legend className="text-base/7 font-semibold text-zinc-50">
            Let&apos;s work together!
          </Legend>
          <Field>
            <Label className="text-sm/6 font-medium text-zinc-50">
              Your name
            </Label>
            <Input
              className={clsx(
                'mt-3 block w-full rounded-lg border-none bg-white/5 py-3 px-4 text-sm/6 text-zinc-50',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
            />
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-zinc-50">
              Your email
            </Label>
            <Input
              className={clsx(
                'mt-3 block w-full rounded-lg border-none bg-white/5 py-3 px-4 text-sm/6 text-zinc-50',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
              type="email"
            />
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-zinc-50">
              Your message
            </Label>
            <Description className="text-sm/6 text-zinc-400">
              If you have an idea, let&apos;s talk about it 😁
            </Description>
            <Textarea
              className={clsx(
                'mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-3 px-4 text-sm/6 text-zinc-50',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
              rows={3}
            />
          </Field>
          <div className="text-right">
            <Button
              className="rounded-md bg-brand py-3 px-4 font-medium text-sm sm:text-base text-zinc-50 data-[hover]:bg-brand/80 data-[active]:bg-brand transition-colors"
              type="submit">
              Send message
            </Button>
          </div>
        </Fieldset>
      </form>
    </Section>
  )
}

export default Contact
