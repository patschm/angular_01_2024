import { NgModule } from "@angular/core";
import { MainComponent } from "./Main";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[MainComponent],
    providers:[],
    imports:[BrowserModule],
    exports:[MainComponent],
    bootstrap:[MainComponent]
})
export class Program
{

}