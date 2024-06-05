import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailsRoutingModule } from './blog-details-routing.module';
import { BlogDetailsComponent } from './blog-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ActualityService } from '../../../services/actuality.service';
 

@NgModule({
  declarations: [BlogDetailsComponent],
  imports: [
    CommonModule,
    BlogDetailsRoutingModule,
    HttpClientModule
  ],
  providers:[ActualityService]
})
export class BlogDetailsModule { }
