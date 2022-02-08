import { Component, OnInit } from '@angular/core';
import { Compra } from '../modelo/compra';
import { Persona } from '../modelo/persona';
import { PersonaService } from '../persona.service';
import { SessionstorageService } from '../sessionstorage.service';

@Component({
  selector: 'app-pantalla-historial-compras',
  templateUrl: './pantalla-historial-compras.component.html',
  styleUrls: ['./pantalla-historial-compras.component.css'],
})
export class PantallaHistorialComprasComponent implements OnInit {
  compras: Compra[] = [];
  public sesion: Persona;
  public personas: Persona[] | undefined;

  public totalVentas: number = 0;

  constructor(
    public _personaService: PersonaService,
    public _sessionstorage: SessionstorageService
  ) {
    this.sesion = this._sessionstorage.obtenerSesion_sessionstorage();
    if (this.sesion.rol == 'admin') {
      this.personas = this._personaService.getPersonas();
      this.personas.forEach((persona) => {
        persona.compras.forEach((compra) => {
          this.totalVentas += compra.total;
        });
      });
    } else this.compras = this.sesion.compras;
  }

  ngOnInit(): void {}
}
