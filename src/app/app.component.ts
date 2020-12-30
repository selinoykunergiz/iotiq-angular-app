import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';
  isMenuActive: boolean = true;

  ngOnInit(): void {
    if(window.innerWidth < 500){
      this.isMenuActive = false;
    }
  }

  toggleMenu(){
    this.isMenuActive = !this.isMenuActive;
  }

}
