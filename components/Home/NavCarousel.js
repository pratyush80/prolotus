import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import Classes from './NavCarousel.module.css';

function NavCarousel() {
  return ( 
    <div className={Classes.main}>
      <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/vehicle/tata-ace.png"
          alt="First slide" width={2000} height={400}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/vehicle/pick_up.png"
          alt="Second slide" height={400} width={2000}
        />
      </Carousel.Item>
        
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/vehicle/Yodha.png"
          alt="Third slide" height={400} width={2000}
        />
      </Carousel.Item>
         
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/vehicle/mega-xl.png"
          alt="Third slide" height={400} width={2000}
        />
      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/vehicle/3wheel.png"
          alt="Third slide" height={400} width={2000}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/vehicle/auto.png"
          alt="Third slide" height={400} width={2000}
        />
      </Carousel.Item>


      </Carousel>

    </div>
  )
};

export default NavCarousel; 
