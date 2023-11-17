import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioModel } from '../shared/usuariomodel';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})

export class ListaUsuariosComponent implements OnInit {
  
  usuarios: Observable<UsuarioModel[]> | undefined;

  constructor(private usuarioService: UsuarioService) { }

  
  ngOnInit() {
    this.usuarios = this.usuarioService.obtenerUsuarios();
  }

  borrarUsuario(id: string) {
    this.usuarioService.borrarUsuario(id).subscribe(data => {
      console.log(data);
    })

    this.usuarios = this.usuarioService.obtenerUsuarios()
  }
}
