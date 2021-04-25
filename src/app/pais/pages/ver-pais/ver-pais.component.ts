import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss'],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.paisService.getPaisPorCodigo(id)))
      .subscribe((pais) => {
        this.pais = pais;
      });

    /*
    MANERA ALTERNATIVA
    this.activatedRoute.params.subscribe(({ id }) => {
      console.log(id);
      this.paisService.getPaisPorCodigo(id).subscribe((pais) => {
        console.log(pais);
      });
    });*/
  }
}
