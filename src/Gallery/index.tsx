import Section from '../components/Section'
import zelda from '../assets/images/zelda.png'
import { Item, Itens } from './styles'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Itens>
      <Item>
        <img src={zelda} alt="imagem do link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem do link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem do link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem do link" />
      </Item>
    </Itens>
  </Section>
)
export default Gallery
