import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProjectCard } from '../components/project/project-card/project-card.component';
import { ProjectsComponent } from '../pages/projects.component/projects.component';

export const routes: Routes = [{ path: '', component: ProjectsComponent }];
