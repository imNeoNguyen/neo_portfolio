import './Home.css'
import HeaderImage from '../../assets/header.png'

//FontAwesome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

//Router Dom Link
import {Link} from 'react-router-dom'


export default function Home() {
  return (
    <header>
      <div className="container container-lg header-container">
        <img src={HeaderImage} alt=''/>

        <div className="header-right">
          <h1>
            <span>Hi, Im Neo Nguyen</span><br />   
            Web Developer & Designer
          </h1>
          <p>
          Welcome to my portfolio website. Have a great day!<br />
          You can contact me via email.
          </p>

          <Link className='btn' to={'/about'}>
            About Me
            <span><FontAwesomeIcon icon={faArrowRight}/></span>
          </Link>
        </div>
      </div>
    </header>
  )
}
