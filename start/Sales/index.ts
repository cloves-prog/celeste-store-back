import Route from '@ioc:Adonis/Core/Route'

Route.get('sales/resume', 'SalesController.resume').middleware('auth')
Route.get('sales', 'SalesController.index').middleware('auth')

Route.post('sales', 'SalesController.store').middleware(['auth', 'sale-validator'])
Route.delete('sales/:sales_number', 'SalesController.destroy').middleware('auth')
