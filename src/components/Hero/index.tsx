import { useDispatch } from 'react-redux'
import { Game } from '../../pages/Home'
import Botao from '../Button'
import { formataPreco } from '../ProductsList'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
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
            {game.prices.current && (
              <>Por {formataPreco(game.prices.current)}</>
            )}
            {game.prices.current && (
              <Botao
                onClick={addToCart}
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
}

export default Hero
