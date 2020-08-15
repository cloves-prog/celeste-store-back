import Route from '@ioc:Adonis/Core/Route'

Route.get('clients', 'ClientsController.index')
Route.post('clients', 'ClientsController.store').middleware('client-validator')
Route.put('clients/:id', 'ClientsController.update').middleware('client-validator')
Route.delete('clients/:id', 'ClientsController.destroy')
