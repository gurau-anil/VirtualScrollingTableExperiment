import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
    numbers=[]
    constructor() {
        this.populateNumbers();
    }


    public showAlert() {
        alert("Button is clicked");
    }

    async populateNumbers() {
        for (var i = 0; i < 500000; i++) {
            this.numbers.push(i)
        }
    }
}
