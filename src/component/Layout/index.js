import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

export default function Layout() {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        {/* <span className="tags top-tags">&lt;Kazmatics&gt;</span> */}
        <span className="tags top-tags">Kazmatics</span>

        <Outlet />

        <span className="tags bottom-tags">
          {/* &lt;/Kazmatics&gt; */}
          Kazmatics
          <br />
          {/* <span className="bottom-tag-html">&lt;pacestter&gt;</span> */}
        </span>
      </div>
    </div>
  )
}
