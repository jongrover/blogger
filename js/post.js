function Post(title, author) {
  this.title = title;
  this.author = author;
  this.date = new Date();
  this.author.posts.push(this);
  this.constructor.all.push(this);
}
Post.all = [];