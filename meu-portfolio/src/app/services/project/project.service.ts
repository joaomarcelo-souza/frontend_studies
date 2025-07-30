import { computed, Injectable, signal } from '@angular/core';
import { AbstractProjectService } from './abstract-project.service';
import { Project } from '../../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService extends AbstractProjectService {
  private _projects = signal<Project[]>([]);

  projects = computed(() => this._projects());
}
