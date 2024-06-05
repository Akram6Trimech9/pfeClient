import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { HttpClientModule } from '@angular/common/http';
import { DocumentsService } from '../../../services/documents.service';


@NgModule({
  declarations: [DocumentationComponent],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    HttpClientModule
  ],
  providers:[
    DocumentsService
  ]
})
export class DocumentationModule { }
