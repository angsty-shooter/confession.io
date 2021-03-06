import { ProxyState } from '../AppState.js'
import Post from '../Models/Post.js'
import { api } from './AxiosService.js'

class PostsService {
  async decreaseKarma(id) {
    try {
      const foundPost = ProxyState.posts.find(p => p.id === id)
      foundPost.karma--
      await api.put('/api/posts/' + id, foundPost)
      ProxyState.posts = ProxyState.posts
    } catch (error) {
      console.error(error)
    }
  }

  async createPost(formData) {
    try {
      const res = await api.post('/api/posts', formData)
      console.log(res)
      ProxyState.posts = [...ProxyState.posts, new Post(res.data)]
    } catch (error) {
      console.error(error)
    }
  }

  async getApiPosts() {
    try {
      const res = await api.get('/api/posts')
      ProxyState.posts = res.data.map(p => new Post(p))
    } catch (error) {
      console.error(error)
    }
  }

  async increaseKarma(id) {
    try {
      const foundPost = ProxyState.posts.find(p => p.id === id)
      foundPost.karma++
      await api.put('/api/posts/' + id, foundPost)
      ProxyState.posts = ProxyState.posts
    } catch (error) {
      console.error(error)
    }
  }
}

export const postsService = new PostsService()
