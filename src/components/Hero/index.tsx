import { Game } from '../../pages/Home'
import Botao from '../Button'
import { formataPreco } from '../ProductsList'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>De {formataPreco(game.prices.old)}</span>
          )}
          {game.prices.current && <>Por {formataPreco(game.prices.current)}</>}
          {game.prices.current && (
            <Botao
              type="button"
              title="Clique aqui para adicionar este jogo ao carrinho"
              variant="primary"
            >
              Adicionar ao carrinho
            </Botao>
          )}
        </p>
      </Infos>
    </div>
  </Banner>
)

export default Hero
