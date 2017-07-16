import {Component, OnInit} from '@angular/core';
import {PostsService} from '../../services/posts.service';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private postsService: PostsService) {
    console.log('Inside PostsService');
  }

  ngOnInit() {
  }

  fetchPosts() {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
