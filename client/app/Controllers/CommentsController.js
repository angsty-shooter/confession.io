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

  createComment(event, id, postId) {
    event.preventDefault()
    const form = event.target
    console.log(form)
    const rawComment = {
      postId: postId,
      id: id,
      description: form.description.value
    }
    commentsService.createComment(rawComment)
  }
}
