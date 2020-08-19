import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class ValidateSalesPersonMiddleware {
  public async handle (
    { request }: HttpContextContract,
    next: () => Promise<void>
  ) {
    const postsSchema = schema.create({
      name: schema.string(),
      cost_price: schema.number(),
      sales_price: schema.number(),
    })

    const messageDefault = 'O campo {{ field }} é obrigatório'

    await request.validate({
      schema: postsSchema,
      messages: {
        'name.required': messageDefault,
      },
    })

    await next()
  }
}
