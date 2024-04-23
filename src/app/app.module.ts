import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from "./app.component";
import { APP_PROVIDERS } from "./app.providers";
import { AppRouterModule } from "./app-routing.module";
import { LayoutModule } from "./components";

@NgModule({
  imports: [
    LayoutModule,
    AppRouterModule,

    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule
    ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [APP_PROVIDERS, {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
})
export class AppModule { }
