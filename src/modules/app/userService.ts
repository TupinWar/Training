import {IUserService} from "./iuserService";

export class UserService implements IUserService {
    public getUsers():Array<any>{
        return [{
            firstName : "Tuan",
            lastName : "Tran",
            userName : "trananhtuan"
        },
        {
            firstName : "Linh",
            lastName : "Luu",
            userName : "luuphuonglinh"
        }];
    }
}