import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() type: any;
  constructor() {}

  ngOnInit(): void {}

  public hideNavMenu = () => {
    const navMenu = window.document.querySelector('.pkmn-header__menu')!;
    if (navMenu.classList.contains('menu--active')) {
      navMenu.classList.remove('menu--active');
    }
  };

  public btnMenuAction = () => {
    const btnMenu = window.document.getElementById('btn-menu')!;
    const navMenu = window.document.querySelector('.pkmn-header__menu')!;

    if (btnMenu) {
      navMenu.classList.toggle('menu--active');
    }
  };
}
