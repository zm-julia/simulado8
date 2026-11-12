const Funcionario = require('./Funcionario')
const Cliente = require('./Cliente')
const Equipamento = require('./Equipamento')
const Inspecao = require('./Inspecao')


Cliente.hasMany(Equipamento, {
    foreignKey: 'idCliente', 
    as: 'equipamentosCliente', 
    onDelete: 'CASCADE'
})
Equipamento.belongsTo(Cliente, {
    foreignKey: 'idCliente', 
    as: 'clienteEquipamento', 
    allowNull: false
})

Equipamento.hasMany(Inspecao, {
    foreignKey: 'idEquipamento', 
    as: 'inspecaosEquipamento', 
    onDelete: 'CASCADE'
})
Inspecao.belongsTo(Equipamento, {
    foreignKey: 'idEquipamento', 
    as: 'equipamentoInspecao', 
    allowNull: false
})


module.exports = {Funcionario, Cliente, Equipamento, Inspecao}
