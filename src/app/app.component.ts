import { ChangeDetectionStrategy, Component, isDevMode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Mint';

  protected readonly isDev: boolean;

  constructor() {
    this.isDev = isDevMode();
  }
}
