import { useState } from 'react'

const NewPost = () => {
    const [newPost, setNewPost] = useState({Autor: "", Contenido: ""})

    const handleChange = (e) => {
        let nuevoPost = {
          ...newPost,
          [e.target.name]: e.target.value
        }

       setNewPost(nuevoPost)
    }

  console.log(newPost);

  return (
    <div>
        <form>
            <textarea name="Contenido" onChange={handleChange} value={newPost.Contenido} cols="30" rows="5" placeholder="Escribe tu tweet"/>
            <div>
            <input name="Autor" type="text" placeholder="Autor" onChange={handleChange} value={newPost.Autor}></input>
            <button>Tweet</button>
            </div>
            </form>
      </div>
  )
}

export default NewPost;