import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'training';
  test: string = 'Working';

  handleEvent(data: string) {
    console.log(data)
  }
  options = [{
    name: 'vosj'
  },
  {
    name: 'vishal'
  }]
}
