import {Component} from "@angular/core";
import {UserService} from "./userService";
import {IUserService} from "./iuserService";

@Component({
    selector:"default-page",
    templateUrl:"src/modules/app/defaultPage.html"
})

export class DefaultPage{
    public users : Array<any> = [];
    public selectedUser : any = {};
    constructor(){
        let userService : IUserService = new UserService();
        this.users = userService.getUsers();
    };

    public onUserClicked(user:any){
        this.selectedUser = user;
    }

    public firstNameChanged(firstName : string){
        console.log("First Name: ", firstName);
    }
}