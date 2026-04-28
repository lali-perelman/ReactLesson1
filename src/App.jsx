
import { useState } from 'react'
import Post from './components/Post'
import NewPost from './components/newPost'

function App() {
  const[isFormOpen, setIsFormOpen]=useState(false)
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
    const handlAddPostClihck=()=>{
      setIsFormOpen(true)
  }
  const handlCancel=()=>{
    setIsFormOpen(false)
  }
  const handlAddPost=(name, content)=>{
    setPosts((prevPosts)=>{
      return [...prevPosts, { name, content }]
    })
  }
  const handlDeletePost = (indexToDelete) => {
  setPosts((prevPosts) => {
    return prevPosts.filter((_, index) => index !== indexToDelete);
  });
};
  return (
    <>
      {posts.map((post, index) => 
      <Post key={index} name={post.name} content={post.content} onEdit={(newContent)=>handlEditPost(index, newContent)} onDelete={() => handlDeletePost(index)}/>)}   
   
    <div style={{display: "flex", justifyContent: "center"}}>
      <button className="button" onClick={handlLogPosts}>
        Log Posts to Console
      </button>
      <button className="button" onClick={handlAddPostClihck}>
        Add New Post
      </button>
    </div>

   {isFormOpen && <div className='modalBackdrop' onClick={handlCancel}></div>}
   {isFormOpen&& <NewPost close={handlCancel} onAdd={handlAddPost}/>}
    
    </>
  )
}
export default App
