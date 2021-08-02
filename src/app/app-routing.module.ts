import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreativeAgencyComponent } from './creative-agency/creative-agency.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { WebDesigningComponent } from './web-designing/web-designing.component';
import { GraphicDesigningComponent } from './graphic-designing/graphic-designing.component';
import { WebApplicationComponent } from './web-application/web-application.component';
import { AppDevelopmentComponent } from './app-development/app-development.component';
import { EncodeioBlogComponent } from './encodeio-blog/encodeio-blog.component';




const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'services', component:ServicesComponent},
  {path:'blog', component:BlogsComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'creative-agency', component: CreativeAgencyComponent},
  {path:'web-designing' , component:WebDesigningComponent},
  {path:'graphic-designing' ,component:GraphicDesigningComponent},
  {path:'web-application' ,component:WebApplicationComponent},
  {path:'app-development' ,component:AppDevelopmentComponent},
  {path:'encodeio-blog' ,component:EncodeioBlogComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
