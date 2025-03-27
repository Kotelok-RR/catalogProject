import classNames from 'classnames';

import Button from '@components/Button/Button.jsx';

import styles from './AccountLoginModal.module.css';
import modalDefaultStyles from '@defaultStyles/defaultModal.module.css' ;
import inputDefaultStyles from '@defaultStyles/defaultInput.module.css';


const AccountLoginModal = ({accountModalActive, setAccountModalActive}) => {
    return (
        
        <>
            <div className = { accountModalActive ? `${modalDefaultStyles.modal} ${modalDefaultStyles.is_opened}` : `${modalDefaultStyles.modal}`} onClick = {() => setAccountModalActive(false)}>
                <div className = {classNames(modalDefaultStyles.modal__frame, styles.modal_type_account_authorization__frame)} onClick = {e => e.stopPropagation()}>
                    <Button
                        buttonType = {['button']}
                        className = {modalDefaultStyles.modal__close}
                        onClick = {() => {
                            setAccountModalActive(false)
                        }}
                        buttonContent = {''}
                    />
                    <h3 className = {styles.welcome_message}>Добро пожаловать!</h3>
                    <h3 className = {styles.no_account_container}>
                        Нет аккаунта?
                        <span className = {styles.registration_span}>
                            Зарегистрироваться
                        </span>
                    </h3>
                    <form className = {modalDefaultStyles.modal__form}>
                        <div className = {inputDefaultStyles.input__container}>
                            <input 
                                type = "text"
                                name = "login"
                                aria-label = "Введите логин или почту"
                                required
                                className = {inputDefaultStyles.form__input}
                                placeholder = " "
                            />
                            <label className = {classNames(inputDefaultStyles.input__placeholder)}>
                                Логин или почта
                            </label>
                        </div>
                        <Button 
                            buttonType = {'submit'}
                            className = {styles['modal__button-submit']}
                            onClick ={() => {}}
                            buttonContent = {'Войти'}
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default AccountLoginModal