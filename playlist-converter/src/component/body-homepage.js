import React from 'react';
import Slider from "react-slick";
function Home(props){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(<>
        <div className="row">
      <div className="col s12">
      <Slider {...settings}>
      <div>
        <img src="https://dummyimage.com/1500x400/000/fff" />
      </div>
      <div>
      <img src="https://dummyimage.com/1500x400/000/fff" />
      </div>
    </Slider>
      </div>
      </div>
      <div className="row">
      <div className="col s6">Nunc tristique dapibus faucibus. Donec non metus id erat tristique commodo. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sit amet orci nunc. Quisque mattis sodales tempor. Proin porta dapibus nisl, in tempor urna pretium ut. Proin mollis odio vel ipsum pharetra, sit amet ornare ante gravida. Morbi massa ex, fringilla vitae lobortis non, tincidunt nec erat. Donec dapibus vel neque a vulputate. Donec eu commodo lacus, sit amet lacinia urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum porttitor turpis orci, sed congue nibh semper at. Nulla malesuada justo non hendrerit tristique. Donec maximus, ipsum et consequat efficitur, nisi orci mattis est, at pretium dui nibh id leo.</div>
      <div className="col s6">Nunc tristique dapibus faucibus. Donec non metus id erat tristique commodo. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sit amet orci nunc. Quisque mattis sodales tempor. Proin porta dapibus nisl, in tempor urna pretium ut. Proin mollis odio vel ipsum pharetra, sit amet ornare ante gravida. Morbi massa ex, fringilla vitae lobortis non, tincidunt nec erat. Donec dapibus vel neque a vulputate. Donec eu commodo lacus, sit amet lacinia urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum porttitor turpis orci, sed congue nibh semper at. Nulla malesuada justo non hendrerit tristique. Donec maximus, ipsum et consequat efficitur, nisi orci mattis est, at pretium dui nibh id leo.</div>
    </div>
    </>
    )
    
}

export default Home;