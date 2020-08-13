import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class ValidateClientMiddleware {
  public async handle ({ request }: HttpContextContract, next: () => Promise<void>) {
    const postsSchema = schema.create({
      name: schema.string(),
      address: schema.string(),
      phone: schema.number(),
    })

    const messageDefault = 'O campo {{ field }} é obrigatório'

    await request.validate({
      schema: postsSchema,
      messages: {
        'name.required': messageDefault,
        'address.required': messageDefault,
        'phone.required': messageDefault,
        'phone.number': 'O campo {{field}} precisa conter somente números',
      },
    })

    await next()
  }
}
