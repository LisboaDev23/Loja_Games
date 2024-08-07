import bannerImg from '../../assets/images/fundo_hogwarts.png'
import Botao from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          por R$ 190,00
        </p>
        <Botao
          type="button"
          title="Clique aqui para adicionar este jogo ao carrinho"
          variant="primary"
        >
          Adicionar ao carrinho
        </Botao>
      </Infos>
    </div>
  </Banner>
)

export default Hero
