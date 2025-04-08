import { useState, useEffect } from "react"

import { getCatalogProducts } from "@/utils/api"
import Pagination from "@features/Pagination/Pagination.jsx"
import Loader from "@/features/Loader/Loader"

import styles from './ProductsContainer.module.css'

const ProductsContainer = () => {
    const [catalog, setCatalog] = useState([])
    const [page, setPage] = useState(1)
    const [totalElements, setTotalElements] = useState(0)
    const [loading, setLoading] = useState(false)

    const handleSetPage = (value) => {
        setPage(Number(value))
    }

    const renderProducts = (page) => {
        getCatalogProducts(page)
            .then((res) => {
                setCatalog(res.data.content);
                setTotalElements(res.data.page.totalElements);
            })
            .catch((err) => {
                console.log(`Ошибка при загрузке товаров. ${err}`)
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 1500)
            });
    }

    useEffect(() => {
        setLoading(true);
        renderProducts(page)
    }, [page])
    

    const ShowProducts = () => {
        return(
            <div className={styles.products_container}>
                {catalog.map(product => {
                    return (
                        <article key={product.id} className={styles.single_product_container}>
                            <div>
                                <img src={"src/assets/images/casperro-vista__t-shirt_zapoved.png"} className={styles.product_image}></img>
                                <ul className={styles.product_description}>
                                    <li className={styles.product_description_name}>{product.displayName} </li>
                                    <li className={styles.product_description_price}>{product.price} ₽</li>
                                    <li className={styles.product_description_brand}>{product.brand.displayName}</li>
                                </ul>
                            </div>
                        </article>
                    )
                })}
            </div>
        )
    }

    const ProductsShown = () => {
        if (page * 16 < totalElements) {
            return (
                <p className={styles.products_amount}>
                    Показаны {page * 16 - 15} - {page * 16} из {totalElements} товаров
                </p>
            )
        }
        else {
            return (
                <p className={styles.products_amount}>
                    Показаны {page * 16 - 15} - {totalElements} из {totalElements} товаров
                </p>
            )
        }
    }


    return (
        <>
            <Loader isLoading = {loading} /> 

            {!loading && (
                <>
                    <ShowProducts/>
                    <ProductsShown/>
                    <Pagination 
                        totalPages = {Math.ceil(totalElements / 16)}
                        onSetActiveValue = {handleSetPage}
                    />
                </>
            )}
        </>
    )
}

export default ProductsContainer