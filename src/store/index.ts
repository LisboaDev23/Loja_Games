import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import cartReducer from './reducers/cart'

export const store = configureStore({
  reducer: {
    //definindo o reducer de carrinho como o cartReducer do arquivo de carrinho configurado
    cart: cartReducer,
    //acessando a propriedade da api - reducerPath que recebe o reducer da api, estamos configurando para que o reducer tenha acesso as requisições
    [api.reducerPath]: api.reducer
  },
  //precisamos configurar o middleware do RTK QUERY
  //middleware são funções executadas entre a ação e o estado final da aplicação
  middleware: (getDefaultMiddleware) =>
    //pegue o middleware padrão e concatene com o middleware da api
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
