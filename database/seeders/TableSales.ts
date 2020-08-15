import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { DateTime } from 'luxon'
import Sales from 'App/Models/Sales'

export default class TableSales extends BaseSeeder {
  public async run () {
    await Sales.createMany([
      // Venda 1
      {
        sales_number: '1d032c2b-84c8-4eb9-8757-b326cb8a6429',
        client_id: 1,
        product_id: 1,
        quantity: 2,
        sales_people_id: 1,
        createdAt: DateTime.fromSQL('2020-02-07'),
      },
      // Venda 2
      {
        sales_number: '8b2098a7-92f7-457c-a3d6-a451be40ad4e',
        client_id: 2,
        product_id: 1,
        quantity: 1,
        sales_people_id: 2,
        createdAt: DateTime.fromSQL('2020-03-07'),
      },
      {
        sales_number: '8b2098a7-92f7-457c-a3d6-a451be40ad4e',
        client_id: 2,
        product_id: 3,
        quantity: 1,
        sales_people_id: 2,
        createdAt: DateTime.fromSQL('2020-03-07'),
      },
      // Venda 3
      {
        sales_number: '63fe5e67-1ca7-43c9-b1c0-4271062f7656',
        client_id: 3,
        product_id: 2,
        quantity: 1,
        sales_people_id: 3,
        createdAt: DateTime.fromSQL('2020-04-07'),
      },
      // Venda 4
      {
        sales_number: '8b2098a7-92f7-457c-a3d6-a451be40ad4e',
        client_id: 1,
        product_id: 3,
        quantity: 1,
        sales_people_id: 2,
        createdAt: DateTime.fromSQL('2020-03-07'),
      },
    ])
  }
}
