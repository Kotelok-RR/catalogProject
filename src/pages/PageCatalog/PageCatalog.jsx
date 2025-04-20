import GlobalCategories from '@/features/GlobalCategories/GlobalCategories';
import ProductsFilter from '@/features/ProductsFilter/ProductsFilter';
import ProductsContainer from '@features/ProductContainer/ProductContainer.jsx';

import styles from './PageCatalog.module.css'

const PageCatalog = () => {
    return (
        <>
            <div className = {styles.container}>
                <GlobalCategories className = {styles['global-categories_container']}/>
                <ProductsFilter  className = {styles['products-filter_container']}/>
                <ProductsContainer className = {styles['products-container']}/>
            </div>
        </>
    )
}

export default PageCatalog