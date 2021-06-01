import { NgModule } from '@angular/core';

// table
import {MatTableModule} from '@angular/material/table';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatSidenavModule} from '@angular/material/sidenav';
// form
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';



const MaterialComponents = [  
  // MatTableDataSource,
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSidenavModule

]

@NgModule({  
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
