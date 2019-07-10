import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { EditorModule } from '@tinymce/tinymce-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxEditorModule } from 'ngx-editor';
import { TagInputModule } from 'ngx-chips';

import { SafePipePipe } from '../../safe-pipe.pipe';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';

// Commen ..
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    EditorModule,
    ReactiveFormsModule,
    DragDropModule,
    HttpClientModule,
    NgbModule,
    
    TagInputModule,
    NgxEditorModule,
    ClipboardModule
  ],
  declarations: [
    SafePipePipe,
    DashboardComponent
  ]
})

export class AdminLayoutModule {}
