import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, MultiDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.scss']
})
export class DonaComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = ['Validadas', 'Rechazadas', 'Reprogramadas'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: ['rgba(29, 190, 237,0.8)', 'red', 'yellow'],
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  public doughnutChartType: ChartType = 'doughnut';

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
