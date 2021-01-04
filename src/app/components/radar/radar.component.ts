import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {
// Radar
public radarChartOptions: RadialChartOptions = {
  responsive: true,
};
public radarChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

public radarChartData: ChartDataSets[] = [
  { data: [65, 59, 90, 81, 56, 55, 40], label: 'Persona 1' },
  { data: [28, 48, 40, 19, 96, 27, 100], label: 'Persona 2' }
];
public radarChartType: ChartType = 'radar';
  constructor() { }

  ngOnInit(): void {
  }

   // events
   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
