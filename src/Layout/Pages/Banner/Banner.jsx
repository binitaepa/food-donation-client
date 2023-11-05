import { Link } from 'react-router-dom';
import img1 from '../../../assets/img1.jpg';
import img2 from '../../../assets/img2.jpg';
import img3 from '../../../assets/img3.jpg';
import img4 from '../../../assets/img4.jpg';

const Banner = () => {
    return (
        <div className=''>
            <div className="hero ml-10 mb-10 bg-base-100">
  <div className="hero-content flex-col gap-20 justify-between lg:flex-row">
    <div className="carousel w-full h-[300px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    <div>
      <h1 className="text-5xl text-amber-400 font-bold">Donate Extra Food!</h1>
      <p className="py-2 text-amber-700 w-3/4">we believe in the power of food to bring people together and make a positive impact in our communities. Our platform is a place where you can be a part of something meaningful.

Join us in our mission to reduce food waste and combat hunger. Whether you have surplus food to share or are in need of a helping hand, Nourish Neighbor is here to connect those who care with those who hunger.

By offering a simple, convenient way to share your excess food or find support when you need it, we are building a network of compassion and goodwill. Together, we can make a significant change in the lives of many.</p>

    <p className='text-amber-600'>CLICK to <Link to='/registration'> <span className='text-red-500 font-bold '>Register</span> </Link> and <span className='text-lg'> JOIN Us..</span></p>  
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;