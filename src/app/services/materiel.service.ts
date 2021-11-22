import { Injectable } from '@angular/core';
import { Materiel } from '../models/materiel';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {
  materiels:Materiel[]=[
    {   
        id: '1',
        libelle: 'Bracelet Like',
        photo: 'assets/Images/Articles/bracelet_jaune_like.jpg',
        marque:'UGLY',
        prix:10,
        description: 'Bracelet Bike',
        hautGamme: true,
        quantite: 1,
        commentaires:[ {contenu:' satisfaisant', note:3, auteur:'Lionel MESSI', date:new Date(2021,11,4)},
        {contenu:'Bon rapport qualité prix', note:4, auteur:'Cristiano RONALDO', date:new Date(2021,10,4)}]
     },
    {   
        id: '2', 
        libelle: 'Bracelet R&N', 
        photo:'assets/Images/Articles/bracelet_rouge.jpg',
        marque: 'UGLY', 
        prix: 8.6, 
        description: 'Bracelet R&N', 
        hautGamme: false,
        quantite:1,
        commentaires:[ {contenu:' satisfaisant', note:3, auteur:'Farouk BEN MUSTAPHA', date:new Date(2021,11,4)},
        {contenu:'Bon rapport qualité prix', note:4, auteur:'Mohamed SALAH', date:new Date(2021,10,4)}]
    },
    {   
        id: '3', 
        libelle: 'Bracelet R&R', 
        photo:'assets/Images/Articles/redmot.jpg',
        marque: 'UGLY', 
        prix: 5.5, 
        description: 'Bracelet Rouge', 
        hautGamme: true,
        quantite: 1,
        commentaires:[]
    },
    {   
        id: '4', 
        libelle: 'Bracelet NASA', 
        photo:'../assets/Images/Articles/nasa.jpg',
        marque: 'UGLY', 
        prix: 5, 
        description: 'Bracelet R&R', 
        hautGamme: false,
        quantite: 1,
        commentaires:[]
    },
    {   
        id: '5', 
        libelle: 'Bracelet V&V', 
        photo:'../assets/Images/Articles/vertmot.jpg',
        marque: 'UGLY', 
        prix: 10, 
        description: 'Bracelet VERDI', 
        hautGamme: true,
        quantite: 1,
        commentaires:[]
    }

];
  constructor() { }
  getMateriel(){
    return this.materiels;
    }
    getMaterielById(id:string):Materiel{
      return <Materiel> this.materiels.find(mat => mat.id==id);
      }
}
