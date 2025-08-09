import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import CarouselWithNav from './../components/CarouselWithNav'
import { Users, Building2, FileStack, HousePlus } from 'lucide-react'
import MapComponent from '@/components/GoogleMaps'
import ContactForm from '@/components/ContactForm'

const images = [
  {
    src: '/images/photos/render1.jpg',
    title: 'Modern Living Room',
    description:
      'Contemporary design with natural lighting and minimalist furniture',
  },
  {
    src: '/images/photos/render2.jpg',
    title: 'Kitchen Design',
    description: 'Sleek kitchen with marble countertops and modern appliances',
  },
  {
    src: '/images/photos/render3.jpg',
    title: 'Bedroom Suite',
    description: 'Cozy bedroom with warm tones and comfortable seating area',
  },
  {
    src: '/images/photos/render4.jpg',
    title: 'Dining Area',
    description: 'Elegant dining space perfect for entertaining guests',
  },
  {
    src: '/images/photos/render5.jpg',
    title: 'Bathroom',
    description: 'Luxurious bathroom with spa-like amenities and natural stone',
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
      <Card.Title href={`/articles/`}>
        <div className="flex flex-col items-center justify-center">
          <Icon size={150} strokeWidth={0.5} />
          <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
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
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {cards.map((card, index) => (
              <Article key={index} title={card.title} icon={card.icon}/>
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <ContactForm />
            <div className="border-1 p-6 dark:border-gray-400">
              <MapComponent />
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Adresa: Put Požara 2, Makarska
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
