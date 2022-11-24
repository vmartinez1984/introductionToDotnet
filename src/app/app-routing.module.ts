import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/contents/welcome/welcome.component';
import { ContentsComponent } from './components/contents/contents/contents/contents.component';
import { ToolsToUseComponent } from './components/contents/tools-to-use/tools-to-use.component';
import { ReviewToDotnetComponent } from './components/contents/review-to-dotnet/review-to-dotnet.component';
import { ReviewToPooComponent } from './components/contents/review-to-poo/review-to-poo.component';
import { ReviewToMvcComponent } from './components/contents/review-to-mvc/review-to-mvc.component';
import { DependencyInjectionComponent } from './components/contents/dependency-injection/dependency-injection.component';
import { PracticeOneComponent } from './components/contents/practice-one/practice-one.component';
import { PracticeTwoComponent } from './components/contents/practice-two/practice-two.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'contents', component: ContentsComponent },
  { path: 'tools', component : ToolsToUseComponent},
  { path: 'review-to-dotnet', component: ReviewToDotnetComponent}, 
  { path: 'review-to-poo', component: ReviewToPooComponent},
  { path: 'review-to-mvc', component: ReviewToMvcComponent},
  { path: 'dependency-injection', component :DependencyInjectionComponent},
  { path: 'practice-one', component: PracticeOneComponent},
  { path: 'practice-two', component: PracticeTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
