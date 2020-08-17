import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SalesResume from '../../Services/SalesResume'
import { uuid } from 'uuidv4'

import Sales from 'App/Models/Sales'
import Product from 'App/Models/Product'

export default class SalesController {
  private salesResumeService: SalesResume

  constructor () {
    this.salesResumeService = new SalesResume()
  }
  public async resume ({ response }: HttpContextContract) {
    const bestClients = await this.salesResumeService.bestClients()
    const bestSalesPeople = await this.salesResumeService.bestSalesPeople()
    const grossProfit = await this.salesResumeService.grossProfit()
    const netProfit = await this.salesResumeService.netProfit()

    response.status(200).send({
      netProfit: netProfit,
      grossProfit: grossProfit,
      bestClients: bestClients,
      bestSalesPeople: bestSalesPeople,
    })
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

      product!.store_quantity = product!.store_quantity - item.quantity
      await product!.save()
    }
  }
}
