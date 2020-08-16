import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SalesResume from '../../Services/SalesResume'

export default class SalesController {
  private salesResumeService: SalesResume

  constructor () {
    this.salesResumeService = new SalesResume()
  }
  public async resume ({ response }: HttpContextContract) {
    const bestClients = await this.salesResumeService.bestClients()
    const bestSalesPeople = await this.salesResumeService.bestSalesPeople()
    const grossProfit = await this.salesResumeService.grossProfit()

    response.status(200).send({
      grossProfit: grossProfit,
      bestClients: bestClients,
      bestSalesPeople: bestSalesPeople,
    })
  }
}
