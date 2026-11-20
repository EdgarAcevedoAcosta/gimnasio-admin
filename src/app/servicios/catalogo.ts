import { computed, Service, signal } from '@angular/core';
import { Categoria, Clase } from '../modelos/clase';
import { CLASES_LOCALES } from '../datos/clases-locales';

@Service()
export class Catalogo {
  private readonly clases = signal<Clase[]>(CLASES_LOCALES);
  readonly categoria = signal<Categoria | 'todas'>('todas');
  readonly seleccionado = signal<Clase | null>(null);
  // Derivada
  readonly visibles = computed(() => {
    const cat = this.categoria();
    const todas = this.clases();
    return cat === 'todas' ? todas : todas.filter((c) => c.categoria === cat);
  });
  readonly minutosTotales = computed(() => {
    return this.visibles().reduce((suma, c) => suma + c.duracionMin, 0);
  });
  filtrar(categoria: Categoria | 'todas'): void {
    this.categoria.set(categoria);
    const elegida = this.seleccionado();
    if (elegida && categoria !== 'todas' && elegida.categoria !== categoria) {
      this.seleccionado.set(null);
    }
  }

  seleccionar(clase: Clase): void {
    this.seleccionado.update((actual) => (actual?.id === clase.id ? null : clase));
  }
}
