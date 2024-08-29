import { useGetFeaturedGameQuery } from '../../services/api'

import Loader from '../Loader'
import Tag from '../Tag'
import Button from '../Button'

import * as S from './styles'
import { parseToBrl } from '../../utils'

const Banner = () => {
  //extraindo da função da query configurada, o dado em destaque vira como data, e se estiver carregando, saberemos a partir do isLoading
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do Dia</Tag>
        <div>
          <S.Tittle>{game.name}</S.Tittle>
          <S.Prices>
            De <span>{parseToBrl(game.prices.old)}</span> <br />
            por apenas {parseToBrl(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
