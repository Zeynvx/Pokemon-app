import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PkmnService } from 'src/service/pkmn.service';
import { SharedService } from 'src/service/shared.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pkmn-view',
  templateUrl: './pkmn.component.html',
  styleUrls: ['./pkmn.component.css'],
  providers: [PkmnService],
})
export class PkmnComponent implements OnInit, OnDestroy {
  public pokemon: any;
  public message: any;

  @Output() bgByType = new EventEmitter();

  constructor(
    private _pkmnService: PkmnService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _sharedService: SharedService,
    private _title: Title
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      const id = params['id'];
      this._pkmnService.getPokemon(id).subscribe({
        next: (res) => {
          this.pokemon = res;
          this._title.setTitle('Pokemon - ' + this.firstUpperCase(res.name));
          this._sharedService.emitChange({ type: res.types[0].type.name });
        },
        error: () => {
          this.message = 'The pokemon does not exists';
          setTimeout(() => {
            this._router.navigate(['/']);
          }, 1500);
        },
      });
    });
  }

  ngOnDestroy(): void {
    this._sharedService.emitChange({ type: null });
  }

  firstUpperCase(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
