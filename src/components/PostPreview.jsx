
import style from "./Post.module.css"
import { useNavigate } from "react-router";

function PostPreview({ index, title, body = " " }) {
    let navigate = useNavigate();
    const hendleClick = () => {
        navigate(`/posts/${index}`)
    }
    return (
        <div className={style.container} onClick={hendleClick}>
            <p className={style.title}>{title}
                {body.length > 10 ? body.slice(0, 10) + "..." : body}
            </p>
            <p className={style.body}>
                {body.length > 20 ? body.slice(0, 20) + "..." : body}
            </p>        </div>
    );
}
export default PostPreview