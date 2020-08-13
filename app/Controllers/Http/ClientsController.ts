import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'

export default class ClientController {
  public async store ({ request }: HttpContextContract) {
    return request.all()
  };

  public async index () {
    return Client.all()
  }
}
