import Route from '@ioc:Adonis/Core/Route'

Route.get('salespeople', 'SalesPeopleController.index')
Route.post('salespeople', 'SalesPeopleController.store').middleware('sales-people-validator')
Route.put('salespeople/:id', 'SalesPeopleController.update').middleware('sales-people-validator')
Route.delete('salespeople/:id', 'SalesPeopleController.destroy')
