import { Routes, Route } from "react-router-dom"
import AccountLoginModal from '@modals/AccountLoginModal/AccountLoginModal.jsx'
import ProductsContainer from '@components/Containers/ProductContainer/ProductContainer.jsx'
import BrandsContainer from '@components/Containers/BrandsContainer/BrandsContainer.jsx'

const Main = ({accountModalActive, setAccountModalActive}) => {

    return (
        <>
            <main>
                <AccountLoginModal 
                    accountModalActive = {accountModalActive}
                    setAccountModalActive = {setAccountModalActive}
                />
                <Routes>
                    <Route exact path = {'/'} element = {<ProductsContainer />}/>
                    <Route path = {'/Brands'} element = {<BrandsContainer />}/>
                </Routes>
            </main>
        </>
    )
}

export default Main