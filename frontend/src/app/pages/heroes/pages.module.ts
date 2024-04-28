import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { TableComponent } from '../../components/table/table.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatIconModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    TableComponent,
    SearchInputComponent,
    DeleteComponent,
    LoaderComponent
  ],
  exports: [TableComponent, SearchInputComponent, DeleteComponent, LoaderComponent]
})
export class PagesModule { }
