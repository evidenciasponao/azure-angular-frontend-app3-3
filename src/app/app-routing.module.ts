import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PortfolioOverviewComponent } from './portfolio-overview/portfolio-overview.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'blog-home', component: BlogHomeComponent},
  {path: 'blog-post', component: BlogPostComponent},
  {path: 'portfolio-overview', component: PortfolioOverviewComponent},
  {path: 'portfolio-item', component: PortfolioItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
