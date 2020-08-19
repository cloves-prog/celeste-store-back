import Route from '@ioc:Adonis/Core/Route'

Route.get('clients', 'ClientsController.index').middleware('auth')
Route.post('clients', 'ClientsController.store').middleware(['auth','client-validator'])
Route.put('clients/:id', 'ClientsController.update').middleware(['auth','client-validator'])
Route.delete('clients/:id', 'ClientsController.destroy').middleware('auth')
