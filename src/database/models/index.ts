import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import dotenv from 'dotenv'
import * as dbConfig from '../config/config'

dotenv.config()

const basename = path.basename(__filename)

const env = process.env.NODE_ENV || 'development'
const config = dbConfig[env]

interface Database {
  sequelize?: Function
  Sequelize?: Function
}

const db: Database = {}

const sequelize = new Sequelize(process.env[config.use_env_variable], config)

fs.readdirSync(__dirname)
  .filter((file): boolean => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach((file): void => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach((modelName): void => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
