import Card from '../components/card'

const products = [
  { name: 'Objek wisata 01', price: 55, image: '/images/djawatan.jpg' },
  { name: 'Objek wisata 02', price: 75, image: '/images/tabuhan.jpg' },
  { name: 'Objek wisata 03', price: 45, image: '/images/miners.jpg' },
  { name: 'Objek wisata 04', price: 42, image: '/images/beach1.jpg' },
  { name: 'Objek wisata 05', price: 43, image: '/images/beach2.jpg' },
  { name: 'Objek wisata 06', price: 42.5, image: '/images/beach1.jpg' },
  { name: 'Objek wisata 07', price: 42.7, image: '/images/beach2.jpg' },
  { name: 'Objek wisata 08', price: 42.2, image: '/images/beach1.jpg' },
  { name: 'Objek wisata 09', price: 42.2, image: '/images/beach1.jpg' },
  { name: 'Objek wisata 10', price: 42.2, image: '/images/beach1.jpg' },
  { name: 'Objek wisata 11', price: 42.2, image: '/images/beach1.jpg' },
  { name: 'Objek wisata 12', price: 55, image: '/images/djawatan.jpg' },
  { name: 'Objek wisata 13', price: 75, image: '/images/tabuhan.jpg' },
  { name: 'Objek wisata 14', price: 45, image: '/images/miners.jpg' },
  { name: 'Objek wisata 15', price: 42, image: '/images/beach1.jpg' },
]

export default function Page() {
  return (
    <main className="container bg-white">
      <section className="grid-row">
        {products.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </section>
    </main>
  )
}
