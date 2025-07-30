import { Component } from '@angular/core';
import { ProjectListComponent } from '../../components/project/project-list.component/project-list.component';

@Component({
  selector: 'app-projects.component',
  standalone: true,
  imports: [ProjectListComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
