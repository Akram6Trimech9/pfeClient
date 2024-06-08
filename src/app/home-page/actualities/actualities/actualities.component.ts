import { Component, OnInit } from '@angular/core';
import { ActualityService } from '../../../services/actuality.service';

@Component({
  selector: 'app-actualities',
  templateUrl: './actualities.component.html',
  styleUrl: './actualities.component.css'
})
export class ActualitiesComponent implements OnInit {
  actualities!: any[]  ;
  isLoading: boolean = true;

  constructor(private actualityService: ActualityService) {
 
  }

  url = 'http://localhost:3000/';
   ngOnInit(): void {
    this.actualityService.getActtualities().subscribe(
      (res) => {
        this.actualities = res;
        this.actualities.forEach((item) => {
          const a = item.file;
          item.file = this.url + a;
        });
        this.isLoading = false;
 
      },
      (error) => {
        console.error('Error fetching actualities:', error);
        this.isLoading = false;
      }
    );
  }
}