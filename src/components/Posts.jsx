
import { useEffect, useState } from 'react'
import Post from './Post'
import NewPost from './newPost'
import './Posts.module.css'
import { NavLink, Outlet, useNavigate } from 'react-router'

function Posts() {


  let navigate = useNavigate();

  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json()
      })
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
        setPosts([]);
      })
  }, [])


  const handlLogPosts = () => {
    console.log("The Current Post in tha array", posts)
  }

  const handlEditPost = (index, newbody) => {
    setPosts((prevPosts) => {
      const updatePosts = [...prevPosts]
      updatePosts[index].body = newbody
      return updatePosts;
    })
  }
  const handlAddPostClihck = () => {
    +
      navigate("/posts/new")
  }
  const handlCancel = () => {
    navigate("/posts")
  }
  const handlAddPost = (title, body) => {
    setPosts((prevPosts) => {
      return [...prevPosts, { title, body }]
    })
  }

  return (
    <>

      <div style={{ display: "flex", justifybody: "center" }}>
        <button className="button" onClick={handlLogPosts}>
          Log Posts to Console
        </button>
        <button className="button" onClick={handlAddPostClihck}>
          Add New Post
        </button>
      </div>

      <Outlet context={{ posts, isLoading, error, onAdd: handlAddPost, onEdit: handlEditPost }} />

    </>)
}
export default Posts