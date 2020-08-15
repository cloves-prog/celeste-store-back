import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Client from 'App/Models/Client'

export default class ClientSeeder extends BaseSeeder {
  public async run () {
    await Client.createMany([
      {
        name: 'Marcela',
        address: 'R. Cônego Eugênio Leite, 972-1246 - Pinheiros',
        phone: '11960468054',
      },
      {
        name: 'Antonio',
        address: 'R. Fidalga, 209-1 - Pinheiros',
        phone: '11934567896',
      },
      {
        name: 'Cláudia',
        address: 'R. Dr. Virgílio de Carvalho Pinto, 443-227 - Pinheiros',
        phone: '11934567896',
      },
    ])
  }
}
