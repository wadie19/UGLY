import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/models/commentaire';
@Component({
  selector: 'wad-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input('materiel') comment:Commentaire;
  @Input() indice:number;
  constructor() { }
  
  ngOnInit(): void {
  }

}
