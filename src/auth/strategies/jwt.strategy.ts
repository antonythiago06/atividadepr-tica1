import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Papel } from '../../usuarios/usuarios.service';

type JwtPayload = {
  sub: number;
  email: string;
  papel: Papel;
  matricula: string;
  nome: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error('JWT_SECRET nao foi definido');
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    });
  }

  validate(payload: JwtPayload) {


    let matricula = payload.matricula;
   
    if (payload.papel === 'auditor') 
      { 
   ;
        matricula = matricula.split('').reverse().join('');
       }
    return {
      id: payload.sub,
      nome: payload.nome,
      email: payload.email,
      papel: payload.papel,
      matricula: matricula,
    };
  }
}