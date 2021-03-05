export default class Comment {
  constructor(data) {
    this.description = data.description
    this.id = data.creatorId
    this.postId = data.postId
  }

  get Template() {
    return this.id
  }
}
