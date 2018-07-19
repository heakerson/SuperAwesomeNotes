import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CreateComponent } from './create/create.component';
import { NoteComponent } from './note/note.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'Search', component: SearchComponent},
  { path: 'Create', component: CreateComponent},
  { path: 'Note/:Id', component: NoteComponent},
  { path: 'Edit/:Id', component: EditComponent},
  { path: '', redirectTo: '/Search', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
