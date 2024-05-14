import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../Services/apiService';
import { Post } from '../../Models/post';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  @Input() userId!: number;
  posts: Post[] = [];
  displayedColumns: string[] = ['id', 'body', 'createdAt'];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.apiService.getPostsByUserId(this.userId).subscribe(posts => {
      this.posts = posts;
    });
  }
}
