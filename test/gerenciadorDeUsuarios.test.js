const { retornarListaUsuarios, adicionarNovoUsuario } = require('../src/gerenciadorDeUsuarios')
const { expect } = require('chai')

describe('Testes de funções da aplicação gerenciador de usuários', function () {

    it('Verificar se posso adicionar um novo usuário a minha lista de usuários', function () {
        adicionarNovoUsuario({
            nome: 'Tomé',
            email:  'tome@yahoo.com.br',
            apelido: 'o gêmeo'
        });

        const listaDeUsuarios = retornarListaUsuarios();

        expect(listaDeUsuarios.at(-1)).to.eql({
            nome: 'Tomé',
            email:  'tome@yahoo.com.br',
            apelido: 'o gêmeo'
        });
    });
});