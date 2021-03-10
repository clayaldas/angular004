import { Component, OnInit } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interfaz';
import { HEROES } from '../constantes/heroes.constante';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // heroe: string = 'Superman';
  heroe: Heroe = {
    id: 1,
    nombre: 'Superman',
  };

  // heroes = HEROES;
  heroes: Heroe[] = HEROES;

  // obtenie el item seleccionado en la lista
  heroeSeleccionado?: Heroe;

  constructor() {}

  ngOnInit(): void {}

  clicItemSeleccionado(heroe: Heroe): void {
    this.heroeSeleccionado = heroe;
  }
}
