import {useEffect, useState} from 'react'
import { getData } from '../Services/Operaciones'

const usePost = () => {

    const [posts, setPosts] = useState([])

    useEffect( async () => {
      const newPost = await getData("Posts")
      const postData = newPost.docs.map((doc) => {
        return {...doc.data(), id: doc.id}
      })
      setPosts(postData)
    }, [])

    return [posts, setPosts]
}

export default usePost;