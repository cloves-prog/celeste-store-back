import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import SalesPerson from 'App/Models/SalesPerson'

export default class SalesPersonSeeder extends BaseSeeder {
  public async run () {
    await SalesPerson.createMany([
      {name: 'Celeste'},
      {name: 'Leila'},
      {name: 'Luiz Claudio'},
    ])
  }
}
