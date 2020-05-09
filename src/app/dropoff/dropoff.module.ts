import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropoffComponent } from './dropoff.component';
import { DropoffRoutingModule } from './dropoff-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SelectdropoffComponent } from './selectdropoff/selectdropoff.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerinfoComponent } from './containerinfo/containerinfo.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InvoiceComponent } from './invoice/invoice.component';
import { MatRadioModule } from '@angular/material/radio';
import { ReceiptComponent } from './receipt/receipt.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    DropoffComponent,
    SelectdropoffComponent,
    ContainerinfoComponent,
    InvoiceComponent,
    ReceiptComponent,
  ],
  imports: [
    CommonModule,
    DropoffRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
})
export class DropoffModule {}
