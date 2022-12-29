import { Component, OnInit } from '@angular/core';
import { TogglerService } from 'src/app/services/toggler.service';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.scss']
})
export class TogglerComponent implements OnInit {
  shouldShow: boolean = true;

  constructor(private togglerService: TogglerService) { }

  ngOnInit(): void {
    this.togglerService.setVisibility(this.shouldShow);
  }

onCheckboxChange() { 
  this.togglerService.setVisibility(this.shouldShow);
 }
  

}
