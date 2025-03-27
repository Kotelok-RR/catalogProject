import classNames from 'classnames'

import Button from '@components/Button/Button.jsx'

import styles from './PagesRoutingButtons.module.css'

import { Link } from 'react-router-dom'

const PagesRoutingButtons = () => {
    return (
        <div className = {styles['pages-routing__container']}>
            <Link to = '/'>
                <Button 
                    buttonType = {'button'}
                    className = {classNames(styles['button-routing'], styles['button-routing_type-catalog'], styles['button-routing-is-active'])}
                    onClick = {() => {}}
                    buttonContent = {'Каталог'}
                />
            </Link>
            <Link to = '/Brands'>
                <Button 
                    buttonType = {'button'}
                    className = {classNames(styles['button-routing'], styles['button-routing_type-brands'])}
                    onClick = {() => {}}
                    buttonContent = {'Бренды'}
                />
            </Link>
        </div>
    )
}

export default PagesRoutingButtons