import { ProxyState } from '../AppState.js'
export default class Post {
  constructor(data) {
    this.title = data.title
    this.description = data.description
    this.creatorId = data.creatorId
    this.karma = data.karma
    this.id = data._id
  }

  get Template() {
    return `            <div class="col-11">
    <div class="border-round card p-2 card-opacity">
        <div class="card-title p-2">
            <div class="ml-5">${this.title}</div>
            <div class="ml-5">${this.description}</div>
            <div class="text mx-5">
            </div>
            <div class="col-1">
                <div class="d-flex align-items-center">
                    <div>
                        <p class="prayer-hands" onclick="">🙏</p>
                        <p class="brimstone-size" onclick="">🜏</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <!-- <div class="skeleton-loader text block"></div>
                <div class="skeleton-loader text block"></div> -->
            <span>Forgiveness</span>
            <div class="progress">
                <div id="progressbar" class="progress-bar bg-success" style="width: 0%" aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <button class="btn btn-primary mt-3" type="button" this-toggle="collapse"
                data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Comments
            </button>
            <div class="collapse" id="collapseExample">
            <form action="" class="form-group"
            onsubmit="app.commentsController.createComment(event, '${this.id}','${this.id}')">
            <p><input type="text" placeholder="Make Comment?" id="description"
                    class="input-lg col-lg-6">
            </p>
            <button class="btn btn-primary" type="submit">Submit</button>
        </form>

    </div>
            ${this.Comments}

</div>`
  }

  get Comments() {
    let template = ''
    const comments = ProxyState.comments.filter(c => c.postId === this.id)
    comments.forEach(c => template += c.Template)
    return template
  }
}
