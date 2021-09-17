import rectangle from "../images/Rectangle 1.png"

export default function Footer(){
    return(
        <footer style={{backgroundColor: "#323751", color: "white", padding: "30px", marginTop: "30px"}}>
        <div class="flex" style={{display:"flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap"}}>
          <p class="me-4">Lorem ipsum</p>
          <p class="me-4">Lorem ipsum</p>
          <p class="me-4">Lorem </p>
          <p class="me-4">Lorem ipsum</p>
        </div>
        <hr />
        <img src={rectangle} class="mx-auto d-block pt-5" alt="..." />
        <div class="container mt-5">
          <div class="row justify-content-center icons ps-md-5">
            <span class="col-1 me-3">
              <i class="fab fa-twitter fa-2x"></i>
            </span>
            <span class=" col-1 me-3">
              <i class="fab fa-linkedin-in fa-2x"></i>
            </span>
            <span class="col-1 me-3">
              <i class="fab fa-instagram fa-2x"></i>
            </span>
            <span class="col-1 me-3">
              <i class="fab fa-facebook fa-2x"></i>
            </span>
          </div>
        </div>
        <p class="para text-center pt-4">
          Terms of service - Privacy policy -  © 2021 Tritatech
        </p>
        <p class="para text-center pt-4">
          Website By TritaTech
        </p>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col text-center">
              <div onclick="topFunction()" id="myBtn" title="Go to top">
                <button class="backBtn"><i class="fas fa-chevron-up"></i><p>BACK TO TOP</p></button></div>
            </div>
          </div>
        </div>
      </footer>
    )
}