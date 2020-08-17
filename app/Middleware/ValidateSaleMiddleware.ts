import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class ValidateSaleMiddleware {
  public async handle (
    { request }: HttpContextContract,
    next: () => Promise<void>
  ) {
    const postsSchema = schema.create({
      clientId: schema.number(),
      salesPeopleId: schema.number(),
    })

    const messageDefault = 'O campo {{ field }} é obrigatório'

    await request.validate({
      schema: postsSchema,
      messages: {
        'clientId.required': messageDefault,
        'salesPeopleId.required': messageDefault,
        'products.required': messageDefault,
      },
    })

    await next()
  }
}
