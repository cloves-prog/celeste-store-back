import Route from '@ioc:Adonis/Core/Route'

Route.get('clients', 'ClientsController.index')
Route.post('clients', 'ClientsController.store').middleware('client-validator')
