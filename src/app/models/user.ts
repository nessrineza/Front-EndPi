import { Role } from "./role";

export class User {
  id!: number;
  username!: String;
  email!: String;
  password!: String;
  roles : Role[] = [];
  firstName!:String;
  lastName!:String;
  phoneNumber!:String
  blocked!:Boolean
}
