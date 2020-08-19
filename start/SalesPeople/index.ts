import Route from '@ioc:Adonis/Core/Route'

Route.get('salespeople', 'SalesPeopleController.index').middleware('auth')
Route.post('salespeople', 'SalesPeopleController.store').middleware(['auth', 'sales-people-validator'])
Route.put('salespeople/:id', 'SalesPeopleController.update').middleware(['auth', 'sales-people-validator'])
Route.delete('salespeople/:id', 'SalesPeopleController.destroy').middleware('auth')
