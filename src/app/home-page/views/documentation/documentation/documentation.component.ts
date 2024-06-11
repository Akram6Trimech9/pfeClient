import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../../../../services/documents.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css'] // Correcting styleUrl to styleUrls
})
export class DocumentationComponent implements OnInit {
  plus: boolean = true; // Initialize plus to true
  categoryChosen: string = '';
  categories: string[] = ['juridique', 'fiscale', 'economique', 'sociale'];
  documents!: any[];
  url = 'http://localhost:3000/';

  constructor(private documentService: DocumentsService) {}

  ngOnInit(): void {
    this.documentService.getDocuments().subscribe(res => {
      this.documents = res;
      this.documents.forEach(item => {
        const a = item.file;
        item.file = `${this.url}${a}`;
      });
    });
  }

  changeOpt(category: string) {
    if (this.categoryChosen === category) {
      this.plus = !this.plus;
    } else {
      this.plus = true;
    }
    this.categoryChosen = category;
  }
}
