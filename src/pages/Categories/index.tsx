import ProductsList from '../../components/ProductsList'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

const promocoes: Game[] = []

const emBreve: Game[] = []

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsporte, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRpg, setGamesRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((resposta) => resposta.json())
      .then((resposta) => setGamesAcao(resposta))
    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((resposta) => resposta.json())
      .then((resposta) => setGamesEsportes(resposta))
    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((resposta) => resposta.json())
      .then((resposta) => setGamesSimulacao(resposta))
    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((resposta) => resposta.json())
      .then((resposta) => setGamesLuta(resposta))
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((resposta) => resposta.json())
      .then((resposta) => setGamesRpg(resposta))
  }, [])

  return (
    <>
      <ProductsList games={gamesAcao} title="Ação" background="black" />
      <ProductsList games={gamesEsporte} title="Esportes" background="gray" />
      <ProductsList games={gamesLuta} title="Luta" background="black" />
      <ProductsList games={gamesRpg} title="RPG" background="gray" />
      <ProductsList
        games={gamesSimulacao}
        title="Simulação"
        background="black"
      />
    </>
  )
}

export default Categories
