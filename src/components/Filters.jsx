import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'
import './filters.css'

export function Filters() {
    const {filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className='filters'>

            <div>
                <label htmlFor='price'>Precio a partir de:</label>
                <input 
                type='range'
                id= {minPriceFilterId}
                min='0'
                max='1000'
                onChange={handleChangeMinPrice}
                value= {filters.minPrice}
                 />
                 <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor='category'>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='furniture'>Muebles</option>
                    <option value='groceries'>Comida</option>
                    <option value='fragrances'>Perfumes</option>
                    <option value='beauty'>Maquillaje</option>

                </select>
            </div>
        </section>
    )
}