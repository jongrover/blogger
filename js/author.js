'use strict';

function Author(name) {
  this.name = name;
  this.posts = [];
  this.constructor.all.push(this);
}
Author.all = [];
