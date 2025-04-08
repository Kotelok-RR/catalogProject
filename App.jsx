import Header from '@components/Header/Header.jsx'
import Main from '@components/Main/Main.jsx'
import Modals from '@features/Modals/Modals.jsx'
import { useState } from "react"

import "@defaultStyles/globalStyles.module.css"
import "@defaultStyles/variables.module.css"


function App() {
  const [accountModalActive, setAccountModalActive] = useState(false)
  return (
    <>
      <Header setAccountModalActive = {setAccountModalActive}/>
      <Main />
      <Modals
        accountModalActive = {accountModalActive}
        setAccountModalActive = {setAccountModalActive}
      />
    </>
  )
}

export default App
