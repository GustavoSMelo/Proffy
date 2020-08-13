import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Teachers extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({})
  public name: string

  @column()
  public bio: string

  @column()
  public whatsapp: string

  @column()
  public matter: string

  @column()
  public day: string

  @column()
  public start_class: string

  @column()
  public end_class: string

  @column()
  public photo: string
}
