import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [SharedService],
})
export class MainComponent implements OnInit {
  public type: any;

  constructor(private _sharedService: SharedService) {
    this.type = '';
    _sharedService.changeEmitted$.subscribe((type) => {
      this.type = type.type;
    });
  }

  ngOnInit(): void {}
}
