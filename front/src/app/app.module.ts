import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EditorComponent } from './editor/editor.component';
import { TopicComponent } from './topic/topic.component';
import { SubtopicsComponent } from './subtopics/subtopics.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { SubtopicDetailsComponent } from './subtopic-details/subtopic-details.component';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { CreateSubtopicComponent } from './create-subtopic/create-subtopic.component';
import { ExplorerComponent } from './explorer/explorer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBodyComponent,
    MainPageComponent,
    SectionComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    EditorComponent,
    TopicComponent,
    SubtopicsComponent,
    TopicDetailsComponent,
    SubtopicDetailsComponent,
    CreateTopicComponent,
    CreateSubtopicComponent,
    ExplorerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
