import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class ValidateSalesPersonMiddleware {
  public async handle (
    { request }: HttpContextContract,
    next: () => Promise<void>
  ) {
    const postsSchema = schema.create({
      name: schema.string(),
      description: schema.string(),
      brand: schema.string(),
      provider: schema.string(),
      classification: schema.string(),
      cost_price: schema.number(),
      sales_price: schema.number(),
      stock_quantity: schema.number(),
      store_quantity: schema.number(),
    })

    const messageDefault = 'O campo {{ field }} é obrigatório'

    await request.validate({
      schema: postsSchema,
      messages: {
        'name.required': messageDefault,
        'description.required': messageDefault,
        'brand.required': messageDefault,
        'provider.required': messageDefault,
        'classification.required': messageDefault,
        'cost_price.required': messageDefault,
        'sales_price.required': messageDefault,
        'stock_quantity.required': messageDefault,
        'store_quantity.required': messageDefault,
      },
    })

    await next()
  }
}
