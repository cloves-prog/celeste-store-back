import Route from '@ioc:Adonis/Core/Route'

Route.get('sales/resume', 'SalesController.resume')
Route.get('sales', 'SalesController.index')

Route.post('sales', 'SalesController.store').middleware('sale-validator')
Route.delete('sales/:sales_number', 'SalesController.destroy')
