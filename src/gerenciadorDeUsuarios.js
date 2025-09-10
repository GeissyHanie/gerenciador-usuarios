const usuarios = [
    {
        nome: 'Pedro',
        apelido: 'a rocha',
        email: 'joao@gmail.com'
    },
    {
        nome: 'Thiago',
        apelido: 'o menor',
        email: 'thiago@yahoo.com.br'
    },
    {
        nome: 'João',
        apelido: 'o discipulo amado',
        email: 'joao@hotmail.com'
    },
    {
        nome: 'Simão',
        apelido: 'o zelote',
        email: 'simao@gmail.com'
    }
];

function retornarListaUsuarios() {
    return usuarios
};

function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario)
};

module.exports = {
    retornarListaUsuarios,
    adicionarNovoUsuario
};