import { Signal } from '@angular/core';
import { Project } from '../../models/project.model';

export abstract class AbstractProjectService {
  abstract projects: Signal<Project[]>;
}
