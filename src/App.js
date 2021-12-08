/* import Login from './Login' */
import './App.css';
import usePost from './Hooks/usePost'

function App() {

  const [posts] = usePost();

  return (
    <div className="App">
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
