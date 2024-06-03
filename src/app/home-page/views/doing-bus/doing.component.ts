import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doing',
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.css']
})
export class DoingComponent implements OnInit {
  activeTabId: string='';
  @ViewChild('myElement') myElement!: ElementRef;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const query = params['query'];
      if (query) {
         switch (query) {
          case '1':
            this.activeTabId = 'tab-1';
            break;
          case '2':
            this.activeTabId = 'tab-2';
            break;
          case '3':
            this.activeTabId = 'tab-3';
            break;
          case '4':
            this.activeTabId = 'tab-4';
            break;
          case '5':
            this.activeTabId = 'tab-5';
            break;
          case '6':
            this.activeTabId = 'tab-6';
            break;
          case '7':
            this.activeTabId = 'tab-7';
            break;
          default:
            this.activeTabId = '';
        }
      }
    });


  }
  ngAfterViewInit(){
    this.scrollToMyElement()

  }
  scrollToMyElement() {
    if (this.myElement.nativeElement) {
      this.myElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
