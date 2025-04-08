import styles from "./Loader.module.css";
import classNames from "classnames";

const Loader = ({ isLoading }) => {
        return (
            <div className={classNames(
                    styles.container,
                    isLoading ? styles['container_is-shown'] : styles['container_is-hidden']
                )}
            >
                <span className={styles.loader_element}></span>
            </div>
        );
};

export default Loader;