import http from 'http';
import { app } from "./app"
import  connectionToDB  from "./config/database"
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
const start = async () => {
  await connectionToDB({
  type: 'mysql',
  host: `${process.env.HOST}`,
  port: `${process.env.MYSQL_PORT}`,
  username: `${process.env.MYSQL_USER}`,
  password:`${process.env.MYSQLDB_ROOT_PASSWORD}`,
  database: `${process.env.MYSQLDB_DATABASE}`,
  synchronize: true,
  entities: ['dist/entity/*']
});
  server.listen(PORT,()=>{
    console.info('Node project is listening on port', PORT);
  });
}

start()