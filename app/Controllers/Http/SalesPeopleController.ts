import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SalesPeople from 'App/Models/SalesPerson'

/**
 * Middleware sales-people-validator
 */
export default class SalesPeopleController {
  public async index () {
    return SalesPeople.all()
  }

  public async store ({ request, response }: HttpContextContract) {
    const salesPeople = await SalesPeople.create({name: request.input('name')})

    return response.status(201).send(salesPeople)
  }

  public async update ({ request, params, response }: HttpContextContract) {
    // Retorna um 404, caso não enconstrar na base
    const salesPeople = await SalesPeople.findOrFail(params.id)

    salesPeople.name = request.input('name')
    await salesPeople.save()

    return response.status(200).send(salesPeople)
  }

  public async destroy ({ params, response }: HttpContextContract) {
    const salesPeople = await SalesPeople.findOrFail(params.id)
    await salesPeople.delete()

    return response.status(204)
  }
}
