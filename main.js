var echarts = require('echarts')

const width = document.documentElement.clientWidth
main.style.width = `${width}px`
main.style.height = `${width * 1.2}px`

var myChart = echarts.init(document.getElementById('main'),'dark');

var loadMoreButton = document.getElementById('loadMore')

let n = 0
let m = 0
function createKey(){
  n+=1
  return `01-${n}`
}
function createValue(){
  m+=1
  return m
}



let xData = [createKey(),createKey(),createKey(),createKey(),createKey(),createKey()]
let values = [createValue(),createValue(),createValue(),createValue(),createValue(),createValue()]
// 使用刚指定的配置项和数据显示图表。
myChart.setOption({
  baseOption:{
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
      data: xData
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
      data: values
    }]
  },
  media: [
    {
      query: {
        maxWidth:500
        //最大宽度为500，小于就当手机算
      },
      option:{
        series: [{
          lineStyle:{
            color: 'red'
          },
        }]
      }
    }
  ]


});

loadMoreButton.addEventListener('click',()=>{

  xData = [...xData,createKey()]
  values = [...values,createValue()]
  myChart.setOption({

    xAxis:{
      data: xData
    },
    series: [{
      data: values
    }]
  })
})
myChart.on('click',(e)=>{
  console.log(e)
  console.log(e.dataIndex);
  console.log(e.data);

})