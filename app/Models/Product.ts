import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Sales from './Sales'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public brand: string

  @column()
  public provider: string

  @column()
  public classification: string

  @column()
  public cost_price: number

  @column()
  public sales_price: number

  @column()
  public stock_quantity: number

  @column()
  public store_quantity: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Sales)
  public sales: BelongsTo<typeof Sales>
}
