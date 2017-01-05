import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent }   from './directives.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
@NgModule({
declarations: [DirectivesComponent, HighlightDirective, UnlessDirective],
imports: [BrowserModule, FormsModule],
bootstrap: [DirectivesComponent]
})
export class AppModule {}
