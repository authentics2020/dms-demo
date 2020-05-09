import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/i18n';
import { MasterfileComponent } from './masterfile.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { HaulierlistComponent } from './haulierlist/haulierlist.component';
import { AddhaulierComponent } from './haulierlist/addhaulier/addhaulier.component';
import { IsoComponent } from './iso/iso.component';
import { AddisoComponent } from './iso/addiso/addiso.component';
import { CommodityComponent } from './commodity/commodity.component';
import { AddcommodityComponent } from './commodity/addcommodity/addcommodity.component';
import { CurrencyComponent } from './currency/currency.component';
import { AddcurrencyComponent } from './currency/addcurrency/addcurrency.component';
import { Shell } from '@app/shell/shell.service';

import { EortypeComponent } from './eortype/eortype.component';
import { AddeortypeComponent } from './eortype/addeortype/addeortype.component';
import { ForkliftjobstatusComponent } from './forkliftjobstatus/forkliftjobstatus.component';
import { AddforkliftjobstatusComponent } from './forkliftjobstatus/addforkliftjobstatus/addforkliftjobstatus.component';
import { ForkliftjobtypeComponent } from './forkliftjobtype/forkliftjobtype.component';
import { AddforkliftjobtypeComponent } from './forkliftjobtype/addforkliftjobtype/addforkliftjobtype.component';
import { GatestatusComponent } from './gatestatus/gatestatus.component';
import { AddgatestatusComponent } from './gatestatus/addgatestatus/addgatestatus.component';
import { GatetypeComponent } from './gatetype/gatetype.component';
import { AddgatetypeComponent } from './gatetype/addgatetype/addgatetype.component';
import { ProgressstatusComponent } from './progressstatus/progressstatus.component';
import { AddprogressstatusComponent } from './progressstatus/addprogressstatus/addprogressstatus.component';
import { SurveyorComponent } from './surveyor/surveyor.component';
import { AddsurveyorComponent } from './surveyor/addsurveyor/addsurveyor.component';
import { VendorComponent } from './vendor/vendor.component';
import { AddvendorComponent } from './vendor/addvendor/addvendor.component';
import { VendortypeComponent } from './vendortype/vendortype.component';
import { AddvendortypeComponent } from './vendortype/addvendortype/addvendortype.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/masterfile', pathMatch: 'full' },
    {
      path: 'masterfile',
      component: MasterfileComponent,
      data: { title: extract('Master File') },
    },

    {
      path: 'customerlist',
      component: CustomerlistComponent,
      data: { title: extract('Customer List') },
    },

    {
      path: 'addcustomer',
      component: AddcustomerComponent,
      data: { title: extract('Add Customer') },
    },

    {
      path: 'haulierlist',
      component: HaulierlistComponent,
      data: { title: extract('Haulier List') },
    },

    {
      path: 'addhaulier',
      component: AddhaulierComponent,
      data: { title: extract('Add Haulier') },
    },

    {
      path: 'iso',
      component: IsoComponent,
      data: { title: extract('ISO') },
    },

    {
      path: 'addiso',
      component: AddisoComponent,
      data: { title: extract('Add ISO') },
    },

    {
      path: 'commodity',
      component: CommodityComponent,
      data: { title: extract('Commodity') },
    },

    {
      path: 'addcommodity',
      component: AddcommodityComponent,
      data: { title: extract('Add Commodity') },
    },

    {
      path: 'currency',
      component: CurrencyComponent,
      data: { title: extract('Currency') },
    },

    {
      path: 'addcurrency',
      component: AddcurrencyComponent,
      data: { title: extract('Add Currency') },
    },

    {
      path: 'eortype',
      component: EortypeComponent,
      data: { title: extract('EOR Type') },
    },

    {
      path: 'addeortype',
      component: AddeortypeComponent,
      data: { title: extract('Add EOR Type') },
    },

    {
      path: 'forkliftjobstatus',
      component: ForkliftjobstatusComponent,
      data: { title: extract('Forlift Job Status') },
    },

    {
      path: 'addforkliftjobstatus',
      component: AddforkliftjobstatusComponent,
      data: { title: extract('Add Forlift Job Status') },
    },

    {
      path: 'forkliftjobtype',
      component: ForkliftjobtypeComponent,
      data: { title: extract('Forlift Job Type') },
    },

    {
      path: 'addforkliftjobtype',
      component: AddforkliftjobtypeComponent,
      data: { title: extract('Add Forlift Job Type') },
    },

    {
      path: 'gatestatus',
      component: GatestatusComponent,
      data: { title: extract('Gate Status') },
    },

    {
      path: 'addgatestatus',
      component: AddgatestatusComponent,
      data: { title: extract('Add Gate Status') },
    },

    {
      path: 'gatetype',
      component: GatetypeComponent,
      data: { title: extract('Gate Type') },
    },

    {
      path: 'addgatetype',
      component: AddgatetypeComponent,
      data: { title: extract('Add Gate Type') },
    },

    {
      path: 'progressstatus',
      component: ProgressstatusComponent,
      data: { title: extract('Progress Status') },
    },

    {
      path: 'addprogressstatus',
      component: AddprogressstatusComponent,
      data: { title: extract('Add Progress Status') },
    },

    {
      path: 'surveyor',
      component: SurveyorComponent,
      data: { title: extract('Surveyor') },
    },

    {
      path: 'addsurveyor',
      component: AddsurveyorComponent,
      data: { title: extract('Add Surveyor') },
    },

    {
      path: 'vendor',
      component: VendorComponent,
      data: { title: extract('Vendor') },
    },

    {
      path: 'addvendor',
      component: AddvendorComponent,
      data: { title: extract('Add Vendor') },
    },

    {
      path: 'vendortype',
      component: VendortypeComponent,
      data: { title: extract('Vendor Type') },
    },

    {
      path: 'addvendortype',
      component: AddvendortypeComponent,
      data: { title: extract('Add Vendor Type') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class MasterfileRoutingModule {}
