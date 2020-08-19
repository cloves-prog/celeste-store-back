import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SalesRepository from '../../Repositories/SalesRepository'
import { uuid } from 'uuidv4'

import Sales from 'App/Models/Sales'
import Product from 'App/Models/Product'

export default class SalesController {
  private salesRepository: SalesRepository

  constructor () {
    this.salesRepository = new SalesRepository()
  }

  public async index ({ response }: HttpContextContract) {
    return response.status(200).send(await this.salesRepository.list())
  }

  public async destroy ({ params }: HttpContextContract) {
    this.salesRepository.delete(params.sales_number)
  }

  public async resume ({ response }: HttpContextContract) {
    response.status(200).send(await this.salesRepository.getResume())
  }

  public async store ({ request }: HttpContextContract) {
    const salesNumber = uuid()

    const sales = request.input('products').map(product => ({
      sales_number: salesNumber,
      client_id: request.input('clientId'),
      product_id: product.id,
      quantity: product.quantity,
      sales_people_id: request.input('salesPeopleId'),
    }))

    await Sales.createMany(sales)
    this.updateStock(sales)
  }

  private async updateStock (sales) {
    for (const item of sales) {
      const product = await Product.find(item.product_id)

      // Transfere os itens do estoque para loja automáticamente
      if (product!.store_quantity < item.quantity) {
        product!.store_quantity = product!.store_quantity + product!.stock_quantity
        product!.stock_quantity = 0
      }

      product!.store_quantity = product!.store_quantity - item.quantity
      await product!.save()
    }
  }
}
