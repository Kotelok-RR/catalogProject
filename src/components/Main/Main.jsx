import { Routes, Route } from "react-router-dom"
import PageCatalog from '@pages/PageCatalog'
import PageBrands from '@pages/PageBrands'

const Main = () => {

    return (
        <>
            <main>
                <Routes>
                    <Route exact path = {'/'} element = {<PageCatalog />}/>
                    <Route path = {'/Brands'} element = {<PageBrands />}/>
                </Routes>
            </main>
        </>
    )
}

export default Main