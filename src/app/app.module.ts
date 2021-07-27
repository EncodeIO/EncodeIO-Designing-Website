import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgSelectModule } from '@ng-select/ng-select';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideSectionComponent } from './side-section/side-section.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultComponent } from './dialog/result/result.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogTemplateComponent } from './dialog/dialog-template/dialog-template.component';
import {DialogService} from './dialog/dialog-service.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { CreativeAgencyComponent } from './creative-agency/creative-agency.component';
import { WebDesigningComponent } from './web-designing/web-designing.component';
import { GraphicDesigningComponent } from './graphic-designing/graphic-designing.component';
import { WebApplicationComponent } from './web-application/web-application.component';
import { AppDevelopmentComponent } from './app-development/app-development.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    BlogsComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    SideSectionComponent,
    ContactFormComponent,
    ResultComponent,
    DialogComponent,
    DialogTemplateComponent,
    AboutUsComponent,
    CreativeAgencyComponent,
    WebDesigningComponent,
    GraphicDesigningComponent,
    WebApplicationComponent,
    AppDevelopmentComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule, MatDialogModule, MatButtonModule,
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
