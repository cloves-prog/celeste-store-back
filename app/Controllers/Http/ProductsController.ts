import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import { RequestContract } from '@ioc:Adonis/Core/Request'

export default class ProductsController {
  public async index () {
    return Product.all()
  }

  public async store ({ request, response }: HttpContextContract) {
    const product = await Product.create(this.fieldParser(request))

    return response.status(201).send(product)
  }

  public async update ({ request, params, response }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)
    product.merge(this.fieldParser(request))
    await product.save()

    return response.status(200).send(product)
  }

  public async destroy ({ params, response }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)
    await product.delete()

    return response.status(204)
  }

  private fieldParser (request: RequestContract) {
    return request.only(
      [
        'name',
        'description',
        'brand',
        'provider',
        'classification',
        'cost_price',
        'sales_price',
        'stock_quantity',
        'store_quantity',
      ]
    )
  }
}
