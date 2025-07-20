import Head from 'next/head'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { PLACEHOLDER_IMAGE } from '../constants'

export default function Home() {
  return (
    <div className="p-6">
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <h1 className="text-3xl font-bold mb-4">Featured Listings</h1>

      <Card
        title="Modern Apartment"
        description="A cozy modern apartment in the heart of the city."
        image={PLACEHOLDER_IMAGE}
      />

      <div className="mt-4">
        <Button label="Book Now" onClick={() => alert('Booked!')} />
      </div>
    </div>
  )
}
