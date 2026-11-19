import { computed, Service, signal } from '@angular/core';
import { Categoria, Clase } from '../modelos/clase';
import { CLASES_LOCALES } from '../datos/clases-locales';

@Service()
export class Catalogo {
  private readonly clases = signal<Clase[]>(CLASES_LOCALES);
  readonly categoria = signal<Categoria | 'todas'>('todas');
  readonly seleccionada = signal<Clase | null>(null);
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
    const elegida = this.seleccionada();
    if (elegida && categoria !== 'todas' && elegida.categoria !== categoria) {
      this.seleccionada.set(null);
    }
  }

  seleccionar(clase: Clase): void {
    this.seleccionada.update((actual) => (actual?.id === clase.id ? null : clase));
  }
}
