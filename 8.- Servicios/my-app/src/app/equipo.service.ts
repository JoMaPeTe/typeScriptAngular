import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] =[
    {
      nombre:'Ignacio',
      especialidad: 'HTML',
      descripcion:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil corrupti recusandae deserunt consequatur hic aspernatur cumque laudantium dolorum consectetur, ab alias? Corporis pariatur quidem repellat iste qui debitis in aliquid!'
    },
    {
      nombre:'Maria',
      especialidad: 'CSS',
      descripcion:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil corrupti recusandae deserunt consequatur hic aspernatur cumque laudantium dolorum consectetur, ab alias? Corporis pariatur quidem repellat iste qui debitis in aliquid!'
    }
  ]

  constructor() { 
    console.log('funcionando servicio')
  }

  obtenerEquipo(){
    return this.equipo
  }

  obtenerUno(i:number){
    return this.equipo[i]
  }
}
