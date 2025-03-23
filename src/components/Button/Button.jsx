import classNames from 'classnames'

import defaultButtonStyles from '@defaultStyles/defaultButton.module.css'


const Button = ({buttonType, className, onClick, buttonContent}) => {

    return (
        <>
            <button
                className = {classNames(defaultButtonStyles.button, className)}
                onClick = {onClick}
                type = {buttonType}
            >
                {buttonContent}
            </button>
        </>
    )
}

export default Button