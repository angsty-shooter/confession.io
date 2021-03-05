import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Post = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    karma: { type: Number, required: true, default: 0 },
    creatorId: { type: String, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Post.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Post
