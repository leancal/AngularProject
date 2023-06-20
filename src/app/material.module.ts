import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatBadgeModule,
  ],
})
export class MaterialModule {}
