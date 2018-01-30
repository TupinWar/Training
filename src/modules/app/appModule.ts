import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {DefaultPage} from "./defaultPage";
import {UserQuickEdit} from "./_share/components/userQuickEdit"

@NgModule({
    imports:[BrowserModule, FormsModule],
    declarations:[DefaultPage, UserQuickEdit],
    bootstrap:[DefaultPage]
})

export class AppModule{
    
}