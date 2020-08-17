import Route from '@ioc:Adonis/Core/Route'

Route.get('sales/resume', 'SalesController.resume')

Route.post('sales', 'SalesController.store').middleware('sale-validator')

