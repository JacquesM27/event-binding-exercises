import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-binding-exercises';
  blackDiv = 'black';
  yellowDiv = 'yellow';
  colorSwitch = 'green';
  colorButtons = 'black';
  text = 'Type something';
  htmlText = '<h2>Angular is great</h2><blockquote>But you have to learn a lot</blockquote>';
  isDisabled = true;
}
