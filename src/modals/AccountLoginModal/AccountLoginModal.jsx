import classNames from 'classnames';

import Button from '@components/Button/Button.jsx';

import GetModalClassName from '@utils/GetModalClassName.jsx'; 

import styles from './AccountLoginModal.module.css';
import modalDefaultStyles from '@defaultStyles/defaultModal.module.css' ;
import inputDefaultStyles from '@defaultStyles/defaultInput.module.css';


const AccountLoginModal = ({accountModalActive, setAccountModalActive}) => {
    return (
        
        <>
            <div className = {GetModalClassName(accountModalActive)} onClick = {() => setAccountModalActive(false)}>
                <div className = {classNames(modalDefaultStyles.modal__frame, styles.modal_type_account_authorization__frame)} onClick = {e => e.stopPropagation()}>
                <Button
                        buttonType = {'button'}
                        className = {modalDefaultStyles.modal__close}
                        onClick = {() => {
                            setAccountModalActive(false)
                        }}
                        buttonContentnt = {''}
                    />
                    <div className = {styles.title__container}>
                        <h3 className = {styles.welcome_message}>Вход в аккаунт</h3>
                    </div>
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
                    <h3 className = {styles.no_account_container}>
                            <Button
                                buttonType = {'button'}
                                className = {styles.registration_span}
                                onClick = {() => {}}
                                buttonContent = {'Зарегистрироваться'}
                                />
                        </h3>
                </div>
            </div>
        </>
    )
}

export default AccountLoginModal