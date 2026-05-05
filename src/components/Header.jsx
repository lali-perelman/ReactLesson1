import { NavLink } from "react-router"
function Header() {
    return (
        <header style={{padding:20, backgroundColor:"lightblue", marginBottom:20}}>
               <NavLink to="/" style={({isActive}) => (
                {padding: 5,
                color: isActive ? "red" : "black"})}>
                Home
            </NavLink>
            <NavLink to="/posts" style={({isActive}) => (
                {padding: 5,
                color: isActive ? "red" : "black"})}>
                Posts
            </NavLink>
               <NavLink to="/about" style={({isActive}) => (
                {padding: 5,
                color: isActive ? "red" : "black"})}>
                About
            </NavLink>
        </header>
    )
}
export default Header