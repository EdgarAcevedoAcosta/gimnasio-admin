import { Component, inject } from '@angular/core';
import { Catalogo } from '../../servicios/catalogo';
import { TargetaClase } from '../../componentes/targeta-clase/targeta-clase';
import { FiltroCategorias } from '../../componentes/filtro-categorias/filtro-categorias';
import { RouterLink } from '@angular/router';

@Component({
  imports: [TargetaClase, FiltroCategorias, RouterLink],
  selector: 'app-lista-clases',
  styleUrl: './lista-clases.css',
  templateUrl: './lista-clases.html',
})
export class ListaClases {
  protected readonly catalogo = inject(Catalogo);
}
