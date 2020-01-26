import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatButtonToggleModule, MatBadgeModule, MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatGridListModule, MatExpansionModule, MatTabsModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatTooltipModule, MatSnackBarModule, MatDialogModule} from '@angular/material';

const material = [
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatGridListModule,
  MatExpansionModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule
]



@NgModule({
  imports: [
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }
