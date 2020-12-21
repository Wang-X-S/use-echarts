<template>
    <div>在vue 中使用 echarts
    <vue-echarts v-bind:option="option" :loading="loading"></vue-echarts>
        <button @click="loadMore">加载更多</button>
    </div>
</template>

<script>
    import VueEcharts from './vue-echarts'
    export default {
      data(){
        return {
          loading:false,
          option:{
            title: {
              text: 'ECharts 入门示例',
              right:0,
            },
            tooltip: {
              show:true
            },
            legend: {
              data:['销量']
            },
            xAxis: {
              data: ['01-01','01-02']
            },
            yAxis: {
              type:'value'
            },
            series: [{
              lineStyle:{
                color: 'green'
              },
              itemStyle:{
                borderWidth:30
              },
              name: '销量',
              type: 'line',
              data: [1,2]
            }]
          },
          }
        },
      components:{VueEcharts},
      methods:{
        loadMore(){
          this.loading = true
          setTimeout(()=>{
            this.loading = false
            this.option={
              xAxis: {
                data: ['01-01','01-02','01-03']
              },
              series: [{
                data:[1,2,3]
              }],
            }
          },3000)

        }
      }
      }
</script>