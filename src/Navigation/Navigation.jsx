import Navbar from 'react-bootstrap/Navbar';
import '../Navigation/Navigation.css'

function BrandExample(){
    return(
        <>
        <Navbar className='d-flex navi'>
            <div className="col-6 d-flex justifu-content-start">
            <h1 className='mx-4'>My Alumni.</h1>
            </div>
           
      </Navbar>
     
        </>
    )
}
export default BrandExample;