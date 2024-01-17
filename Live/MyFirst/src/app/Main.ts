import { Component } from "@angular/core";

@Component({
    selector:'main',
    template:`<h1>Hello Main {{name}}</h1>`,
    styles:['h1 {background-color:red;}']
})
export class MainComponent
{
    public name:string = "Het is weer Blue Monday";
}