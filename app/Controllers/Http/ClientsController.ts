import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'

export default class ClientController {
  public async index () {
    return Client.all()
  }

  public async store ({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'address', 'phone'])
    const salesPeople = await Client.create(data)

    return response.status(201).send(salesPeople)
  }

  public async update ({ request, params, response }: HttpContextContract) {
    const client = await Client.findOrFail(params.id)

    const data = request.only(['name', 'address', 'phone'])
    client.merge(data)
    await client.save()

    return response.status(200).send(client)
  }

  public async destroy ({ params, response }: HttpContextContract) {
    const client = await Client.findOrFail(params.id)
    await client.delete()

    return response.status(204)
  }
}
