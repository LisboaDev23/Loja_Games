import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../Gallery'

const Product = () => {
  const { id } = useParams()
  //esse método useParams nos retorna qual foi o paramêtro passado na
  //requisição url product/(parametro) e podemos manipular de todas as formas
  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas nisi
          laboriosam tempore. Est voluptates temporibus ratione consequatur
          fugit aliquid. Ipsum rerum ab excepturi dolores autem quae, quod
          nostrum adipisci dicta! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Et delectus hic fugiat, eos a iste deleniti
          veritatis harum tempora qui possimus, perferendis veniam. Illo
          perferendis debitis a reprehenderit ad laudantium?
        </p>
      </Section>

      <Section title="Mais detalhes" background="gray">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas nisi
          laboriosam tempore. Est voluptates temporibus ratione consequatur
          fugit aliquid. Ipsum rerum ab excepturi dolores autem quae, quod
          nostrum adipisci dicta! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Et delectus hic fugiat, eos a iste deleniti
          veritatis harum tempora qui possimus, perferendis veniam. Illo
          perferendis debitis a reprehenderit ad laudantium?
        </p>
      </Section>

      <Gallery />
    </>
  )
}

export default Product
