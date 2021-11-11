<template>
  <div>
    <div id="myCharts" style="width: 400px;height: 400px;"></div>
  </div>
</template>

<script>

export default {
  name: 'test-echarts',
  data () {
    return {
      labelData: [],
      title: 90
    }
  },
  mounted () {
    const id = document.getElementById('myCharts')
    const myChart = this.$echarts.init(id)
    myChart.setOption(this.options)
  },
  computed: {
    options () {
      var labelData = this.labelData
      var title = this.title
      for (var i = 0; i < 150; ++i) {
        labelData.push({
          value: 1,
          itemStyle: {
            normal: {
              color: '#5467df'
            }
          }
        })
      }
      for (let i = 0; i < labelData.length; ++i) {
        if (i % 2 === 1) {
          labelData[i].itemStyle = {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                  offset: 0,
                  color: '#0ff'
                },
                {
                  offset: 1,
                  color: '#5467df'
                }
                ]
              )
            }
          }
        } else {
          labelData[i].itemStyle = {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                  offset: 0,
                  color: 'transparent'
                },
                {
                  offset: 1,
                  color: 'transparent'
                }
                ]
              )
            }
          }
        }
      }
      const obj = {
        backgroundColor: '#180f2a',
        title: [{
          text: title,
          x: '50%',
          y: '37%',
          textAlign: 'center',
          textStyle: {
            fontSize: '70',
            fontWeight: '100',
            color: '#0FF',
            textAlign: 'center'
          }
        }],

        polar: {
          radius: ['56%', '52%'],
          center: ['50%', '50%']
        },
        angleAxis: {
          max: 100,
          startAngle: 340,
          clockwise: true,
          show: false
        },
        radiusAxis: {
          type: 'category',
          show: true,
          startAngle: 190,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false

          },
          axisTick: {
            show: false
          }
        },
        series: [{
          name: '',
          type: 'bar',
          roundCap: true,
          barWidth: 60,
          showBackground: true,
          backgroundStyle: {
            color: '#2e2856'
          },
          data: [title],
          coordinateSystem: 'polar',
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#585fe1'
              }, {
                offset: 1,
                color: '#0ff'
              }])
            }
          }
        },
        {
          hoverAnimation: false,
          type: 'pie',
          z: 2,
          data: labelData,
          radius: ['58%', '64%'],
          itemStyle: {
            normal: {
              borderColor: '#180f2a',
              borderWidth: 4
            }
          },
          label: {
            normal: {
              position: 'inside',
              show: false
            }
          }
        },
        {
          type: 'pie',
          z: 1,
          data: [100],
          radius: ['66%', '64%'],
          color: 'green',
          label: {
            normal: {
              show: false
            }
          }
        }

        ]
      }
      return obj
    }
  }
}
</script>

<style scoped>

</style>
