import { ProxyState } from '../AppState.js'
import { postsService } from '../Services/PostsService.js'

function _draw() {
  const posts = ProxyState.posts
  console.log(posts)
}
export default class PostsController {
  constructor() {
    ProxyState.on('posts', _draw)
  }

  createPost(event) {
    event.preventDefault()
    const form = event.target
    const rawPost = {
      title: form.title.value,
      description: form.description.value
    }
    postsService.createPost(rawPost)
  }
}
