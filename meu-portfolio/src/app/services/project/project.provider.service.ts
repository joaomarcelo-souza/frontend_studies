import { environment } from './../../../../environment/environment';
import { Injectable, Provider } from '@angular/core';
import { AbstractProjectService } from './abstract-project.service';
import { MockProjectService } from './mock-project.service';
import { ProjectService } from './project.service';

export const projectServiceProvider: Provider = {
  provide: AbstractProjectService,
  useClass: environment.useMockService ? MockProjectService : ProjectService,
};
