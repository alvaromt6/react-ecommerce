import { products as inititalProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'

function App() {
  const [products] = useState(inititalProducts)
  // Conseguimos estos vslores llamando a useFilters
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
        <Header/>
        <Cart/>
        <Products products={filteredProducts} />
        <Footer/>
    </CartProvider>
  )
}

export default App
