import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TeachersModel from '../../Models/Teachers'

export default class TeachersController {
  public async store({ request, response }: HttpContextContract) {
    // const data = request.all() ---- get all datas by JSON body

    const data = request.only(['name', 'bio', 'whatsapp', 'photo', 'matter', 'day', 'start_class', 'end_class'])

    const Teacher = new TeachersModel()

    Teacher.name = data.name
    Teacher.bio = data.bio
    Teacher.whatsapp = data.whatsapp
    Teacher.photo = data.photo
    Teacher.matter = data.matter
    Teacher.day = data.day
    Teacher.start_class = data.start_class
    Teacher.end_class = data.end_class

    await Teacher.save()

    return response.status(200).json({ message: 'teacher created with success', teacher: Teacher })
  }

  public async index() {
    const allTeachers = await TeachersModel.all()

    return allTeachers
  }

  public async show({ request, response }: HttpContextContract) {
    const data = request.only(['matter', 'day', 'hour'])

    const allTeachers = await TeachersModel.all()

    const TeacherFiltred = allTeachers.map(teacher => {
      if (teacher.matter === data.matter && teacher.day === data.day &&
        (teacher.start_class >= data.hour || teacher.end_class <= data.hour)) {
        return teacher
      }
    })

    return response.status(200).json(TeacherFiltred)
  }
}
