import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  
  usersList = [
    {name: "Michele", surname: "Spinelli", role: "Software Developer", seniority: "Junior"},
    {name: "Alberto", surname: "Merli", role: "Systems Engineer", seniority: "Senior"},
    {name: "Erik", surname: "Muhameti", role: "Consultant", seniority: "Junior"},
    {name: "Daniele", surname: "Sorgato", role: "Software Developer", seniority: "Senior"}
  ];
}
