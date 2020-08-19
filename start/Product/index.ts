import Route from '@ioc:Adonis/Core/Route'

Route.get('products', 'ProductsController.index') // Essa rota não será autenticada
Route.post('products', 'ProductsController.store').middleware(['auth', 'product-validator'])
Route.put('products/:id', 'ProductsController.update').middleware(['auth', 'product-validator'])
Route.delete('products/:id', 'ProductsController.destroy').middleware('auth')
