import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SolicitacoesModule } from './solicitacoes/solicitacoes.module';

@Module({
  imports: [ ConfigModule.forRoot({ isGlobal: true }), AuthModule, UsuariosModule, SolicitacoesModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
