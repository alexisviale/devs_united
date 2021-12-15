import usePost from '../Hooks/usePost'
import '../CSS/Posts.css'

const Posts = () => {

    const [posts] = usePost();
    console.log(usePost())


    return (
        <div className='posts-container'>
        {posts.map((post) => (
            <div className='post-container' key={post.id}>
                <div className='container'>
                    <div className='autor-date'>
                    <h4 className='post-autor'>{post.Autor}</h4>
                    <h4>{(new Date(post.date.seconds * 1000).toDateString())}</h4>
                    </div>
                    <p className='post-content'>{post.Contenido}</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Posts;