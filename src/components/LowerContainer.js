import openProjects from '../images//open-projects.png'

export default function LowerContainer(){
    return(
        <div>
            <div class="container">
                <div class="row mt-5 ">
                    <div class="col-sm-12 col-md-6 mt-5">
                        <img src={openProjects} class="img-fluid mx-auto d-block" alt="..." />
                    </div>
                    <div class="col-sm-12 col-md-6 mt-5 px-5 ">
                        <p class="fs-3 fw-bold text-center text-md-start text-lg-start text-xl-start">Lorem ipsum</p>
                        <p class="fs-5 para text-center text-md-start text-lg-start text-xl-start">Lorem ipsum dolor sit amet. Est recusandae dolores hic alias quas et tempora obcaecati qui rerum exercitationem aut nesciunt maiores ea alias exercitationem. Aut deleniti mollitia sit voluptatum nemo eum rerum molestias 33 facere odit qui laboriosam quia.</p>
                    </div>
                </div>
            </div>
            
            <div class="container align-self-center mt-5">
            <div class=" row question">
                <div class="col align-self-center">
                    <p class="fs-2 text-center">
                    Questions?
                    </p>
                    <p class="para text-center">
                    Help is free, and TritaTech  is ready to assist you to
                    <br />
                    make sure everything goes smoothly
                    </p>
                </div>
                
                <div class="container mt-4">
                <div class="row justify-content-center icons">
                    <span class="col-1 ms-lg-5 me-3">
                    <i style={{color: "#3082B5"}} class="far fa-envelope fa-2x"></i>
                    </span>
                    <span class=" col-1 me-3">
                    <i style={{color: "#3082B5"}} class="fas fa-phone-alt fa-2x"></i>
                    </span>
                    <span class="col-1 me-3">
                    <i style={{color: "#3082B5"}} class="fab fa-whatsapp fa-2x"></i>
                    </span>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}