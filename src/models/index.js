// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Task, Note, User } = initSchema(schema);

export {
  Task,
  Note,
  User
};