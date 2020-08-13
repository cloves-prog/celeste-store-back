import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Client from 'App/Models/Client'

export default class ClientSeeder extends BaseSeeder {
  public async run () {
    await Client.createMany([
      {
        name: 'Cloves',
        address: 'Rua Dr. Plinio Barreto, 249',
        phone: '11960467095',
      },
      {
        name: 'Gilvania',
        address: 'Rua Artur Prado, 513',
        phone: '11968378323',
      },
    ])
  }
}
