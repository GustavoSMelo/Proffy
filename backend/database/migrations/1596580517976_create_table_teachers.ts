import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateTableTeachers extends BaseSchema {
  protected tableName = 'teachers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.text('bio')
      table.string('photo')
      table.string('whatsapp')
      table.string('matter')
      table.string('day')
      table.string('start_class')
      table.string('end_class')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
