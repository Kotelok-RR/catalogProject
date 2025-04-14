import classNames from 'classnames'

import Button from '@components/Button/Button.jsx'

import styles from './PagesRoutingButtons.module.css'

import { useNavigate } from 'react-router-dom';

const PagesRoutingButtons = () => {
    const navigate = useNavigate();

    return (
        <div className = {styles['pages-routing__container']}>
                <Button 
                    buttonType = {'button'}
                    className = {classNames(styles['button-routing'], styles['button-routing_type-catalog'], styles['button-routing-is-active'])}
                    onClick={() => navigate('/catalog')}
                    buttonContent = {'Каталог'}
                />
                <Button 
                    buttonType = {'button'}
                    className = {classNames(styles['button-routing'], styles['button-routing_type-brands'])}
                    onClick = {() => navigate('/brands')}
                    buttonContent = {'Бренды'}
                />
        </div>
    )
}

export default PagesRoutingButtons