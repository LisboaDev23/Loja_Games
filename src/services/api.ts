//precisamos fazer algumas requisições com o rtk query, precisamos importar algumas funções
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  //configurações de onde vamos pegar os dados, passamos o endereço do servidor
  baseQuery: fetchBaseQuery({
    //passando primeiramente o nosso endereço
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  //em cima do endereço passado, vamos construir as nossas chamadas
  endpoints: (builder) => ({
    //no parâmetro da função para fazer a chamada, passamos um construtor da requisição
    getFeaturedGame: builder.query<Game, void>({
      //a partir desse construtor da requisição, chamamos o método query passando o tipo que viráe dps o que será mandado como argumento
      query: () => 'destaque' //endereço de onde bateremos na api de acordo com a URL de base
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getSportGames: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getFightGames: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    //no caso da requisição das informações de um determinado jogo,
    //precisaremos do seu id, logo a query precisará de uma string que é o id que será enviado no parâmetro
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

//exportando a função que irá fazer a requisição a partir da configuração feita no construtor-builder
export const {
  useGetFeaturedGameQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery,
  useGetGameQuery,
  usePurchaseMutation
} = api

export default api

//feita toda essa configuração, precisamos configurar na store o RTK QUERY
