import classNames from 'classnames';

import Button from '@components/Button/Button.jsx';
import closeModal from '@utils/CloseModal.jsx';

import styles from './AccountLoginModal.module.css';
import modalDefaultStyles from '@defaultStyles/defaultModal.module.css' ;
import inputDefaultStyles from '@defaultStyles/defaultInput.module.css';


const AccountLoginModal = () => {

    return (
        
        <>
            <div className = {modalDefaultStyles.modal}>
                <div className = {classNames(modalDefaultStyles.modal__frame, styles.modal_type_account_authorization__frame)}>
                    <Button
                        buttonType = {['button']}
                        className = {modalDefaultStyles.modal__close}
                        onClick = {() => {
                            closeModal(styles.modal_type_account_authorization__frame)
                        }}
                        buttonContentnt = {''}
                    />
                    <h3 className = {styles.welcome_message}>Добро пожаловать!</h3>
                    <h3 className = {styles.no_account_container}>
                        Нет аккаунта?
                        <span className = {styles.registration_span}>
                            Зарегестрироваться
                        </span>
                    </h3>
                    <form className = {modalDefaultStyles.modal__form}>
                        <div className = {inputDefaultStyles.input__container}>
                            <span className = {classNames(inputDefaultStyles.input__placeholder)}
                            >
                                Логин или почта</span>
                            <input 
                                type = "text"
                                name = "login"
                                aria-label = "Введите логин или почту"
                                required
                                className = {inputDefaultStyles.form__input}
                            />
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