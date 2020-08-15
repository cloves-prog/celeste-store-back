import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Client from './Client'
import SalesPeople from './SalesPeople'
import Product from './Product'

export default class Sales extends BaseModel {
  @column()
  public sales_number: string

  @column()
  public client_id: number

  @column()
  public product_id: number

  @column()
  public quantity: number

  @column()
  public sales_people_id: number

  @hasMany(() => Client)
  public client: HasMany<typeof Client>

  @hasMany(() => SalesPeople)
  public salesPerson: HasMany<typeof SalesPeople>

  @hasMany(() => Product)
  public product: HasMany<typeof Product>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
