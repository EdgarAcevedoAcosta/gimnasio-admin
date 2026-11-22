import { Component, inject, Inject } from '@angular/core';
import { TargetaClase } from './componentes/targeta-clase/targeta-clase';
import { Catalogo } from './servicios/catalogo';
import { FiltroCategorias } from './componentes/filtro-categorias/filtro-categorias';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
//instalar -g @angular/cli
// ng new --
