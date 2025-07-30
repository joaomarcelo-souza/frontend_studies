import { computed, Injectable, signal } from '@angular/core';
import { AbstractProjectService } from './abstract-project.service';
import { Project } from '../../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class MockProjectService extends AbstractProjectService {
  private _projects = signal<Project[]>([
    {
      id: 1,
      title: 'Dashboard Angular',
      description: 'Um painel interativo feito com Angular + Material.',
      technologies: ['Angular'],
      linkDemo: 'https://meudemo.com/angular-dashboard',
    },
    {
      id: 2,
      title: 'API de Adoção',
      description: 'Back-end REST em FastAPI para gerenciar adoções.',
      technologies: ['fastAPI'],
    },
    {
      id: 3,
      title: 'Fullstack Adotau!',
      description: 'Sistema de adoção com Angular no front e FastAPI no back.',
      technologies: ['Angular', 'fastAPI'],
      linkDemo: 'https://meudemo.com/adotau',
    },
  ]);

  projects = computed(() => this._projects());
}
