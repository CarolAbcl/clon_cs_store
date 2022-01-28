import Navbar from '../components/Navbar'

function Layout({children}) {
  return(
    <>
    <Navbar totalItems={0}/>
    {children}
    </>
  )
}

export default Layout