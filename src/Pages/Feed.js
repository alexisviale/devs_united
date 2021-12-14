import usePost from '../Hooks/usePost'
import NewPost from '../Components/NewPost'

const Feed = () => {

    const [posts] = usePost();

    return (
        <div className="App">
        <NewPost />
        {posts.map((post) => (
          <div key={post.id}>
          <h2>{post.Autor}</h2>
          <p>{post.Contenido}</p>
          </div>
          ))}
      </div>
    )
}

export default Feed;