import { ProxyState } from '../AppState.js'
import { commentsService } from '../Services/CommentsService.js'

function _draw() {
  const comments = ProxyState.comments
  console.log(comments)
}
export default class CommentsController {
  constructor() {
    ProxyState.on('comments', _draw)
  }

  createComment(event) {
    event.preventDefault()
    const form = event.target
    const rawComment = {
      description: form.description.value
    }
    commentsService.createPost(rawComment)
  }
}
