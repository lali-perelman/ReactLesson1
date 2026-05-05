import "./App.css"
import Posts from "./components/Posts"
import About from "./components/About"
import { BrowserRouter, Route, Routes, NavLink } from "react-router"
import Header from "./components/Header"
import Home from "./components/Home"
import PostList from "./components/PostList"
import NewPost from "./components/newPost"
import Post from "./components/Post"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} >
          <Route index element={<PostList />} />
          <Route path=":postId" element={<Post />} />
          <Route path="new" element={<NewPost />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )

}
export default App
