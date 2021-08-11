import { Injectable } from '@angular/core';
import { Blog } from "../modules/blog";
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  fakeBlogs: Blog[]= [];
  constructor() { 
    this.fakeBlogs.push(new Blog('1', 'First Blog', 'First Content', 'Firas',0, 0, undefined));
    this.fakeBlogs.push(new Blog('2', 'Second Blog', 'Second Content', 'Oussama',0, 0, undefined));
  }

  fetchBlogs(): Blog[]{
    return this.fakeBlogs;
  }
  FetchBlogById(id : string): Blog|undefined{
    //var blog: Blog;
    for (let blog of this.fakeBlogs){
      if (blog.id === id){
        return blog;
      };
    }
    return undefined;
  }

  addBlog(newBlog: Blog){
    newBlog.id = uuidv4();
    this.fakeBlogs.push(newBlog);
  }
  
}
