import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';

import { FrequencyPipe } from '@app/_pipes/frequency.pipe'
import { DurationPipe } from '@app/_pipes/duration.pipe'
import { SuccessPipe } from '@app/_pipes/success.pipe'

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material/material.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        FlexLayoutModule,
        MaterialModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditComponent,
        FrequencyPipe,
        DurationPipe,
        SuccessPipe
    ],

})
export class UsersModule { }