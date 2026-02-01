import { MongoClient } from 'mongodb';

import{ObjectId} from 'mongodb'


const dbName="node-project"
const collectionName="todo"
const url="mongodb://localhost:27017"
const client=new MongoClient(url)

const connection=async()=>{
   const connect =await client.connect(); // mongodb ko client se connect karega
   return await connect.db(dbName)
}

export {connection,ObjectId, collectionName};