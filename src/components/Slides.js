import Carousel from "react-elastic-carousel";
import Item from "./Item";

export default function Slides(){
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 },
      ];
    
      return(
          <div class="gradient mt-5 pt-4">
            <p class="fs-3 fw-bold text-center color-white pt-5" >Testimonials</p>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                <Item><div class="card-body text-center">
                    <p class="card-text" style={{color: "#989EB9"}}>Est ducimus veniam sed explicabo sunt id quos aperiam. Vel cupiditate molestiae id beatae harum et doloremque quia!</p>
                    <h5 class="card-title">Lorem ipsum</h5>
                    <h6 class="card-title">Designation</h6>
                  </div>
                </Item>
                <Item><div class="card-body text-center">
                    <p class="card-text" style={{color: "#989EB9"}}>Est ducimus veniam sed explicabo sunt id quos aperiam. Vel cupiditate molestiae id beatae harum et doloremque quia!</p>
                    <h5 class="card-title">Lorem ipsum</h5>
                    <h6 class="card-title">Designation</h6>
                  </div>
                </Item>
                <Item><div class="card-body text-center">
                    <p class="card-text" style={{color: "#989EB9"}}>Est ducimus veniam sed explicabo sunt id quos aperiam. Vel cupiditate molestiae id beatae harum et doloremque quia!</p>
                    <h5 class="card-title">Lorem ipsum</h5>
                    <h6 class="card-title">Designation</h6>
                  </div>
                </Item>
                <Item><div class="card-body text-center">
                    <p class="card-text" style={{color: "#989EB9"}}>Est ducimus veniam sed explicabo sunt id quos aperiam. Vel cupiditate molestiae id beatae harum et doloremque quia!</p>
                    <h5 class="card-title">Lorem ipsum</h5>
                    <h6 class="card-title">Designation</h6>
                  </div>
                </Item>
                <Item><div class="card-body text-center">
                    <p class="card-text" style={{color: "#989EB9"}}>Est ducimus veniam sed explicabo sunt id quos aperiam. Vel cupiditate molestiae id beatae harum et doloremque quia!</p>
                    <h5 class="card-title">Lorem ipsum</h5>
                    <h6 class="card-title">Designation</h6>
                  </div>
                </Item>
                <Item><div class="card-body text-center">
                    <p class="card-text" style={{color: "#989EB9"}}>Est ducimus veniam sed explicabo sunt id quos aperiam. Vel cupiditate molestiae id beatae harum et doloremque quia!</p>
                    <h5 class="card-title">Lorem ipsum</h5>
                    <h6 class="card-title">Designation</h6>
                  </div>
                </Item>
                </Carousel>
            </div>
          </div>
      )

}