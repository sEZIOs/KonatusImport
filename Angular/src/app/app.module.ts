import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './.constructor/main/main.component';
import { SideBarComponent } from './.constructor/side-bar/side-bar.component';
import { HeaderSwitchComponent } from './.component/_header-component/header-switch/header-switch.component';
import { HeaderComponent } from './.component/_header-component/header/header.component';
import { ButtonFillComponent } from './.component/_buttons-component/button-fill/button-fill.component';
import { ButtonOutlineComponent } from './.component/_buttons-component/button-outline/button-outline.component';
import { ProjectNavComponent } from './.component/_project-nav-component/project-nav/project-nav.component';
import { TabComponent } from './.component/_project-nav-component/tab/tab.component';
import { ImportAssemblerComponent } from './1/import-assembler/import-assembler.component';
import { MappingAssemblerComponent } from './2/mapping-assembler/mapping-assembler.component';
import { VisualizeAssemblerComponent } from './3/visualize-assembler/visualize-assembler.component';
import { ImportSurfaceComponent } from './1/_import-content/import-surface/import-surface.component';
import { MappingProgramComponent } from './2/_mapping-content/1.mapping-program/mapping-program.component';
import { MappingEssentialComponent } from './2/_mapping-content/2.mapping-essential/mapping-essential.component';
import { MappingOptionalComponent } from './2/_mapping-content/3.mapping-optional/mapping-optional.component';
import { VisualizeProgramComponent } from './3/_visualize-content/visualize-program/visualize-program.component';
import { VisualizeSheetComponent } from './3/_visualize-content/visualize-sheet/visualize-sheet.component';
import { ProgressPilluleComponent } from './.component/_header-component/progress-pillule/progress-pillule.component';
import { InterfaceViewService } from './_services/interface-view/interface-view.service';
import { ProgramLinkComponent } from './.component/program-link/program-link.component';
import { SvgComponent } from './.component/svg/svg.component';
import { ButtonQueryComponent } from './.component/_buttons-component/button-query/button-query.component';
import { OtherLinkComponent } from './.component/other-link/other-link.component';
import { LoginComponent } from './0/_landing_content/login/login.component';
import { RegisterComponent } from './0/_landing_content/register/register.component';
import { LandingPageComponent } from './0/landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { sharedService } from './_data/shared.service';







@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideBarComponent,
    HeaderSwitchComponent,
    HeaderComponent,
    ButtonFillComponent,
    ButtonOutlineComponent,
    ProjectNavComponent,
    TabComponent,
    ImportAssemblerComponent,
    MappingAssemblerComponent,
    VisualizeAssemblerComponent,
    ImportSurfaceComponent,
    MappingProgramComponent,
    MappingEssentialComponent,
    MappingOptionalComponent,
    VisualizeProgramComponent,
    VisualizeSheetComponent,
    ProgressPilluleComponent,
    ProgramLinkComponent,
    SvgComponent,
    ButtonQueryComponent,
    OtherLinkComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [InterfaceViewService, sharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
