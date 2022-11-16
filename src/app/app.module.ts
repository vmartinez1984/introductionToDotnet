import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/contents/welcome/welcome.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentsComponent } from './components/contents/contents/contents/contents.component';
import { ToolsToUseComponent } from './components/contents/tools-to-use/tools-to-use.component';
import { ReviewToDotnetComponent } from './components/contents/review-to-dotnet/review-to-dotnet.component';
import { ReviewToPooComponent } from './components/contents/review-to-poo/review-to-poo.component';
import { ReviewToMvcComponent } from './components/contents/review-to-mvc/review-to-mvc.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuComponent,
    ContentsComponent,
    ToolsToUseComponent,
    ReviewToDotnetComponent,
    ReviewToPooComponent,
    ReviewToMvcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
