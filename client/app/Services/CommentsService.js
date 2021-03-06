import { ProxyState } from '../AppState.js'
import Comment from '../Models/Comment.js'
import { api } from './AxiosService.js'

class CommentsService {
  async createComment(formData) {
    try {
      const res = await api.post('/api/comments', formData)
      console.log(res)
      ProxyState.comments = [...ProxyState.comments, new Comment(res.data)]
    } catch (error) {
      console.error(error)
    }
  }
}

export const commentsService = new CommentsService()
