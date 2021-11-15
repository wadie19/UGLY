import { Component, OnInit,Input } from '@angular/core';
import { Materiel } from '../../../models/materiel';
@Component({
  selector: 'wad-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
  @Input('materiel') p:Materiel;
  constructor() { }
  ngOnInit(): void {
  }

}
