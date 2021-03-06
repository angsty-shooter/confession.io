import { ProxyState } from '../AppState.js'
import Post from '../Models/Post.js'
import { api } from './AxiosService.js'

class PostsService {
  async createPost(formData) {
    try {
      const res = await api.post('/api/posts', formData)
      console.log(res)
      ProxyState.posts = [...ProxyState.posts, new Post(res.data)]
    } catch (error) {
      console.error(error)
    }
  }
}

export const postsService = new PostsService()
