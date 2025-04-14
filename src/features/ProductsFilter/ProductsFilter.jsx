import classNames from 'classnames';

import ProductsFilterButton from '@/components/ProductsFilterButton/ProductsFilterButton';

import styles from './ProductsFilter.module.css'

const ProductsFilter = ({ className }) => {

    return (
        <>
            <ul className = {classNames(styles.container, className)}>
                <ProductsFilterButton filterName = {'Все'}/>
                <ProductsFilterButton filterName = {'Футболки'}/>
                <ProductsFilterButton filterName = {'Лонгсливы'}/>
                <ProductsFilterButton filterName = {'Свитшоты'}/>
                <ProductsFilterButton filterName = {'Джинсы'}/>
                <ProductsFilterButton filterName = {'Брюки-клеш'}/>
                <ProductsFilterButton filterName = {'Кепки'}/>
                <ProductsFilterButton filterName = {'Сумки'}/>
            </ul>
        </>
    )
}

export default ProductsFilter;