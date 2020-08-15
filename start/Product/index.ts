import Route from '@ioc:Adonis/Core/Route'

Route.get('products', 'ProductsController.index')
Route.post('products', 'ProductsController.store').middleware('product-validator')
Route.put('products/:id', 'ProductsController.update').middleware('product-validator')
Route.delete('products/:id', 'ProductsController.destroy')
