import rectangle from "../images/Rectangle 1.png"

export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-transperent">
            <div class="container-fluid">
                <img src={rectangle} alt="" width="30" height="30" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item ms-5">
                    <a class="nav-link" href="/">Open Projects</a>
                    </li>
                    <li class="nav-item ms-5">
                    <a class="nav-link" href="/">Operator Owner</a>
                    </li>
                    <li class="nav-item ms-5">
                    <a class="nav-link" href="/">Investor</a>
                    </li>
                    <li class="nav-item ms-5">
                    <a class="nav-link" href="/">How It Works</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}