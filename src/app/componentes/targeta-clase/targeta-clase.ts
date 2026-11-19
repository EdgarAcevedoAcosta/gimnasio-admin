import { Component, input } from '@angular/core';
import { Clase } from '../../modelos/clase';
import { TitleCasePipe } from '@angular/common';

@Component({
  imports: [TitleCasePipe],
  selector: 'app-targeta-clase',
  styleUrl: './targeta-clase.css',
  templateUrl: './targeta-clase.html',
})
export class TargetaClase {
  readonly clase = input.required<Clase>();
}
