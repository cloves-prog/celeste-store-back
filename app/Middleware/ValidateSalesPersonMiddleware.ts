import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class ValidateSalesPersonMiddleware {
  public async handle (
    { request }: HttpContextContract,
    next: () => Promise<void>
  ) {
    const postsSchema = schema.create({
      name: schema.string(),
    })

    await request.validate({
      schema: postsSchema,
      messages: {
        'name.required': 'O campo {{ field }} é obrigatório',
      },
    })

    await next()
  }
}
