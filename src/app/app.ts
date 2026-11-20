import { Component, inject, Inject } from '@angular/core';
import { TargetaClase } from './componentes/targeta-clase/targeta-clase';
import { Catalogo } from './servicios/catalogo';
import { FiltroCategorias } from './componentes/filtro-categorias/filtro-categorias';
@Component({
  imports: [TargetaClase, FiltroCategorias],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly catalogo = inject(Catalogo);
}
//instalar -g @angular/cli
// ng new --
