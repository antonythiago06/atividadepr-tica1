

- **Nome Completo:** [Antony Thiago Araújo da Silva]
- **Matrícula:** [20251038060008]


Conforme especificado, os usuários foram configurados utilizando o primeiro nome e o último sobrenome do estudante, com autenticação baseada exclusivamente em hashes Bcrypt com salt:

| Papel | Nome Cadastrado | E-mail | Regra da Senha |
|---|---|---|---|
| **Gestor** | [Ana Lima] | `ana@empresa.com` | Matrícula ``20261451``
| **Auditor** | [Carla Pereira] | `carla@empresa.com` | Matrícula ``20261457`` |
| **Solicitante** | Bruno Silva | `bruno@empresa.com` | Senha padrão (`123456`) |

Os casos sem token não funcionam devido a falta de autênticação ou seja, o Bearer. o JWT é responsável por barrar essa entrada caso não exista o token. E sobre a questão da falta de um Papel, é porque apenas alguns tem permissão para funções especificas, como no caso do Gestor, em que ele tem acesso a tudo, enquanto o auditor não pode aprovar, mas pode solicitar e gerar um relatório.