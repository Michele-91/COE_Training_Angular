import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  title = 'Data Binding:';

  red = 0;
  green = 0;
  blue = 0;
  colorSelection = "";
  titleBackgroundColor = "";
  changeColorButtondisabled = false;
  
  ngOnInit(): void {
    this.red = 173;
    this.green = 216;
    this.blue = 230;
    this.updateColorValues();
  }

  generateRandomColor() {
    return Math.floor(Math.random() * 256);
  }

  changeColor(event: any) {
    this.red = this.generateRandomColor();
    this.green = this.generateRandomColor();
    this.blue = this.generateRandomColor();
    this.updateColorValues();
    this.colorSelection = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    this.titleBackgroundColor = `border-radius:5px;padding:10px;background-color:${this.colorSelection}`;
  }

  updateColorValues() {
    this.colorSelection = `rgb(${this.red}, ${this.green}, ${this.blue})`;
    this.titleBackgroundColor = `border-radius:5px;padding:10px;background-color:${this.colorSelection}`;
  }

  toggleChangeColorButton() {
    this.changeColorButtondisabled = !this.changeColorButtondisabled;
  }

  updateCourseTitle(input: any) {
    console.log(input.target.value);
    this.title = input.target.value ? input.target.value : "Data Binding:";
  }
}
