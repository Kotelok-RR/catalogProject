import Header from '@components/Header/Header.jsx'
import Main from '@components/Main/Main.jsx'
import { useState } from "react"

const PageCatalog = () => {
    const [accountModalActive, setAccountModalActive] = useState(false)
    return (
        <>
            <Header setAccountModalActive = {setAccountModalActive}/>
            <Main accountModalActive = {accountModalActive} setAccountModalActive = {setAccountModalActive}/>
        </>
    )
}

export default PageCatalog