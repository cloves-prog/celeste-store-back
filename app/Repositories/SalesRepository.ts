import Database from '@ioc:Adonis/Lucid/Database'
import { RawQueryBindings } from '@ioc:Adonis/Lucid/DatabaseQueryBuilder'

export default class SalesResume {
  private parser (result: RawQueryBindings) {
    if (result.length > 0) {
      return result[0]
    }

    return null
  }
  public async delete (salesNumber: string) {
    await Database
      .from('sales')
      .delete()
      .where('sales_number', salesNumber)
  }

  public async getResume () {
    const bestClients = await this.bestClients()
    const bestSalesPeople = await this.bestSalesPeople()
    const grossProfit = await this.grossProfit()
    const netProfit = await this.netProfit()

    return {
      bestClients,
      bestSalesPeople,
      grossProfit,
      netProfit,
    }
  }

  public async list () {
    const query = `
    SELECT sales_number, GROUP_CONCAT(DISTINCT products.name SEPARATOR ', ') products,
      sales_people.name as sales_people_name, clients.name as client_name FROM sales
        INNER JOIN products on products.id = sales.product_id
        INNER JOIN sales_people on sales_people.id = sales.sales_people_id
        INNER JOIN clients on clients.id = sales.client_id GROUP BY sales_number, sales_people.name, clients.name;
    `
    return this.parser(await Database.rawQuery(query))
  }
  public async bestClients (limit = 4) {
    const query = `
      SELECT clients.name, sales.client_id as id, SUM(products.sales_price * sales.quantity) total
        FROM sales
          INNER JOIN clients on clients.id = sales.client_id
          INNER JOIN products on products.id = sales.product_id
            GROUP BY sales.client_id
            ORDER BY total desc
            LIMIT ${limit};
      `

    return this.parser(await Database.rawQuery(query))
  }

  public async bestSalesPeople (limit = 4) {
    const query = `
        SELECT sales_people.name, sales.sales_people_id as id, SUM(products.sales_price * sales.quantity)  total
          FROM sales
          INNER JOIN sales_people on sales_people.id = sales.sales_people_id
          INNER JOIN products on products.id = sales.product_id
        GROUP BY sales.sales_people_id
        ORDER BY total desc
        LIMIT ${limit};
    `

    return this.parser(await Database.rawQuery(query))
  }

  public async grossProfit () {
    const query = `
    SELECT SUM(sales.quantity * products.sales_price) as total FROM sales
      INNER JOIN products on products.id = sales.product_id
      WHERE sales.created_at >= DATE(NOW()) - INTERVAL 7 DAY;
    `
    return this.parser(await Database.rawQuery(query))[0]
  }

  public async netProfit () {
    const query = `
      SELECT SUM(sales.quantity * (products.sales_price - products.cost_price)) total  FROM sales
        INNER JOIN products on products.id = sales.product_id
        WHERE sales.created_at >= DATE(NOW()) - INTERVAL 7 DAY;
    `

    return this.parser(await Database.rawQuery(query))[0]
  }
}
