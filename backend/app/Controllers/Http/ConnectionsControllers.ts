import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Teachers from '../../Models/Teachers'

class ConnectionControllers {
  public async index() {
    const allConnections = await Teachers.all()

    return allConnections.length
  }
}

export default ConnectionControllers
