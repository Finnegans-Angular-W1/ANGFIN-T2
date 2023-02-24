import { Observable, of } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption, graphic } from 'echarts';

const mockData = [
  ['Income', 'Life Expectancy', 'Population', 'Country', 'Year'],
  [10000, 80, 1000000, 'Argentina', 2020],
  [20000, 85, 2000000, 'Brasil', 2020],
  [30000, 90, 3000000, 'Colombia', 2020],
  [40000, 95, 4000000, 'Ecuador', 2020],
  [50000, 100, 5000000, 'Peru', 2020],
];

@Component({
  selector: 'app-plazofijo-chart',
  templateUrl: './plazofijo-chart.component.html',
  styleUrls: ['./plazofijo-chart.component.scss']
})
export class PlazofijoChartComponent implements OnInit {

  options!: Observable<any>;

  @Input() amountInversion:Observable<number> = of(0);
  chartData: any;

  constructor() { }

  ngOnInit(): void {
    this.options = of( {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
          text: 'Proyeccion de la Inversion'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['30 dias', '60 dias', '90 dias', '120 dias', '150 dias']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['1 mes', '2 meses', '3 meses', '4 meses', '5 meses']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '30 dias',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(128, 255, 165)'
                },
                {
                  offset: 1,
                  color: 'rgb(1, 191, 236)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [140, 232, 101, 264, 90, 340, 250]
          },
          {
            name: '60 dias',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(0, 221, 255)'
                },
                {
                  offset: 1,
                  color: 'rgb(77, 119, 255)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 282, 111, 234, 220, 340, 310]
          },
          {
            name: '90 dias',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(55, 162, 255)'
                },
                {
                  offset: 1,
                  color: 'rgb(116, 21, 219)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [320, 132, 201, 334, 190, 130, 220]
          },
          {
            name: '120 dias',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 0, 135)'
                },
                {
                  offset: 1,
                  color: 'rgb(135, 0, 157)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 402, 231, 134, 190, 230, 120]
          },
          {
            name: '150 dias',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {
              opacity: 0.8,
              color: new graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 191, 0)'
                },
                {
                  offset: 1,
                  color: 'rgb(224, 62, 76)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 302, 181, 234, 210, 290, 150]
          }
        ]
      });
  }

}


// this.http.get(ROOT_PATH + '/data/asset/data/life-expectancy-table.json').subscribe((data: any) => {
//   this.option = {
//     grid3D: {},
//     tooltip: {},
//     xAxis3D: {
//       type: 'category'
//     },
//     yAxis3D: {
//       type: 'category'
//     },
//     zAxis3D: {},
//     visualMap: {
//       max: 1e8,
//       dimension: 'Population'
//     },
//     dataset: {
//       dimensions: [
//         'Income',
//         'Life Expectancy',
//         'Population',
//         'Country',
//         { name: 'Year', type: 'ordinal' }
//       ],
//       source: data
//     },
//     series: [
//       {
//         type: 'bar3D',
//         // symbolSize: symbolSize,
//         shading: 'lambert',
//         encode: {
//           x: 'Year',
//           y: 'Country',
//           z: 'Life Expectancy',
//           tooltip: [0, 1, 2, 3, 4]
//         }
//       }
//     ]
//   };
//   this.loading = false;
// });