export default class Post {
  constructor(data) {
    this.title = data.title
    this.description = data.description
    this.creatorId = data.creatorId
    this.karma = data.karma
  }

  get Template() {
    return this.title
  }
}
