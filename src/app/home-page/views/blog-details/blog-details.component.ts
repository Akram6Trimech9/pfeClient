import { Component, OnInit } from '@angular/core';
import { ActualityService } from '../../../services/actuality.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit {

  actuality: any;

  constructor(
    private actualityService: ActualityService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getActuality();
  }
url = 'http://localhost:3000/' 
  getActuality(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.actualityService.getOneActuality(id).subscribe(res => {
      this.actuality = res;
     this.actuality.file= `${this.url}${res.file}`
    });
  }
}