import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pkmn-card',
  templateUrl: './pkmn-card.component.html',
  styleUrls: ['./pkmn-card.component.css'],
})
export class PkmnCardComponent implements OnInit {
  @Input() pokemon: any;
  @Input() message: any;
  constructor() {}

  ngOnInit(): void {}

  firstUpperCase(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  changeId(id: number) {
    if (id < 10) {
      return '00' + id;
    } else if (id >= 10 && id < 100) {
      return '0' + id;
    } else {
      return id;
    }
  }
  pkmnImg(json: any) {
    return json['official-artwork'].front_default;
  }
}
