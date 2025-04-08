import { useState, useEffect } from "react"

import { getBrandsList } from "@/utils/api"
import Loader from "@/features/Loader/Loader"

import styles from './BrandsContainer.module.css'

const BrandsContainer = () => {
    const [brands, setBrands] = useState([])
    const [loading, setLoading] = useState(false);

    const renderBrands = () => {
        getBrandsList()
            .then((res) => {
                setBrands(res.data);
            })
            .catch((err) => {
                console.log(`Ошибка при загрузке брендов. ${err}`);
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 1500)
            });
    }

    useEffect(() => {
        setLoading(true);
        renderBrands()
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
            <Loader isLoading = {loading} />

            {!loading && (
                <>
                    <ShowProducts/>  
                </>
            )}
        </>
    )
}

export default BrandsContainer