import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayhelloworldComponent } from './components/displayhelloworld/displayhelloworld.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ShowhellobuttonComponent } from './components/showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from './components/displayname/displayname.component';
import { CounterComponent } from './components/counter/counter.component';
import { SimpleformComponent } from './components/simpleform/simpleform.component';
import { UserageComponent } from './components/userage/userage.component';
import { UsergreetingComponent } from './components/usergreeting/usergreeting.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TextlengthComponent } from './components/textlength/textlength.component';
import { CurrencyconverterComponent } from './components/currencyconverter/currencyconverter.component';
import { EvenoddcheckerComponent } from './components/evenoddchecker/evenoddchecker.component';
import { WordreverserComponent } from './components/wordreverser/wordreverser.component';
import { ShowdateComponent } from './components/showdate/showdate.component';
import { ShowusernameComponent } from './components/showusername/showusername.component';
import { MultiplicationtableComponent } from './components/multiplicationtable/multiplicationtable.component';
import { SimpleloginComponent } from './components/simplelogin/simplelogin.component';
import { FahrenheittocelsiusComponent } from './components/fahrenheittocelsius/fahrenheittocelsius.component';
import { BookmarklistComponent } from './components/bookmarklist/bookmarklist.component';
import { CharactercounterComponent } from './components/charactercounter/charactercounter.component';
import { PalindromecheckerComponent } from './components/palindromechecker/palindromechecker.component';
import { TemperatureconverterComponent } from './components/temperatureconverter/temperatureconverter.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { FactorialcalculatorComponent } from './components/factorialcalculator/factorialcalculator.component';
import { TodomanagerComponent } from './components/todomanager/todomanager.component';
import { GuessnumbergameComponent } from './components/guessnumbergame/guessnumbergame.component';
import { WordcounterComponent } from './components/wordcounter/wordcounter.component';
import { RandomnumbergeneratorComponent } from './components/randomnumbergenerator/randomnumbergenerator.component';
import { MultiplicationcheckerComponent } from './components/multiplicationchecker/multiplicationchecker.component';
import { UppercaseconverterComponent } from './components/uppercaseconverter/uppercaseconverter.component';
import { WordshufflerComponent } from './components/wordshuffler/wordshuffler.component';
import { BmisolverComponent } from './components/bmisolver/bmisolver.component';




@NgModule({
  declarations: [
    AppComponent,
    DisplayhelloworldComponent,
    LandingpageComponent,
    ShowhellobuttonComponent,
    DisplaynameComponent,
    CounterComponent,
    SimpleformComponent,
    UserageComponent,
    UsergreetingComponent,
    CalculatorComponent,
    TextlengthComponent,
    CurrencyconverterComponent,
    EvenoddcheckerComponent,
    WordreverserComponent,
    ShowdateComponent,
    ShowusernameComponent,
    MultiplicationtableComponent,
    SimpleloginComponent,
    FahrenheittocelsiusComponent,
    BookmarklistComponent,
    CharactercounterComponent,
    PalindromecheckerComponent,
    TemperatureconverterComponent,
    ShoppinglistComponent,
    FactorialcalculatorComponent,
    TodomanagerComponent,
    GuessnumbergameComponent,
    WordcounterComponent,
    RandomnumbergeneratorComponent,
    MultiplicationcheckerComponent,
    UppercaseconverterComponent,
    WordshufflerComponent,
    BmisolverComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule

  
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
    
  ]
})
export class AppModule { }
