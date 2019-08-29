const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    logging: false,
  },
  test: {
    use_env_variable: 'DATABASE_URL_TEST',
    url: process.env.DATABASE_URL_TEST,
    dialect: 'postgres',
    logging: false,
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    url: process.env.DATABASE_URL,
    dialectOptions: {
      ssl: true,
    },
  },
}
