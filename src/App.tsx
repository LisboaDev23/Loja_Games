import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Rotas from './routes'

import { store } from './store'

import { GlobalCss } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
