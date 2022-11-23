import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PkmnService } from 'src/service/pkmn.service';
import { SharedService } from 'src/service/shared.service';

@Component({
  selector: 'pkmn-list',
  templateUrl: './pkmn-list.component.html',
  styleUrls: ['./pkmn-list.component.css'],
  providers: [PkmnService, SharedService],
})
export class PkmnListComponent implements OnInit {
  public pkmnArray: any;
  public message: any;
  public defaultParam: any;
  public prevLink: any;
  public nextLink: any;

  constructor(private _pkmnService: PkmnService, private _title: Title) {
    this.defaultParam = '?offset=0&limit=';
    this.pkmnArray = null;
  }

  ngOnInit(): void {
    this._title.setTitle('Pokemon - List');
    // Default load
    this.getPokemonList(this.defaultParam, 10);
  }

  getPokemonList(url: string, count: any) {
    this.pkmnArray = [];
    this._pkmnService.getPokemonList(url, count).subscribe({
      next: (res) => {
        this.pkmnArray = res.results;
        this.prevLink = res.previous;
        this.nextLink = res.next;
      },
      error: (err) => {
        this.message = 'Error with the server';
      },
    });
  }

  prevAction(url: string) {
    if (this.prevLink) {
      this.getPokemonList(url, null);
    }
  }

  nextAction(url: string) {
    if (this.nextLink) {
      this.getPokemonList(url, null);
    }
  }
}
