import { Component, OnInit } from '@angular/core';
import { BlogService } from "../../services/blog.service";
import { Blog } from "../../modules/blog";
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  blog: Blog|undefined;
  subscriptions: Subscription[] = [];

  constructor(private activatedRoute: ActivatedRoute, private _router: Router, private blogService: BlogService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.blog = this.blogService.FetchBlogById(id)
      if (!this.blog){
        this._router.navigate(['home']);
      }
    });
  }

  ngOnDestroy(){
    this.subscriptions.forEach((subscription)=>{
      subscription.unsubscribe();
    })
  }


}
