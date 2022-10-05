const config =   {
  "name": "default",
  "type": "mysql",
  "host": process.env.HOST,
  "port": process.env.MYSQL_PORT || 3306,
  "username": process.env.MYSQL_USER,
  "password": process.env.MYSQLDB_ROOT_PASSWORD,
  "database": process.env.MYSQLDB_DATABASE,
  "synchronize": true,
  "logging": false,
  "entities": [
    "./src/entity/*"
  ]
}


export default config;