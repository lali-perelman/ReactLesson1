import style from './Post.module.css'
import { useState } from 'react'

function Post({name, free_text}) {

const  [content, setFreeText] = useState(free_text)

 const hendleInputChange = (event) => {
  setFreeText(event.target.value)
 }

    return(
        <div className={style.container} >
            <h1 className={style.name}>{name}</h1>
            <p className={style.free_text}>{content}</p>
              <input
        className={style.input} placeholder="Edit post here..."
        type="text"
        onChange={hendleInputChange}  />
        </div>
    )
}
export default Post;