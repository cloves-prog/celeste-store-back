import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Sales extends BaseSchema {
  protected tableName = 'sales'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('sales_number')
      table.integer('client_id').unsigned().references('id').inTable('clients')
      table.integer('product_id').unsigned().references('id').inTable('products')
      table.integer('quantity')
      table.integer('sales_people_id').unsigned().references('id').inTable('sales_people')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
