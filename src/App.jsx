
import { useState } from 'react'
import Post from './components/Post'
import NewPost from './components/newPost'

function App() {
  const [posts,setPosts] = useState([
    { name:"Lali Perelman", content:"my first project" },
    { name:"Shevi", content:"my second project" },
    { name:"chana hersh", content:"my third project" }
  ])
  const handlLogPosts=()=>{
    console.log ("The Current Post in tha array",posts)
  }

  const handlEditPost=(index, newContent)=>{
    setPosts((prevPosts)=>{
      const updatePosts=[...prevPosts]
      updatePosts[index].content=newContent
      return updatePosts;
    })
  }
  return (
    <>
      {posts.map((post, index) => 
      <Post key={index} name={post.name} content={post.content} onEdit={(newContent)=>handlEditPost(index, newContent)}/>)}
   
    <div style={{display: "flex", justifyContent: "center"}}>
      <button className="button" onClick={handlLogPosts}>
        Log Posts to Console
      </button>
    </div>

    <div className='modalBackdrop'>
    <NewPost/>
    </div>
    </>
  )
}
export default App
