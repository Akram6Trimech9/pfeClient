import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../../../../services/documents.service';

@Component({
  selector: 'app-documentation',
 
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.css'
})
export class DocumentationComponent implements OnInit {

  categories: string[] = ['juridique', 'fiscale', 'economique', 'sociale'];
  documents : any[] = []
  url='http://localhost:3000/'
  constructor( private documentService: DocumentsService){}
  ngOnInit(): void { 
   this.documentService.getDocuments().subscribe(res => {
      this.documents = res
       this.documents.forEach(item => { 
          const a = item.file  ;
        item.file = `${this.url}${a}`
       })
   }) 
  }
}
