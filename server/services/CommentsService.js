import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CommentsService {
  async create(body) {
    return await dbContext.Comments.create(body)
  }

  async find(query = {}) {
    const comments = await dbContext.Comments.find(query).populate('creator')
    return comments
  }

  async findById(id) {
    const post = await dbContext.Comments.findById(id).populate('creator')
    if (!post) {
      throw new BadRequest('Invalid Id')
    }
    return post
  }
}

export const commentsService = new CommentsService()
