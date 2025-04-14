import classNames from 'classnames';

import Button from '@components/Button/Button.jsx'
import ChangeButtonsStates from '@/utils/ChooseGlobalCategory.jsx';

import styles from './GlobalCategoryElement.module.css';

const GlobalCategoryElement = ({ categoryName, categoryId, className }) => {

    const handleChangeButton = (e) => {
        ChangeButtonsStates(e.target)
    }

    return (
        <>
            <li id = {categoryId}>
                <Button 
                    buttonType = 'button'
                    onClick = {handleChangeButton}
                    className = {classNames(styles.button, className)}
                    buttonContent = {categoryName}
                />
            </li>
        </>
    )
}

export default GlobalCategoryElement;