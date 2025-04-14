import AccountLoginModal from '@modals/AccountLoginModal/AccountLoginModal.jsx'

const Modals = ({accountModalActive, setAccountModalActive}) => {
  return (
    <>
      <AccountLoginModal 
        accountModalActive = {accountModalActive}
        setAccountModalActive = {setAccountModalActive}
      />
    </>
  )
}

export default Modals
