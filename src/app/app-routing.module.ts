import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/contents/welcome/welcome.component';
import { ContentsComponent } from './components/contents/contents/contents/contents.component';
import { ToolsToUseComponent } from './components/contents/tools-to-use/tools-to-use.component';
import { ReviewToDotnetComponent } from './components/contents/review-to-dotnet/review-to-dotnet.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'contents', component: ContentsComponent },
  { path: 'PresentacionDelCurso/Herramientas', component : ToolsToUseComponent},
  { path: 'review-to-dotnet', component: ReviewToDotnetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
