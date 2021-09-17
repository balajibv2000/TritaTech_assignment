import operatorOwner1 from '../images/operator-owner 1.png'
import investor1 from '../images/investor 1.png'
import seller1 from '../images/seller 1.png'

export default function MidContainer(){
    return(
        <div class="container">
            <div class="row mt-5 ">
                <div class="col-sm-12 col-md-6 mt-5">
                    <img src={operatorOwner1} class="img-fluid mx-auto d-block" alt="..." />
                </div>
                <div class="col-sm-12 col-md-6 mt-5 px-5 ">
                    <p class="fs-3 fw-bold text-center text-md-start text-lg-start text-xl-start">Lorem ipsum</p>
                    <p class="fs-5 para text-center text-md-start text-lg-start text-xl-start">Lorem ipsum dolor sit amet. Est recusandae dolores hic alias quas et tempora obcaecati qui rerum exercitationem aut nesciunt maiores ea alias exercitationem. Aut deleniti mollitia sit voluptatum nemo eum rerum molestias 33 facere odit qui laboriosam quia.</p>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-sm-12 col-md-6 order-md-2 mt-5">
                   <img src={investor1} class="img-fluid mx-auto d-block" alt="..." />
                </div>
                <div class="col-sm-12 col-md-6 mt-5 px-5 text-lg-start text-md-start text-sm-center">
                    <p class="fs-3 fw-bold text-center text-md-start text-lg-start text-xl-start">Lorem ipsum</p>
                    <p class="fs-5 para text-center text-md-start text-lg-start text-xl-start">Lorem ipsum dolor sit amet. Est recusandae dolores hic alias quas et tempora obcaecati qui rerum exercitationem aut nesciunt maiores ea alias exercitationem. Aut deleniti mollitia sit voluptatum nemo eum rerum molestias 33 facere odit qui laboriosam quia.</p>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-sm-12 col-md-6 mt-5">
                    <img src={seller1} class="img-fluid mx-auto d-block" alt="..." />
                </div>
                <div class="col-sm-12 col-md-6 mt-5 px-5 text-lg-start text-md-start text-sm-center">
                    <p class="fs-3 fw-bold text-center text-md-start text-lg-start text-xl-start">Lorem ipsum</p>
                    <p class="fs-5 para text-center text-md-start text-lg-start text-xl-start">Lorem ipsum dolor sit amet. Est recusandae dolores hic alias quas et tempora obcaecati qui rerum exercitationem aut nesciunt maiores ea alias exercitationem. Aut deleniti mollitia sit voluptatum nemo eum rerum molestias 33 facere odit qui laboriosam quia.</p>
                </div>
            </div>
        </div>
    )
}