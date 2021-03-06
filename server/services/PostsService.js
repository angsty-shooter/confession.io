import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PostsService {
  async edit(id, body) {
    return await dbContext.Posts.findByIdAndUpdate(id, body, { new: true })
  }

  async create(body) {
    return await dbContext.Posts.create(body)
  }

  async find(query = {}) {
    const posts = await dbContext.Posts.find(query).populate('creator')
    return posts
  }

  async findById(id) {
    const post = await dbContext.Posts.findById(id).populate('creator')
    if (!post) {
      throw new BadRequest('Invalid Id')
    }
    return post
  }
}

export const postsService = new PostsService()
