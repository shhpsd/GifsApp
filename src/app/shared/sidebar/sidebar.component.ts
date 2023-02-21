import { Component } from '@angular/core';
//import { GifsService } from '../../gifs/services/gifs.service';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  //providers: [GifsService]
})
export class SidebarComponent {

  constructor(private service: GifsService) { }

  get historial(){
    return this.service.historial;
  }

  buscar(termino: string){

    return this.service.buscarGifs(termino);
  }
}
