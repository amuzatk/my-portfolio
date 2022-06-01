import './App.scss'
import { Routes, Route } from 'react-router-dom'

import Layout from './component/Layout/index'
import Home from './component/Home/Home'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Project from './component/Project/Project'

function App() {
  return (
    <>
      {' '}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project" element={<Project />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

// import './App.scss'
// import { Routes, Route, NavLink, Router } from 'react-router-dom'

// import Home from './component/Home/Home'
// import About from './component/About/About'
// import Contact from './component/Contact/Contact'
// import Project from './component/Project/Project'
// import NavBar from './component/NavBar/NavBar'
// import { Switch } from 'react-router-dom'

// function App() {
//   return (
//     <>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/project" element={<Project />} />
//       </Routes>
//     </>
//   )
// }

// export default App
