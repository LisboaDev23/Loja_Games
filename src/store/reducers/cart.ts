import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Game } from '../../pages/Home'

type CartState = {
  //estado criado para conseguir typar o array para um array de Game
  items: Game[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [], //agr sim temos o array do estado inicial typado
  isOpen: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //funções que iram alterar o carrinho de compras
    //state é o estado que se encontra o elemento, e a action que é a ação que contém o item que será adicionado
    add: (state, action: PayloadAction<Game>) => {
      const game = state.items.find((item) => item.id === action.payload.id)

      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('O jogo já está no carrinho !')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

//exportando os nossas actions
export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
