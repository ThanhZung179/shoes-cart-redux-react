import { dataProducts } from '../data'
import nikeLogo from './assets/nike.png'
import CartList from './components/CartList'

function App() {

  return (
    <>
      <div className='mainContent'>
        <div className='card'>
          <div className='cardTop'>
            <img src={nikeLogo} />
          </div>
          <div className='cardTitle'>
            Our Products
          </div>
          <div className='cardBody'> {/* ProductItem */}
          </div>
        </div>
        <CartList />
      </div>
    </>
  )
}

export default App
