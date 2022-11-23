import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PkmnService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = 'https://pokeapi.co/api/v2/pokemon/';
  }

  getPokemonList(url:string,number:any): Observable<any> {
    return number ? this._http.get(this.url + url +number) : this._http.get(url);
  }

  getPokemon(id: any): Observable<any> {
    return id >= 1 ? this._http.get(this.url + id) : this._http.get(id);
  }
}
