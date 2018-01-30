import {Component, Input, Output, EventEmitter} from "@angular/core"

@Component({
    selector : "user-quick-edit",
    templateUrl : "src/modules/app/_share/components/userQuickEdit.html"
})

export class UserQuickEdit{
    // public selectedUser : any = {firstName : "Tuan", lastName : "Tran", userName : "trananhtuan"}
    @Input() firstName : string;
    @Output() firstNameChange : EventEmitter<any> = new EventEmitter()
    // public onChanged(el : any){
    //     this.onFirstNameChanged.emit(this.firstName);
    // }
}