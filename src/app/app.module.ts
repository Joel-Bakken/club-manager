import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { AllMembersComponent } from './all-members/all-members.component';
import { AdminComponent } from './admin/admin.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AllMembersComponent,
    AdminComponent,
    MemberDetailComponent,
    EditMemberComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
