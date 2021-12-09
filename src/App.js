/* import Login from './Login' */
import './App.css';
import usePost from './Hooks/usePost'
import NewPost from '../src/Components/NewPost'

function App() {

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
  );
}

export default App;
