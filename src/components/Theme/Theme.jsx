import './Theme.css'

//FontAwesome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

//UseEffects & UseStates Import
import { useEffect, useState } from 'react'

//Use Local Storage For Theme
const getLocalStorageTheme =()=>{
  let theme = localStorage.getItem('theme') || 'light-theme';
  return theme;

  // let theme = 'light-theme';
  // if(localStorage.getItem(theme)){
  //   theme = localStorage.getItem(theme);
  // }
  // return theme;
}


export default function Theme() {

  const [theme, setTheme] = useState(getLocalStorageTheme());

  // let toggleTheme=()=>{
  //   if(Theme === 'light-theme'){
  //     setTheme('dark-theme')
  //   }else{
  //     setTheme('light-theme')
  //   }
  // }

  // useEffect(()=>{
  //   document.documentElement.className = Theme;
  //   localStorage.setItem('theme', Theme );
  // },[Theme])

  const toggleTheme = () => {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  

  return (
    <span className='Bg-toggler' onClick={toggleTheme}>
      <FontAwesomeIcon icon={faMoon}/>
    </span>
  )
}
