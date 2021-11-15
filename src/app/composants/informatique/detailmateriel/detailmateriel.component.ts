import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'wad-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  afficher:boolean=false;
  ide:string;
  materiel:Materiel;
   onAffiche(){
     this.afficher=!this.afficher;
   }
  
  constructor(private materielidService:MaterielService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.ide = this.activatedRoute.snapshot.params['id'];
    this.materiel=this.materielidService.getMaterielById(this.ide);
  }
  onListmateriel(){
    this.router.navigate(['/listmateriel']);
  }
  
}


