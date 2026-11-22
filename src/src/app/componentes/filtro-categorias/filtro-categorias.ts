import { Component, inject } from '@angular/core';
import { Catalogo } from '../../servicios/catalogo';
import { CATEGORIAS } from '../../modelos/clase';

@Component({
  imports: [],
  selector: 'app-filtro-categorias',
  styleUrl: './filtro-categorias.css',
  templateUrl: './filtro-categorias.html',
})
export class FiltroCategorias {
  protected readonly catalogo = inject(Catalogo);
  protected readonly opciones = ['todas' as const, ...CATEGORIAS];
}
