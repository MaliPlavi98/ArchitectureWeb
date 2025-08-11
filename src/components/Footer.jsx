import Link from 'next/link'
import { ContainerOuter } from '@/components/Container'

export function Footer() {
  return (
    <footer className="mt-32 flex-none border-t-1 border-zinc-400 bg-white px-4 shadow-md sm:px-8 bg-zinc-900">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-10 pb-16 border-zinc-700/40">
          <div className="flex flex-col items-start justify-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col justify-start gap-x-6 gap-y-1 text-sm font-medium text-zinc-200">
              <span className="footer-text text-sm">Arhitektonski ured Branimir Bagarić</span>
              <span className="footer-text text-sm">Adresa: Put Požara 2, Makarska</span>
              <div className="footer-text text-sm">
                Tel./fax: <a href="tel:+385915555123" className="whitespace-nowrap text-white">+385 91 5555 123</a>
              </div>
              <div className="footer-text text-sm">
                E-mail: <a href="mailto:branimir.bagaric@gmail.com" className="whitespace-nowrap text-white">branimir.bagaric@gmail.com</a>
              </div>
              <span className="footer-text text-sm">OIB:12345678901</span>
            </div>
            <p className="footer-text text-sm">
              &copy; {new Date().getFullYear()} URED OVLAŠTENOG ARHITEKTA
              BRANIMIR BAGARIĆ.
              <br />
              SVA PRAVA PRIDRŽANA.
            </p>
          </div>
        </div>
      </ContainerOuter>
    </footer>
  )
}
