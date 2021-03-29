import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { PisiComponent } from './pisi/pisi.component';
import { SofiComponent } from './sofi/sofi.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material';
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CovidComponent } from './covid/covid.component';
import { CareerComponent } from './career/career.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'pisi',
        component: PisiComponent
      },
      {
        path: 'sofi',
        component: SofiComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'terms-conditions',
        component: TermsConditionsComponent
      },
      {
        path: 'privacy',
        component: PrivacyComponent
      },
      {
        path: 'covid',
        component: CovidComponent
      },
      {
        path: 'career',
        component: CareerComponent
      }
    ]

  }
]

@NgModule({
  declarations: [PublicComponent, HomeComponent, PisiComponent, SofiComponent, ContactUsComponent, AboutUsComponent, TermsConditionsComponent, PrivacyComponent, CovidComponent, CareerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign
  ]
})
export class PublicModule { }
