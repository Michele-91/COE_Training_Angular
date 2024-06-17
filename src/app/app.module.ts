import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { CustomAttributeDirective } from './directives/custom-attribute.directive';
import { HostListenerDirective } from './directives/host-listener.directive';
import { HostBindingDirective } from './directives/host-binding.directive';
import { RendererTwoDirective } from './directives/renderer-two.directive';
import { ElementRefDirective } from './directives/element-ref.directive';
import { SharingDataParentComponent } from './sharing-data-parent/sharing-data-parent.component';
import { SharingDataChildComponent } from './sharing-data-parent/sharing-data-child/sharing-data-child.component';
import { SharingDataSiblingOneComponent } from './sharing-data-sibling-one/sharing-data-sibling-one.component';
import { SharingDataSiblingTwoComponent } from './sharing-data-sibling-two/sharing-data-sibling-two.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoutingOneComponent } from './routing-one/routing-one.component';
import { RoutingTwoComponent } from './routing-two/routing-two.component';
import { RoutingHomeComponent } from './routing-home/routing-home.component';
import { AuthGuard } from './guards/auth.guard';
import { BuiltInPipesComponent } from './pipes/built-in-pipes/built-in-pipes.component';
import { CustomPipe } from './pipes/custom.pipe';
import { ObservablesComponent } from './observables/observables.component';


const routes: Routes = [
  // { path: '',  component: AppComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: RoutingHomeComponent, canActivate: [AuthGuard] },
  { path: 'one', component: RoutingOneComponent },
  { path: 'two', component: RoutingTwoComponent },
  { path: '**', component: NotFoundComponent} // Wildcard route
  // { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect to home page
];


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivesComponent,
    CustomAttributeDirective,
    HostListenerDirective,
    HostBindingDirective,
    RendererTwoDirective,
    ElementRefDirective,
    SharingDataParentComponent,
    SharingDataChildComponent,
    SharingDataSiblingOneComponent,
    SharingDataSiblingTwoComponent,
    ViewChildComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    RoutingOneComponent,
    RoutingTwoComponent,
    RoutingHomeComponent,
    BuiltInPipesComponent,
    CustomPipe,
    ObservablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // enables template-driven forms
    ReactiveFormsModule, // enables reactive forms
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


