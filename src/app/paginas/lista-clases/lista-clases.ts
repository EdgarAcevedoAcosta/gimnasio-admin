import { Component, inject } from '@angular/core';
import { Catalogo } from '../../servicios/catalogo';
import { TargetaClase } from '../../componentes/targeta-clase/targeta-clase';
import { FiltroCategorias } from '../../componentes/filtro-categorias/filtro-categorias';
import { RouterLink } from '@angular/router';
import { API_URL } from '../../config';
import { ClasesApi } from '../../servicios/clases-api';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [TargetaClase, FiltroCategorias, RouterLink, ReactiveFormsModule],
  selector: 'app-lista-clases',
  styleUrl: './lista-clases.css',
  templateUrl: './lista-clases.html',
})
export class ListaClases {
  protected readonly catalogo = inject(Catalogo);
  protected readonly apiUrl = API_URL;
  private readonly api = inject(ClasesApi);
  protected readonly busqueda = new FormControl(this.catalogo.texto(), { nonNullable: true });

  constructor() {
    this.busqueda.valueChanges
      .pipe(
        debounceTime(300),
        map((t) => t.trim()),
        distinctUntilChanged(),
        takeUntilDestroyed(),
      )
      .subscribe((texto) => this.catalogo.buscar(texto));
  }

  eliminar(id: number): void {
    if (!confirm(`Estas Seguro de Eliminar la Clase`)) return;
    this.api.eliminar(id).subscribe({
      next: () => {
        this.catalogo.recargar();
      },
      error: () => {},
    });
  }
}
