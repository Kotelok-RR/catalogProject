import styles from './ProductCard.module.css';

const ProductCard = ({ productCardData }) => {

    return (
        <>
            <article key = {productCardData.id} className = {styles.container}>
                <div>
                    <img
                        src = {"src/assets/images/casperro-vista__t-shirt_zapoved.png"}
                        className={styles.product_image}
                        ></img>
                    <ul className={styles.product_description}>
                        <li className={styles.product_description_name}>{productCardData.displayName} </li>
                        <li className={styles.product_description_price}>{productCardData.price} ₽</li>
                        <li className={styles.product_description_brand}>{productCardData.brand.displayName}</li>
                    </ul>
                </div>
            </article>
        </>
    )
}

export default ProductCard