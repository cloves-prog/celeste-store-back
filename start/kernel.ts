import Server from '@ioc:Adonis/Core/Server'

Server.middleware.register([
  'Adonis/Core/BodyParserMiddleware',
])

Server.middleware.registerNamed({
  'client-validator': 'App/Middleware/ValidateClientMiddleware',
  'sales-people-validator': 'App/Middleware/ValidateSalesPersonMiddleware',
  'product-validator': 'App/Middleware/ValidateProductsMiddleware',
})
