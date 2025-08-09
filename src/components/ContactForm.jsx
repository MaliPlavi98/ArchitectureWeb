'use client'
import React, { useRef, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import ReCAPTCHA from 'react-google-recaptcha'

function ContactForm() {
  const [state, handleSubmit] = useForm('mzzvjdkw')
  const recaptchaRef = useRef(null)
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false)

  const onRecaptchaChange = (value) => {
    setIsRecaptchaVerified(!!value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!isRecaptchaVerified) {
      alert('Please complete the reCAPTCHA verification')
      return
    }

    const recaptchaValue = recaptchaRef.current.getValue()

    // Add recaptcha token to form data
    const formData = new FormData(e.target)
    formData.append('g-recaptcha-response', recaptchaValue)

    handleSubmit(e)
  }

  return (
    <>
      {state.succeeded && (
        <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-black/50">
          <div className="mx-4 max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-zinc-800">
            <h2 className="mb-2 text-lg font-semibold text-teal-600 dark:text-teal-400">
              ✅ Forma je poslana!
            </h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              Vaša poruka je uspješno poslana. Javit ćemo vam se uskoro.
            </p>
            <button
              onClick={() => {
                document.body.classList.remove('overflow-hidden')
                window.location.reload()
              }}
              className="mt-4 w-full rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white hover:bg-teal-500"
            >
              Zatvori
            </button>
          </div>
        </div>
      )}
      <form
        onSubmit={onSubmit}
        action={'https://formspree.io/f/mzzvjdkw'}
        method="POST"
        name="contactForm"
        className="space-y-4 border-1 p-6 dark:border-gray-400"
      >
        <div className="flex justify-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-200">
            Kontaktirajte nas
          </h2>
        </div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-900 dark:text-zinc-200"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="w-full appearance-none bg-white px-3 py-2 shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/15 dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label
          htmlFor="phone-number"
          className="block text-sm font-medium text-zinc-900 dark:text-zinc-200"
        >
          Phone Number
        </label>
        <div className="flex space-x-2">
          <div className="relative grid shrink-0 grid-cols-1">
            <select
              id="country"
              name="country code"
              aria-label="Country code"
              className="w-24 appearance-none bg-black px-3 py-2 text-zinc-900 shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
            >
              <option value="+385 HR">+385 HR</option>
              <option value="+43 AT">+43 AT</option>
              <option value="+387 BA">+387 BA</option>
              <option value="+381 RS">+381 RS</option>
              <option value="+49 DE">+49 DE</option>
              <option value="+386 SI">+386 SI</option>
              <option value="+1 US">+1 US</option>
              <option value="+44 UK">+44 UK</option>
            </select>
            <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
          </div>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Broj mobitela"
            aria-label="Broj mobitela"
            required
            className="flex-1 appearance-none bg-white px-3 py-2 text-zinc-900 shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/15 dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>

        <label
          htmlFor="message"
          className="block text-sm font-medium text-zinc-900 dark:text-zinc-200"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
          className="w-full appearance-none bg-white px-3 py-2 shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/15 dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        {/* reCAPTCHA */}
        <div className="justify-left flex">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LdfrFApAAAAALaUSpJeb3ATV9IfAEVkv-qKW2Lq" // Replace with your actual site key
            onChange={onRecaptchaChange}
            theme="light" // or "dark" for dark theme
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting || !isRecaptchaVerified}
          className="w-full bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-teal-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {state.submitting ? 'Submitting...' : 'Submit'}
        </button>

        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          <span className="font-bold text-teal-500">*</span> Napomena: U slučaju
          ne dobivanja odgovora u roku 2 radna dana, nazvati na broj: +385 91
          123 4567
        </p>
      </form>
    </>
  )
}

export default ContactForm
