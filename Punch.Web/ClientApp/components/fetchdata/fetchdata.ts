import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Post } from '../../models/Posts/Post';
import PostService from '../../services/Posts/PostService';

@Component
export default class FetchDataComponent extends Vue {
  posts: Post[] = [];

  mounted() {
    this.loadData();
  }

  loadData() {
    PostService.getAll().then(posts => this.posts = posts);

  }

  createPost() {
    PostService.addNew(new Post({
      title: 'abc',
      body: 'def'
    })).then(() => this.loadData() );
  }
}
