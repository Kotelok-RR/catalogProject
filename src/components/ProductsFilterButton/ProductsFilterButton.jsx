import Button from "@components/Button/Button";

import styles from './ProductsFilterButton.module.css';

const ProductsFilterButton = ({ filterName }) => {
    
    return (
        <>
            <li>
                <Button
                    buttonType = 'button'
                    onClick = {() => {}}
                    classNmae = {styles['button']}
                    buttonContent = {filterName}
                />
            </li>
        </>
    )
}

export default ProductsFilterButton;