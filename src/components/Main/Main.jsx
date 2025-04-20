import { Routes, Route, Navigate } from "react-router-dom"
import PageCatalog from "@/pages/PageCatalog/PageCatalog"
import PageBrands from '@pages/PageBrands'

const Main = () => {

    return (
        <>
            <main>
                <Routes>
                    <Route path = {'/'} element = {<Navigate to = '/catalog' replace />} />
                    <Route path = {'/catalog'} element = {<PageCatalog />}/>
                    <Route path = {'/Brands'} element = {<PageBrands />}/>
                </Routes>
            </main>
        </>
    )
}

export default Main