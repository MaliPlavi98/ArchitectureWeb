import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import CarouselWithNav from './../components/CarouselWithNav'
import { Users, Building2, FileStack, HousePlus } from 'lucide-react'
import MapComponent from '@/components/GoogleMaps'
import ContactForm from '@/components/ContactForm'

const images = [
  {
    src: '/images/photos/render1.jpg',
    title: 'Projekt1',
    description:
      'Nekakav opis projekta 1',
  },
  {
    src: '/images/photos/render2.jpg',
    title: 'Projekt2',
    description: 'Nekakav opis projekta 2',
  },
  {
    src: '/images/photos/render3.jpg',
    title: 'Projekt3',
    description: 'Nekakav opis projekta 3',
  },
  {
    src: '/images/photos/render4.jpg',
    title: 'Projekt4',
    description: 'Nekakav opis projekta 4',
  },
  {
    src: '/images/photos/render5.jpg',
    title: 'Projekt5',
    description: 'Nekakav opis projekta 5',
  },
]

const cards = [
  {
    title: 'O nama',
    icon: Building2,
  },
  {
    title: 'Ponuda',
    icon: HousePlus,
  },
  {
    title: 'Reference',
    icon: FileStack,
  },
  {
    title: 'Karijere',
    icon: Users,
  },
]

export const metadata = {
  title: 'Home',
  description: 'Welcome to our website',
}

function Article({ title, icon: Icon }) {
  return (
    <Card>
      <Card.Title href={`/`}>
        <div className="flex flex-col items-center justify-center">
          <Icon size={150} strokeWidth={0.5} className="text-zinc-200" />
          <h3 className="mt-4 text-lg font-semibold text-zinc-200">
            {title}
          </h3>
        </div>
      </Card.Title>
    </Card>
  )
}

export default async function Home() {
  return (
    <>
      <div className="mt-9 mr-9 ml-9">
        <CarouselWithNav images={images} />
      </div>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-12 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <ContactForm />
          </div>
          <div className="space-y-10 lg:pl-6 xl:pl-12">

            <div className="flex flex-row justify-between border-1 p-6 border-gray-400">
              <div>
                <h4 className="text-lg font-semibold text-zinc-200">Adresa</h4>
                <br />
                <p className="mt-1 text-sm footer-text">
                  Ured ovlaštenog arhitekta Branimir Bagarić
                </p>
                <br />
                <p className="mt-1 text-sm footer-text">
                  Put Požara 2, Makarska
                </p>
              </div>
              <div className="ml-5">
                <h4 className="text-lg font-semibold text-zinc-200">Kontakt</h4>
                <br />
                <p className="mt-1 text-sm footer-text">
                  t/f. +385 99 513 4645
                  <br />
                  ured.branimir.bagaric@gmail.com
                </p>
              </div>
            </div>

            <div className="border-1 p-6 border-gray-400">
              <MapComponent />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
