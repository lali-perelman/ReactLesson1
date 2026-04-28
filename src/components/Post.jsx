import style from './Post.module.css'
import { useState } from 'react'

function Post({ name, content , onEdit}) {

    const [editContent, setEditContent] = useState(content)
    const [isEditing,SetIsEditing]=useState(false)


    const hendleInputChange = (event) => {
        setEditContent(event.target.value)
    }
    const hendlEditClick=()=>{
        SetIsEditing(true)
    }
    const hendlSaveClick=()=>{
       onEdit(editContent)
        SetIsEditing(false)
    }
    const hendelCancelClick=()=>{
        setEditContent(content)
        SetIsEditing(false)
    }

    return (
        <div className={style.container} >
            <h1 className={style.name}>{name}</h1>
            <p className={style.content}>{content}</p>

            { !isEditing &&<button className={style.button} onClick={hendlEditClick}>Edit</button>}

            {isEditing &&<div className={style.editSection}>
                <input
                    className={style.input} placeholder="Edit post here..."
                    type="text"
                    onChange={hendleInputChange}
                />
                <div className={style.buttonGroup}>
                    <button className={style.button + " " + style.buttonSave} onClick={hendlSaveClick}>
                        Save
                    </button>
                    <button className={style.button + " " + style.buttonCancel} onClick={hendelCancelClick}>
                        Cancel
                    </button>
                </div>
            </div>}
        </div>
    )
}
export default Post;