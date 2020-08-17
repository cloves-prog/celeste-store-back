import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.string('brand').notNullable()
      table.string('provider').notNullable()
      table.text('image').notNullable()
      table.string('classification').notNullable()
      table.float('cost_price').notNullable()
      table.float('sales_price').notNullable()
      table.integer('stock_quantity').notNullable()
      table.integer('store_quantity').notNullable()

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
