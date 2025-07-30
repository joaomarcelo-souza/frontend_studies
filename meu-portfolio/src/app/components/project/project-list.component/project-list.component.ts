import { Component, inject } from '@angular/core';
import { AbstractProjectService } from '../../../services/project/abstract-project.service';
import { ProjectCard } from '../project-card/project-card.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent {
  private service = inject(AbstractProjectService);

  projects = this.service.projects;
}
