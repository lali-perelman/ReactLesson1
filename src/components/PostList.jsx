import { useOutletContext } from 'react-router';
import PostPreview from './PostPreview'

function PostList() {
    const { posts, isLoading, error } = useOutletContext();
    return (
        <>
            {isLoading ?
                (<p>Loading...</p>) :
                error ? (
                    <p>Error: {error}</p>
                )
                    : (
                        posts?.map((post, index) => (
                            <PostPreview
                                key={index}
                                index={index}
                                title={post.title}
                                body={post.body}
                            />
                        ))
                    )}
        </>
    );
}
export default PostList