import { useParams } from 'react-router-dom'

import Loader from '../../components/Loader'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

import { useGetGameQuery } from '../../services/api'

type GameParams = {
  id: string
}
const Product = () => {
  const { id } = useParams() as GameParams
  //esse método useParams nos retorna qual foi o paramêtro passado na
  //requisição url product/(parametro) e podemos manipular de todas as formas

  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>

      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b> {game.details.publisher} <br />
          <b>Idioma:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>

      <Gallery
        items={game.media.gallery}
        name={game.name}
        defaultCover={game.media.cover}
      />
    </>
  )
}

export default Product
