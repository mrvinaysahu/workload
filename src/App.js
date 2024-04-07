// import {  Gereet } from "./container/jsx";
import Jsx from "./container/jsx";
import Users from "./container/users";
import DataBinding from "./container/Databinding";
import {Routes,NavLink,Route} from "react-router-dom"

function App(){
  return(
    <div>
  
<nav class="navbar navbar-expand-light bg-light">
  <ul className="nav navbar-nav">
<li className="nav-item">
  <NavLink className="nav-link" to="/">Jsx</NavLink>
</li>
<li className="nav-item">
  <NavLink className="nav-link" to="/binding">DataBinding</NavLink>
</li>
<li className="nav-item">
  <NavLink className="nav-link" to="/users">Users</NavLink>
</li>
  </ul>
</nav>




<div className="container">
<Routes>
<Route path="/" element={<Jsx/>}></Route>
<Route path="/binding" element={<DataBinding/>}></Route>
<Route path="/users" element={<Users/>}></Route>
</Routes>
</div>
    </div>
  )
}
export default App;