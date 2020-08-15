import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SalesPeople extends BaseSchema {
  protected tableName = 'sales_people'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
