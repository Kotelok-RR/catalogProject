import Button from '@components/Button/Button.jsx'
import openModal from '@utils/openModal.jsx'
import PagesRoutingButtons from '../../features/pagesRoutingButtons/pagesRoutingButtons'

import styles from './Header.module.css'
import modalStyles from '@modals/AccountLoginModal/AccountLoginModal.module.css'

const Header = () => {

    return (
        <>
            <header className = {styles["header"]}>
                <Button
                    buttonType = 'button'
                    onClick = {() => { openModal(modalStyles.modal_type_account_authorization__frame) }}
                    className = {styles["header__button-account"]}
                    buttonContent = {''}
                />

                <PagesRoutingButtons className = {styles['route-pages_container']}/>
            </header>
        </>
    )
}

export default Header