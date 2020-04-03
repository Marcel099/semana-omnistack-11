// Pode-se colocar todos os testes de criação de ONG e listagem de ONG no mesmo arquivo de testes
const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')
describe('ONG', () => {      // Utiliza-se uma biblioteca que faça chamadas API para o back-end

    beforeEach( async () => {
        await connection.migrate.rollback()     // Antes de executar os testes é bom desfazer todas as alterações no database, pois pode ficar gigante em algum momento
        await connection.migrate.latest()       // Antes de realizar quaisquer testes executa as migrations
    })

    // Depois de todos os testes a conexão com o banco de dados é desfeita
    afterAll(async () => {
        await connection.destroy()
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: 'APAD',
                email: 'contato@apad.com',
                whatsapp: '1234567890',
                city: 'Rio do Sul',
                uf: 'SC'
            })
        
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})