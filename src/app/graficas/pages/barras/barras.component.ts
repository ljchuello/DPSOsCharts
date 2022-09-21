import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {ChartData} from 'chart.js';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartData: ChartData = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        type: 'line'
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        type: 'bar',
        backgroundColor: 'rgba(255, 255, 0, 0.8)',
        hoverBackgroundColor: 'rgba(255, 0, 0, 0.2)',
      }
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
    console.log(JSON.stringify(this.barChartData))
  }

}
