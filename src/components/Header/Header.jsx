import Button from '@components/Button/Button.jsx'
import PagesRoutingButtons from '@features/pagesRoutingButtons/pagesRoutingButtons.jsx'

import styles from './Header.module.css'

const Header = ({setAccountModalActive}) => {
    return (
        <>
            <header className = {styles["header"]}>
                <Button
                    buttonType = 'button'
                    onClick = {() => { setAccountModalActive(true) }}
                    className = {styles["header__button-account"]}
                    buttonContent = {''}
                />

                <PagesRoutingButtons className = {styles['route-pages_container']}/>
            </header>
        </>
    )
}

export default Header