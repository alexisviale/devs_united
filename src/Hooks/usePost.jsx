import {useEffect, useState} from 'react'
import { getSubscription } from '../Services/Operaciones'

const usePost = () => {

    const [posts, setPosts] = useState([])

    useEffect( () => {
      const unsubscribe = getSubscription("Posts", (snapData) => {
        const postData = snapData.docs.map((doc) => {
          return {...doc.data(), id: doc.id}
        })
        setPosts(postData)
      })
      return () => unsubscribe()
    }, [])

    return [posts, setPosts]
}

export default usePost;