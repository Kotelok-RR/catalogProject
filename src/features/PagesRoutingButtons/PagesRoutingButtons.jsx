import classNames from 'classnames'

import Button from '@components/Button/Button.jsx'

import styles from './PagesRoutingButtons.module.css'

const PagesRoutingButtons = () => {
    return (
        <div className = {styles['pages-routing__container']}>
            <Button 
                buttonType = {'button'}
                className = {classNames(styles['button-routing'], styles['button-routing_type-catalog'], styles['button-routing-is-active'])}
                onClick = {() => {}}
                buttonContent = {'Каталог'}
            />
            <Button 
                buttonType = {'button'}
                className = {classNames(styles['button-routing'], styles['button-routing_type-brands'])}
                onClick = {() => {}}
                buttonContent = {'Бренды'}
            />
        </div>
    )
}

export default PagesRoutingButtons