import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      a {
        cursor: pointer;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paisesRegiones: Country[] = [];

  constructor(private paisService: PaisService) {}

  activarRegion(termino: string) {
    if (termino === this.regionActiva) {
      return;
    }
    this.regionActiva = termino;
    this.paisesRegiones = [];
    this.paisService.buscarRegion(termino).subscribe(
      (paises) => (this.paisesRegiones = paises),
      (error) => (this.paisesRegiones = [])
    );
  }

  getClaseCSS(region: string): string {
    return region === this.regionActiva ? 'active' : '';
  }
}
