import Database from '@ioc:Adonis/Lucid/Database'

export default class SalesResume {
  public async bestClients () {
    const query = `
      SELECT clients.name, sales.client_id as id, SUM(products.sales_price * sales.quantity) total
        FROM sales
          INNER JOIN clients on clients.id = sales.client_id
          INNER JOIN products on products.id = sales.product_id
            GROUP BY sales.client_id
            ORDER BY total desc
            LIMIT 4;`

    return await Database.rawQuery(query)
  };
}
