
import { Button } from "@/components/ui/button"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home - Aula Next JS do zero',
  description: 'Apredendo Next JS do zero com Sujeito Progrmador!',
  openGraph:{
    title: 'Aprendendo Next JS',
    description: 'Apredendo Next JS do zero com Sujeito Programdor!'
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      //teste
    }
  }
}
export const revalidate = 60;
export default function Home(){

  const randomNumber = Math.random() * 10;
  return (
    <div>
      <h1>Página Home</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium provident sequi aliquid, aspernatur aperiam doloremque. Aperiam aspernatur, rerum velit nisi nobis beatae saepe enim natus voluptatibus officia. Esse, atque dolorum.</p>

      <input type="text" className="" />
      <Button className="bg-blue-600 text-white m-2">teste</Button>

   <h2>Numero gerado: {randomNumber}</h2>

    </div>
  )
}