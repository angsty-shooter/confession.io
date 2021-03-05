import { ProxyState } from '../AppState.js'
import Post from '../Models/Post.js'

class PostsService {
  createPost(formData) {
    ProxyState.posts = [...ProxyState.posts, new Post(formData)]
  }
}

export const postsService = new PostsService()
