import classNames from 'classnames';

import GlobalCategoryElement from "@/components/GlobalCategoryElement/GlobalCategoryElement";

import styles from './GlobalCategories.module.css'
import buttonStyles from '@/components/GlobalCategoryElement/GlobalCategoryElement.module.css'


const GlobalCategories = ({ className }) => {

    return (
        <>
            <ul className = {classNames(styles.container, className)}>
                <GlobalCategoryElement categoryName = {'Все'} className = {buttonStyles['button-is-active']} categoryId = {'all-products'} />
                <GlobalCategoryElement categoryName = {'Верхняя одежда'} categoryId = {'topwear'} />
                <GlobalCategoryElement categoryName = {'Низ'} categoryId = {'bottom-clothes'} />
                <GlobalCategoryElement categoryName = {'Аксессуары'} categoryId = {'accessories'} />
            </ul>
        </>
    )
}

export default GlobalCategories;