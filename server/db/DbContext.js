import mongoose from 'mongoose'
import PostSchema from '../models/Post'
import AccountSchema from '../models/Account'
import CommentSchema from '../models/Comment'

class DbContext {
  Posts = mongoose.model('Post', PostSchema);
  Account = mongoose.model('Account', AccountSchema);
  Comments = mongoose.model('Comments', CommentSchema);
}

export const dbContext = new DbContext()
