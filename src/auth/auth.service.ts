import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuarioAutenticado, UsuariosService} from '../usuarios/usuarios.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async validarUsuario(email: string, senha: string) {
    const usuario = this.usuariosService.buscarPorEmail(email);

    if (!usuario || !usuario.ativo) {
      return null;
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senhaHash);

    if (!senhaValida) {
      return null;
    }

    const { senhaHash: _senhaHash, ...principal } = usuario;
    return principal;
  }

  login(usuario: UsuarioAutenticado) {

    let nomeDividido = usuario.nome;

    if (usuario.papel === 'auditor') {
    const partes = usuario.nome.trim().split(/\s+/);
    nomeDividido = partes[partes.length - 1];
  } else if (usuario.papel === 'gestor') {
    const partes = usuario.nome.trim().split(/\s+/);
    nomeDividido = partes[0]; 
  }
    const payload = {
      sub: usuario.id,
      email: usuario.email,
      papel: usuario.papel,
      matricula: usuario.matricula,
      nome: nomeDividido,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}