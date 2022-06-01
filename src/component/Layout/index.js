import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

export default function Layout() {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">Kazmatics</span>

        <Outlet />

        <span className="tags bottom-tags">
          Kazmatics
          <br />
        </span>
      </div>
    </div>
  )
}

// import { Outlet } from 'react-router-dom'
// import Sidebar from '../Sidebar'
// import './index.scss'

// export default function Layout() {
//   return (
//     <div className="App">
//       <Sidebar />
//       <div className="page">
//         <span className="tags top-tags">Kazmatics</span>

//         <Outlet />

//         <span className="tags bottom-tags">
//           Kazmatics
//           <br />
//         </span>
//       </div>
//     </div>
//   )
// }

// import { Outlet } from 'react-router-dom'
// import Sidebar from '../Sidebar'
// import './index.scss'

// export default function Layout() {
//   return (
//     <div className="App">
//       <Sidebar />
//       <div className="page">
//         <span className="tags top-tags">Kazmatics</span>

//         <Outlet />

//         <span className="tags bottom-tags">
//           Kazmatics
//           <br />
//         </span>
//       </div>
//     </div>
//   )
// }
