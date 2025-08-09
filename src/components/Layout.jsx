import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }) {
  return (
    <>

      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto pt-15 lg:pt-30">{children}</main>
        <Footer />
      </div>
    </>
  )
}
