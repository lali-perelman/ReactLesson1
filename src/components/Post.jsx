import style from './Post.module.css'
import { useState } from 'react'
import { NavLink, useOutletContext, useParams } from 'react-router';
function Post() {

     
    const [editContent, setEditContent] = useState('')
    const [isEditing, SetIsEditing] = useState(false)

    const { postId } = useParams();
    const { posts, onEdit } = useOutletContext();

    const post = posts[Number(postId)]
    if (!post) {
        return <div className={style.container}>
            <h1 className={style.title}>Post Not Found</h1>
        </div>
    }

    const { title, body } = post;


    const hendleInputChange = (event) => {
        setEditContent(event.target.value)
    }
    const hendlEditClick = () => {
        SetIsEditing(true)
        setEditContent(body)
    }
    const hendlSaveClick = () => {
        onEdit(Number(postId), editContent)
        SetIsEditing(false)
    }
    const hendelCancelClick = () => {
        setEditContent(body)
        SetIsEditing(false)
    }


    return (
        <>
            <div className={style.container} >
                <h1 className={style.title}>{title}</h1>
                <p className={style.body}>{body}</p>

                {!isEditing && <><button className={style.button} onClick={hendlEditClick}>Edit</button>
                </>}

                {isEditing && <div className={style.editSection}>
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
            <NavLink to="/posts" className={style.backLink}>
                Back to Posts
            </NavLink>
        </>
    )
}
export default Post;