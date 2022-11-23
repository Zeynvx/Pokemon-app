import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { MainComponent } from './views/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PkmnComponent } from './views/pkmn/pkmn.component';
import { HttpClientModule } from '@angular/common/http';
import { PkmnCardComponent } from './components/pkmn-card/pkmn-card.component';
import { PkmnListComponent } from './views/pkmn-list/pkmn-list.component';
import { PkmnItemComponent } from './components/pkmn-item/pkmn-item.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PkmnComponent,
    PkmnCardComponent,
    PkmnListComponent,
    PkmnItemComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [MainComponent]
})
export class AppModule { }
