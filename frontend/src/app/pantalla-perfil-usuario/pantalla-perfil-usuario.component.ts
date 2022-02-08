import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../API.service';
import { Persona } from '../modelo/persona';
import { PersonaService } from '../persona.service';
import { SessionstorageService } from '../sessionstorage.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pantalla-perfil-usuario',
  templateUrl: './pantalla-perfil-usuario.component.html',
  styleUrls: ['./pantalla-perfil-usuario.component.css'],
})
export class PantallaPerfilUsuarioComponent implements OnInit {
  public persona: Persona;
  constructor(
    public router: Router,
    public _personaService: PersonaService,
    public _localstorage: APIService,
    public _sessionstorage: SessionstorageService
  ) {
    this.persona = this._sessionstorage.obtenerSesion_sessionstorage();
    if (!this._sessionstorage.haySesion_sessionstorage()) {
      this.router.navigate(['inicio']);
    }
  }

  ngOnInit(): void {}

  async logout() {
    this._sessionstorage.logout_sessionstorage();
    // Swal.fire('Pago Exitoso','Se ha llevado a cabo con exito tu compra','success');
    this.router.navigate(['inicio']);
    await new Promise((f) => setTimeout(f, 10));
    window.location.reload();
  }
  iraHistorial() {
    this.router.navigate(['historial']);
  }
}
