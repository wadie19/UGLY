import { Component, OnInit } from '@angular/core';
import { MaterielService } from 'src/app/services/materiel.service';
import { Materiel } from '../../../models/materiel';

@Component({
  selector: 'wad-listmateriel',
  templateUrl: './listmateriel.component.html',
  styleUrls: ['./listmateriel.component.css']
})
export class ListmaterielComponent implements OnInit {
  materiels: Materiel[];
  
  constructor(private materielService:MaterielService) { }

  ngOnInit(): void {
    this.materiels=this.materielService.getMateriel();
  }

}
