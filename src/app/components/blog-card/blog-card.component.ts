import { Component, Input, OnInit } from '@angular/core';
import { Blog } from "../../modules/blog";
import { BlogCard, BlogToBlogCard } from "./module-view/blog-card-module";

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input()
  blog: Blog | undefined;

  blogCard: BlogCard | undefined;
  constructor() { }

  ngOnInit(): void {
    this.blogCard = BlogToBlogCard(this.blog);
  }

}
