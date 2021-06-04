import { NgModule } from '@angular/core';
//global
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
// table
import {MatTableModule} from '@angular/material/table';
// form
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';



const MaterialComponents = [    
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatProgressSpinnerModule,  
  MatDialogModule
]

@NgModule({  
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
