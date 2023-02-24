import { Observable, of, BehaviorSubject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption, graphic } from 'echarts';

@Component({
  selector: 'app-plazofijo-chart',
  templateUrl: './plazofijo-chart.component.html',
  styleUrls: ['./plazofijo-chart.component.scss']
})
export class PlazofijoChartComponent implements OnInit {

  options: BehaviorSubject<any> = new BehaviorSubject({});


  @Input() amountInversion:Observable<any> = of({});
  chartData: any;


  mesesInvertidos: number = 0;
  plusMesesAcumulados:number = 0.0037;

  constructor() { }

  // this.chartData = {
  //   30: [inversion.inversionInicial + inversion.inversionInicial * 0.07, inversion.inversionInicial + (inversion.inversionInicial * 2 * 0.07), inversion.inversionInicial + (inversion.inversionInicial * 0.07 * 3),  inversion.inversionInicial +  (inversion.inversionInicial * 0.07 * 4), inversion.inversionInicial +  (inversion.inversionInicial * 0.07 * 5)],
  //   60: [inversion.inversionInicial + inversion.inversionInicial * 0.07 + plus, inversion.inversionInicial + (inversion.inversionInicial * 2 * 0.07) + plus, inversion.inversionInicial + (inversion.inversionInicial * 3 * 0.07) + plus,  inversion.inversionInicial + (inversion.inversionInicial * 4 * 0.07) + plus, inversion.inversionInicial + (inversion.inversionInicial * 5 * 0.07) + plus],
  //   90: [inversion.inversionInicial + inversion.inversionInicial * 0.07 + plus, inversion.inversionInicial + (inversion.inversionInicial * 2 * 0.07) + plus, inversion.inversionInicial + (inversion.inversionInicial * 3 * 0.07) + plus,  inversion.inversionInicial + (inversion.inversionInicial * 4 * 0.07) + plus, inversion.inversionInicial + (inversion.inversionInicial * 5 * 0.07) + plus],
  //   120: [inversion.inversionInicial + inversion.inversionInicial * 0.07 + plus, inversion.inversionInicial + (inversion.inversionInicial * 2 * 0.07) + plus, inversion.inversionInicial + (inversion.inversionInicial * 3 * 0.07) + plus,  inversion.inversionInicial + (inversion.inversionInicial * 4 * 0.07) + plus, inversion.inversionInicial + (inversion.inversionInicial * 5 * 0.07) + plus],
  //   150: [inversion.inversionInicial + inversion.inversionInicial * 0.07 + plus, inversion.inversionInicial + (inversion.inversionInicial * 2 * 0.07) + plus, inversion.inversionInicial + (inversion.inversionInicial * 3 * 0.07) + plus,  inversion.inversionInicial + (inversion.inversionInicial * 4 * 0.07) + plus, inversion.inversionInicial + (inversion.inversionInicial * 5 * 0.07) + plus]
  // }

  ngOnInit(): void {
    this.amountInversion
    .subscribe((inversion) => {
      const plus = ( this.plusMesesAcumulados);
      this.mesesInvertidos = inversion.plazodias;
      this.chartData = {
        30: [inversion.inversionInicial + inversion.inversionInicial * 0.07, inversion.inversionInicial + inversion.inversionInicial * 0.07, inversion.inversionInicial + inversion.inversionInicial * 0.07 ,inversion.inversionInicial + inversion.inversionInicial * 0.07, inversion.inversionInicial + inversion.inversionInicial * 0.07],
        60: [inversion.inversionInicial + inversion.inversionInicial * 0.07 + plus * 2, inversion.inversionInicial + (inversion.inversionInicial * 2 * 0.07) + plus * 2, inversion.inversionInicial + (inversion.inversionInicial * 2 * 0.07) + plus * 2, inversion.inversionInicial + (inversion.inversionInicial * 2 * 0.07) + plus * 2, inversion.inversionInicial + (inversion.inversionInicial * 2 * 0.07) + plus * 2],
        90: [inversion.inversionInicial + inversion.inversionInicial * 0.07 + plus * 3, inversion.inversionInicial + (inversion.inversionInicial * 2 * 0.07) + plus * 3, inversion.inversionInicial + (inversion.inversionInicial * 3 * 0.07) + plus * 3, inversion.inversionInicial + (inversion.inversionInicial * 3 * 0.07) + plus * 3, inversion.inversionInicial + (inversion.inversionInicial * 3 * 0.07) + plus * 3],
        120: [inversion.inversionInicial + inversion.inversionInicial * 0.07 + plus * 4, inversion.inversionInicial + (inversion.inversionInicial * 2 * 0.07) + plus * 4, inversion.inversionInicial + (inversion.inversionInicial * 3 * 0.07) + plus * 4,  inversion.inversionInicial + (inversion.inversionInicial * 4 * 0.07) + plus * 4, inversion.inversionInicial + (inversion.inversionInicial * 4 * 0.07) + plus * 4],
        150: [inversion.inversionInicial + inversion.inversionInicial * 0.07 + plus * 5, inversion.inversionInicial + (inversion.inversionInicial * 2 * 0.07) + plus * 5, inversion.inversionInicial + (inversion.inversionInicial * 3 * 0.07) + plus * 5,  inversion.inversionInicial + (inversion.inversionInicial * 4 * 0.07) + plus * 5, inversion.inversionInicial + (inversion.inversionInicial * 5 * 0.07) + plus * 5]
      }
      this.options.next({
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
            data: this.chartData[30]
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
            data: this.chartData[60]
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
            data: this.chartData[90]
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
            data: this.chartData[120]
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
            data: this.chartData[150]
          }
        ]
      });

    }

    )

    this.options.next({
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
            data: [0, 0, 0, 0, 0]
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
            data: [0, 0, 0, 0, 0]
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
            data: [0, 0, 0, 0, 0]
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
            data: [0, 0, 0, 0, 0]
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
            data: [0, 0, 0, 0, 0]
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