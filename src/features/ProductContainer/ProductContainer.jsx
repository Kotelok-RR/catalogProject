import { useState, useEffect } from "react"

import { getCatalogProducts } from "@/utils/api"
import ProductCard from "@components/ProductCard/ProductCard"
import Pagination from "@features/Pagination/Pagination.jsx"
import Loader from "@features/Loader/Loader.jsx"

import styles from './ProductsContainer.module.css'

const ProductsContainer = () => {
    const [catalog, setCatalog] = useState([])
    const [page, setPage] = useState(1)
    const [totalElements, setTotalElements] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    const handleSetPage = (value) => {
        setPage(Number(value))
    }

    const renderProducts = (page) => {
        setIsLoading(true)
        getCatalogProducts(page)
            .then((res) => {
                console.log(res)
                setCatalog(res.data.content);
                setTotalElements(res.data.page.totalElements);
            })
            .catch((err) => {
                console.log(`Ошибка при загрузке товаров. ${err}`)
            })
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1500)
            })
    }

    useEffect(() => {
        renderProducts(page)
    }, [page])
    

    const RenderedProducts = () => {
        return (
            <div className={styles.products_container}>
                {catalog.map(productData => {
                    return (
                        <ProductCard
                            productCardData = {productData}
                        />
                    )
                })}
            </div>
        )
    }

    const AmountOfShownProducts = () => {
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
            <Loader isLoading = {isLoading} />
            <div>
                <RenderedProducts/>
                <AmountOfShownProducts/>
                <Pagination 
                    totalPages = {Math.ceil(totalElements / 16)}
                    onSetActiveValue = {handleSetPage}
                />
            </div>
        </>
    )
}

export default ProductsContainer