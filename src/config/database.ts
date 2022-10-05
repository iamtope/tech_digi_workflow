import { createConnection } from "typeorm";
// import * as config from "../../ormconfig"


async function connectionToDB(connection: any) {
  try {
    await createConnection(connection);
    console.log('successfully connected to database')
    
  } catch (error:any) {
    console.log(error);
    
      // throw new DatabaseConnectionError(error.message)
  }
}



export default connectionToDB;