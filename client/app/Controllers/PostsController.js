import { ProxyState } from '../AppState.js'
import { postsService } from '../Services/PostsService.js'

function _draw() {
  const posts = ProxyState.posts
  let template = ''
  posts.forEach(p => template += p.Template)

  document.getElementById('posts').innerHTML = template
  console.log(posts)
}
export default class PostsController {
  constructor() {
    ProxyState.on('karma', _draw)
    ProxyState.on('posts', _draw)
    postsService.getApiPosts()
  }

  createPost(event) {
    event.preventDefault()
    const form = event.target
    const rawPost = {
      title: form.title.value,
      description: form.description.value
    }
    console.log(rawPost)
    postsService.createPost(rawPost)
  }

  increaseKarma(id) {
    postsService.increaseKarma(id)
  }

  decreaseKarma(id) {
    postsService.decreaseKarma(id)
  }
}
