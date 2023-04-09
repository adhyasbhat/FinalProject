import '../Home/Home.css';
import {Outlet,Link} from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import Upload from '../Upload/Upload';
import Sidebar from '../Siderbar/Sidebar'
import Chart from '../Chart/Chart'


function HomePage (){
    return (
        <>
        <Navigation/>
        <div className="row d-flex">
            <div className="col-2 sidebarr"><Sidebar/></div>
            <div className="col-6 homeMain ">
                

            <div className="col-12"><Upload/></div>
            <div className="col-12"></div>
            

            </div>
            <div className="col-4 px-5"><Chart/></div>
        </div>

        
        
        
        </>
    );
}
export default HomePage;