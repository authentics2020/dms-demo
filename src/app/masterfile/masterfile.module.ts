import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterfileRoutingModule } from './masterfile-routing.module';
import { MasterfileComponent } from './masterfile.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CustomerlistComponent } from './customerlist/customerlist.component';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatStepperModule } from '@angular/material/stepper';
import { HaulierlistComponent } from './haulierlist/haulierlist.component';
import { AddhaulierComponent } from './haulierlist/addhaulier/addhaulier.component';
import { IsoComponent } from './iso/iso.component';
import { AddisoComponent } from './iso/addiso/addiso.component';
import { SurveyorComponent } from './surveyor/surveyor.component';
import { AddsurveyorComponent } from './surveyor/addsurveyor/addsurveyor.component';
import { VendorComponent } from './vendor/vendor.component';
import { AddvendorComponent } from './vendor/addvendor/addvendor.component';
import { VendortypeComponent } from './vendortype/vendortype.component';
import { AddvendortypeComponent } from './vendortype/addvendortype/addvendortype.component';
import { GatetypeComponent } from './gatetype/gatetype.component';
import { AddgatetypeComponent } from './gatetype/addgatetype/addgatetype.component';
import { GatestatusComponent } from './gatestatus/gatestatus.component';
import { AddgatestatusComponent } from './gatestatus/addgatestatus/addgatestatus.component';
import { ProgressstatusComponent } from './progressstatus/progressstatus.component';
import { AddprogressstatusComponent } from './progressstatus/addprogressstatus/addprogressstatus.component';
import { EortypeComponent } from './eortype/eortype.component';
import { AddeortypeComponent } from './eortype/addeortype/addeortype.component';
import { CommodityComponent } from './commodity/commodity.component';
import { AddcommodityComponent } from './commodity/addcommodity/addcommodity.component';
import { ForkliftjobtypeComponent } from './forkliftjobtype/forkliftjobtype.component';
import { AddforkliftjobtypeComponent } from './forkliftjobtype/addforkliftjobtype/addforkliftjobtype.component';
import { ForkliftjobstatusComponent } from './forkliftjobstatus/forkliftjobstatus.component';
import { AddforkliftjobstatusComponent } from './forkliftjobstatus/addforkliftjobstatus/addforkliftjobstatus.component';
import { CurrencyComponent } from './currency/currency.component';
import { AddcurrencyComponent } from './currency/addcurrency/addcurrency.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    MasterfileComponent,
    CustomerlistComponent,
    AddcustomerComponent,
    HaulierlistComponent,
    AddhaulierComponent,
    IsoComponent,
    AddisoComponent,
    SurveyorComponent,
    AddsurveyorComponent,
    VendorComponent,
    AddvendorComponent,
    VendortypeComponent,
    AddvendortypeComponent,
    GatetypeComponent,
    AddgatetypeComponent,
    GatestatusComponent,
    AddgatestatusComponent,
    ProgressstatusComponent,
    AddprogressstatusComponent,
    EortypeComponent,
    AddeortypeComponent,
    CommodityComponent,
    AddcommodityComponent,
    ForkliftjobtypeComponent,
    AddforkliftjobtypeComponent,
    ForkliftjobstatusComponent,
    AddforkliftjobstatusComponent,
    CurrencyComponent,
    AddcurrencyComponent,
  ],
  imports: [
    CommonModule,
    MasterfileRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatStepperModule,
    MatRadioModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
  ],
})
export class MasterfileModule {}
