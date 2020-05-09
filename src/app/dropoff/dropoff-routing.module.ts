import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { DropoffComponent } from './dropoff.component';
import { SelectdropoffComponent } from './selectdropoff/selectdropoff.component';
import { ContainerinfoComponent } from './containerinfo/containerinfo.component';
InvoiceComponent;
import { InvoiceComponent } from './invoice/invoice.component';
import { ReceiptComponent } from './receipt/receipt.component';

import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/dropoff', pathMatch: 'full' },
    {
      path: 'selectdropoff',
      component: SelectdropoffComponent,
      data: { title: extract('Dropoff') },
    },
    {
      path: 'containerinfo',
      component: ContainerinfoComponent,
      data: { title: extract('container info') },
    },
    {
      path: 'invoice',
      component: InvoiceComponent,
      data: { title: extract('invoice') },
    },
    {
      path: 'dropoff',
      component: DropoffComponent,
      data: { title: extract('Dropoff') },
    },
    {
      path: 'receipt',
      component: ReceiptComponent,
      data: { title: extract('Receipt') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class DropoffRoutingModule {}
