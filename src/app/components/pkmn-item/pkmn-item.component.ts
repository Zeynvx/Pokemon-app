import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PkmnService } from 'src/service/pkmn.service';

@Component({
  selector: 'pkmn-item',
  templateUrl: './pkmn-item.component.html',
  styleUrls: ['./pkmn-item.component.css'],
  providers: [PkmnService],
})
export class PkmnItemComponent implements OnInit {
  @Input() pokemon: any;
  public pkmnData: any;

  constructor(private _pkmnService: PkmnService) {}

  ngOnInit(): void {
    this._pkmnService.getPokemon(this.pokemon.url).subscribe({
      next: (res) => {
        this.pkmnData = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
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
