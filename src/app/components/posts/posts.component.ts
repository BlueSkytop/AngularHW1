import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {IPost} from "../../interfaces";
import {PostComponent} from "../post/post.component";
import {NgForOf, NgIf} from "@angular/common";
import {PostDetailsComponent} from "../post-details/post-details.component";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    PostComponent,
    NgForOf,
    PostDetailsComponent,
    NgIf
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
  posts:IPost[]
  postDetails:IPost
constructor(private postService:PostService) {
}

  ngOnInit(): void {
  this.postService.getAll().subscribe(value => this.posts = value)
  }

  getPost(postDetail: IPost) {
this.postDetails = postDetail
  }
}
