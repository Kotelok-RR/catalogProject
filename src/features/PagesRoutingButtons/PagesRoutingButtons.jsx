import classNames from 'classnames'

import Button from '@components/Button/Button.jsx'

import styles from './PagesRoutingButtons.module.css'

import { useNavigate, useLocation } from 'react-router-dom';

const PagesRoutingButtons = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <div className = {styles['pages-routing__container']}>
                <Button 
                    buttonType = {'button'}
                    onClick = {() => navigate('/catalog')}
                    className={classNames(
                        styles['button-routing'],
                        styles['button-routing_type-catalog'],
                        pathname === '/catalog' && styles['button-routing-is-active']
                    )}
                    buttonContent = {'Каталог'}
                />
                <Button 
                    buttonType = {'button'}
                    className={classNames(
                        styles['button-routing'],
                        styles['button-routing_type-brands'],
                        pathname === '/brands' && styles['button-routing-is-active']
                    )}
                    onClick = {() => navigate('/brands')}
                    buttonContent = {'Бренды'}
                />
        </div>
    )
}

export default PagesRoutingButtons