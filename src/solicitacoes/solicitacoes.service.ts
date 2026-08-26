
import { Injectable, NotFoundException } from '@nestjs/common';

export type Solicitacao = {
  id: number;
  descricao: string;
  status: 'pendente' | 'aprovada';
};

@Injectable()
export class SolicitacoesService {
  private solicitacoes: Solicitacao[] = [
    { id: 1, descricao: 'Compra de Monitor', status: 'pendente' },
  ];

  buscarPorId(id: number) {
    const solicitacao = this.solicitacoes.find((s) => s.id === id);
    if (!solicitacao) {
      throw new NotFoundException('Solicitação não encontrada');
    }
    return solicitacao;
  }

aprovar(id: number) {
  const solicitacao = this.buscarPorId(id);
  solicitacao.status = 'aprovada';
  return solicitacao;
    }
}