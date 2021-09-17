import Navbar from './Navbar';
import bussinessOwner1 from '../images/business-owner 1.png'


export default function Main(){
    return(
        <div className="main gradient pt-4">
            <Navbar />
            <div className="container">
                <div className="row main-content">
                    <div className="col-sm-12 col-md-6 align-self-center p-4">
                        <div>
                            <p className="color-white text-center text-md-start text-lg-start text-xl-start">
                                Lorem ipsum dolor sit amet. 
                                Lorem ipsum dolor sit amet. 
                            </p>
                            <div className="d-flex justify-content-center justify-content-lg-start justify-content-md-start pt-5 pt-md-0 pt-lg-0">
                                <button className="btn shadow">Contact Us</button>
                            </div>  
                        </div>  
                    </div>

                    <div className="col-sm-12 col-md-6 pt-4">
                        <img src={bussinessOwner1} className="img-fluid mx-auto d-block" alt="..." />
                    </div>
                </div>
            </div> 
        </div>
    )
}