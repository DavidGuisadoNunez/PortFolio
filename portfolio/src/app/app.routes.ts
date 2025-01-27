import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InterestsComponent } from './components/interests/interests.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'experiencia', component: ExperienceComponent },
  { path: 'formacion', component: EducationComponent },
  { path: 'datos-personales', component: PersonalInfoComponent },
  { path: 'habilidades', component: SkillsComponent },
  { path: 'datos-interes', component: InterestsComponent },
  { path: '**', redirectTo: '' } // Si la ruta no existe, redirige a Home
];
