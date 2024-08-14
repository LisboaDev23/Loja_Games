//o componente de carrinho vai ser um componente global que será
//acessível por qualquer lugar da página, logo ele ficará de fora em todos

import Botao from '../Button'
import Tag from '../Tag'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'
import starWars from '../../assets/images/star_wars.png'

//os outros componentes principais da aplicação no App.tsx
const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={starWars} alt="" />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
          </CartItem>
        </ul>
        <Quantity>2 jogo(s) no carrinho</Quantity>
        <Prices>
          Total de R$ 250,00
          <span>Em até 6x sem juros</span>
        </Prices>
        <Botao title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Botao>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
