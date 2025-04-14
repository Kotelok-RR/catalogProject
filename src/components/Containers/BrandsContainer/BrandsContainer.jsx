import axios from "axios"
import { useState, useEffect } from "react"

import styles from './BrandsContainer.module.css'

const BrandsContainer = () => {
    const [brands, setBrands] = useState([])

    async function fetchBrands() {
        const response = await axios.get(`http://localhost:8081/api/v1/brand`)
        setBrands(response.data)
    }

    useEffect(() => {
        fetchBrands()
    }, [])

    const ShowProducts = () => {
        return(
            <div className={styles.products_container}>
                {brands.map(product => {
                    return (
                        <article key={product.id} className={styles.single_product_container}>
                            <div>
                                <ul className={styles.product_description}>
                                    <li className={styles.product_description_name}>{product.description} </li>
                                    <li className={styles.product_description_price}>{product.displayName} ₽</li>
                                </ul>
                            </div>
                        </article>
                    )
                })}
            </div>
        )
    }

    return (
        <>
            <ShowProducts/>  
        </>
    )
}

export default BrandsContainer