import Navbar from '../components/Navbar'
import Modal from './modals/Modal'

function Layout({ children }) {
  return (
    <>
      <Modal />
      <Navbar />
      {children}
    </>
  )
}

export default Layout
