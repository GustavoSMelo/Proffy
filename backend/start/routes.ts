import Route from '@ioc:Adonis/Core/Route'
import TeachersController from '../app/Controllers/Http/TeachersController'
import ConnectionController from '../app/Controllers/Http/ConnectionsControllers'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/teacher', new TeachersController().store)
Route.get('/teacher', new TeachersController().index)
Route.post('/teacher/show', new TeachersController().show)
Route.get('/connection', new ConnectionController().index)
