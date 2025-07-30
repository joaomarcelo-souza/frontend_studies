import { MatCardModule } from '@angular/material/card';
import { Component, Input } from '@angular/core';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCard {
  @Input() project!: Project;
}
