import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

type CartState = {
  //estado criado para conseguir typar o array para um array de Game
  items: Game[]
}

const initialState: CartState = {
  items: [] //agr sim temos o array do estado inicial typado
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //funções que iram alterar o carrinho de compras
    //state é o estado que se encontra o elemento, e a action que é a ação que contém o item que será adicionado
    add: (state, action: PayloadAction<Game>) => {
      state.items.push(action.payload)
    }
  }
})

//exportando os nossas actions
export const { add } = cartSlice.actions
export default cartSlice.reducer
