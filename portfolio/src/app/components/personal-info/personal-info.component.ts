import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-personal-info',
  standalone: true,
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
  imports: [NavbarComponent]
})
export class PersonalInfoComponent { }
