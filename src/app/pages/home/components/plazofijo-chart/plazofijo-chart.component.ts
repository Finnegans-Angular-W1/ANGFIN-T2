import { getDarkMode } from 'src/app/core/state/states/darkmodeState/darkmode.selectors';
import { AppState } from 'src/app/core/state/app.state';
import { Store } from '@ngrx/store';
import { Observable, of, BehaviorSubject, switchMap } from 'rxjs';
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

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    let inversion:any;

    this.amountInversion
    .pipe(
      switchMap((inversionParam)=>{
        inversion = inversionParam;
        return this.store.select(getDarkMode);
      })
    )
    .subscribe((darkMode) => {
      const plus = ( this.plusMesesAcumulados);
      this.mesesInvertidos = inversion.plazodias;
      this.initData(inversion, plus);

      //TODO: Cambiar el color de la linea de acuerdo al modo oscuro , terniario:
      // darkMode ? 'negro' : 'blanco'

      this.options.next({
        color: darkMode ? ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'] : ['#4ECDC4', '#F7FFF7', '#F78888', '#7E5E60', '#9D8189'],
        title: {
          text: ''
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

    })

    this.options.next({
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
          text: ''
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

  initData(inversion:any, plus:number){
    this.chartData = {
      30: [inversion.inversionInicial + inversion.inversionInicial * 0.07, inversion.inversionInicial + inversion.inversionInicial * 0.07, inversion.inversionInicial + inversion.inversionInicial * 0.07 ,inversion.inversionInicial + inversion.inversionInicial * 0.07, inversion.inversionInicial + inversion.inversionInicial * 0.07],
      60: [inversion.inversionInicial + inversion.inversionInicial * 0.07 + plus * 2, inversion.inversionInicial + (inversion.inversionInicial * 2 * 0.07) + plus * 2, inversion.inversionInicial + (inversion.inversionInicial * 2 * 0.07) + plus * 2, inversion.inversionInicial + (inversion.inversionInicial * 2 * 0.07) + plus * 2, inversion.inversionInicial + (inversion.inversionInicial * 2 * 0.07) + plus * 2],
      90: [inversion.inversionInicial + inversion.inversionInicial * 0.07 + plus * 3, inversion.inversionInicial + (inversion.inversionInicial * 2 * 0.07) + plus * 3, inversion.inversionInicial + (inversion.inversionInicial * 3 * 0.07) + plus * 3, inversion.inversionInicial + (inversion.inversionInicial * 3 * 0.07) + plus * 3, inversion.inversionInicial + (inversion.inversionInicial * 3 * 0.07) + plus * 3],
      120: [inversion.inversionInicial + inversion.inversionInicial * 0.07 + plus * 4, inversion.inversionInicial + (inversion.inversionInicial * 2 * 0.07) + plus * 4, inversion.inversionInicial + (inversion.inversionInicial * 3 * 0.07) + plus * 4,  inversion.inversionInicial + (inversion.inversionInicial * 4 * 0.07) + plus * 4, inversion.inversionInicial + (inversion.inversionInicial * 4 * 0.07) + plus * 4],
      150: [inversion.inversionInicial + inversion.inversionInicial * 0.07 + plus * 5, inversion.inversionInicial + (inversion.inversionInicial * 2 * 0.07) + plus * 5, inversion.inversionInicial + (inversion.inversionInicial * 3 * 0.07) + plus * 5,  inversion.inversionInicial + (inversion.inversionInicial * 4 * 0.07) + plus * 5, inversion.inversionInicial + (inversion.inversionInicial * 5 * 0.07) + plus * 5]
    }
  }

}
