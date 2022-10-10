import React from 'react'
import Auth from './Auth'

function Login({ darkMode, setDarkMode }) {
  return (
   <div>
     <Auth darkMode={darkMode} setDarkMode={setDarkMode} />
   </div>
  )
}

export default Login