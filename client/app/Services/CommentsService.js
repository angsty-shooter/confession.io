import { ProxyState } from '../AppState.js'
import Comment from '../Models/Comment.js'

class CommentsService {
  createPost(formData) {
    ProxyState.comments = [...ProxyState.comments, new Comment(formData)]
  }
}

export const commentsService = new CommentsService()
