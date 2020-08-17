import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class ProductSeeder extends BaseSeeder {
  public async run () {
    await Product.createMany([
      {
        name: 'Caderno',
        description: 'Caderno 10 matérias com capa dura',
        brand: 'cadernos 10',
        provider: 'papelaria sr josé',
        classification: 'papelaria',
        image: 'https://img.kalunga.com.br/FotosdeProdutos/136509d.jpg',
        cost_price: 12.5,
        sales_price: 15,
        stock_quantity: 4,
        store_quantity: 1,
      },
      {
        name: 'Vaso de flores',
        description: 'Vaso amarelo com flores artificias vermelhas',
        brand: 'Janaina Flores',
        provider: 'floricultura da Janaina',
        classification: 'decoracao',
        image: 'https://www.isabelaflores.com/media/catalog/product/a/l/alta-64-0.jpg',
        cost_price: 25,
        sales_price: 33.9,
        stock_quantity: 1,
        store_quantity: 2,
      },
      {
        name: 'Conjunto para pintura',
        description: 'Kit com tintas e pincéis para pintura	',
        brand: 'Cores Vivas',
        provider: 'papelaria sr josé',
        classification: 'papelaria',
        image: 'https://img.elo7.com.br/product/zoom/2922ECC/kit-de-pintura-a-oleo-completo-na-maleta-1tela-frete-gratis-cavalete-para-tela.jpg',
        cost_price: 19.9,
        sales_price: 25,
        stock_quantity: 5,
        store_quantity: 5,
      },
    ])
  }
}
