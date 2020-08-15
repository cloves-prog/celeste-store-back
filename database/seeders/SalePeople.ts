import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import SalesPeople from 'App/Models/SalesPeople'

export default class SalesPeopleSeeder extends BaseSeeder {
  public async run () {
    await SalesPeople.createMany([
      {name: 'Celeste'},
      {name: 'Leila'},
      {name: 'Luiz Claudio'},
    ])
  }
}
