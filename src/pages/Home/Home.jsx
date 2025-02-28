/* eslint-disable react/no-unescaped-entities */
import './Home.css';
import HeaderImage from '../../assets/avt_neo2.jpeg';

// FontAwesome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Router Dom Link
import { Link } from 'react-router-dom';

// Import thư viện đánh máy
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <header>
      <div className="container container-lg header-container">
        <img src={HeaderImage} alt='' />

        <div className="header-right">
          <h1>
            <span>Hi, I'm Neo Nguyen</span><br />
            <TypeAnimation
              sequence={[
                'Mobile Developer', 4000,
                'Web Developer', 4000,    
                'Designer', 4000
              ]}
              wrapper="span"
              speed={50} // Tốc độ đánh máy (ms)
              repeat={Infinity} // Lặp vô hạn
              className='type-animation'
            />
          </h1>
          <p>
            Welcome to my portfolio website. Have a great day!<br />
            You can contact me via email imneoneonguyen@gmail.com
          </p>

          <Link className='btn' to={'/about'}>
            About Me
            <span><FontAwesomeIcon icon={faArrowRight} /></span>
          </Link>
        </div>
      </div>
    </header>
  );
}
