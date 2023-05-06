import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HeaderComponent } from './Components/header/header.component';
import { FeaturesComponent } from './Components/features/features.component';
import { TestimonialComponent } from './Components/testimonial/testimonial.component';
import { CallComponent } from './Components/call/call.component';
import { BlogComponent } from './Components/blog/blog.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutSection1Component } from './about-section1/about-section1.component';
import { AboutHeaderComponent } from './about-header/about-header.component';
import { AboutSection2Component } from './about-section2/about-section2.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactCardsComponent } from './contact-cards/contact-cards.component';
import { PricingComponent } from './pricing/pricing.component';
import { PricingSectionComponent } from './pricing-section/pricing-section.component';
import { FaqComponent } from './faq/faq.component';
import { FaqContentComponent } from './faq-content/faq-content.component';
import { FaqAccordion1Component } from './faq-accordion1/faq-accordion1.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PortfolioOverviewComponent } from './portfolio-overview/portfolio-overview.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FeaturesComponent,
    TestimonialComponent,
    CallComponent,
    BlogComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AboutSection1Component,
    AboutHeaderComponent,
    AboutSection2Component,
    AboutTeamComponent,
    ContactComponent,
    ContactFormComponent,
    ContactCardsComponent,
    PricingComponent,
    PricingSectionComponent,
    FaqComponent,
    FaqContentComponent,
    FaqAccordion1Component,
    BlogHomeComponent,
    BlogPostComponent,
    PortfolioOverviewComponent,
    PortfolioItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
