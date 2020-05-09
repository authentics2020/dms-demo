import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { environment } from '@env/environment';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { AuthModule } from '@app/auth';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingsModule } from './settings/settings.module';
import { DropoffModule } from './dropoff/dropoff.module';
import { MasterfileModule } from './masterfile/masterfile.module';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ConfirmpasswordComponent } from './confirmpassword/confirmpassword.component';
@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production,
    }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    SettingsModule,
    AuthModule,
    Angulartics2Module.forRoot(),
    DropoffModule,
    MasterfileModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    ChangepasswordComponent,
    ConfirmpasswordComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
