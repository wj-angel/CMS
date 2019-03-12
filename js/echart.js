// <!--echarts.js-->
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init($(".pull-right")[0]);

// 指定图表的配置项和数据
var option = {
    title: {
        text: ''
    },
    tooltip: {
        position: function (point, params, dom, rect, size) {
            // 固定在顶部
            return [point[0], '30%'];
        }
    },
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["","","","","",""],
        show:false
    },
    yAxis: {
        show:false,
    },
    series: [{
        name: '',
        type: 'bar',
        data: [5,6,7,2,1,4,6,8,10,14],
    }],
    barCategoryGap:"1",

};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

//tile section
let  myChart1 = echarts.init($("#statistics-chart")[0]);
var chart1 ={
    title: {
        text: ''
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '10%',
        containLabel: true
    },
    xAxis : [
        {
            axisLine:{lineStyle:{color:"#fff",}},
            type : 'category',
            boundaryGap : false,
            data : ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
        }
    ],
    yAxis : [
        {
            color:"#fff",
            type : 'value'
        }
    ],
    series : [
        {
            name:'Visits',
            type:'line',
            stack: '总量',
            areaStyle: {},
            color:'rgba(255,255,255,.4)',
            data:[463, 578, 327, 984, 1268, 1684, 1425,1233,1354,1200,1260,1300]
        },
        {
            name:'Salse',
            type:'line',
            stack: '总量',
            color:'rgba(255,255,255,0.9)',
            label: {
                normal: {
                    show: false,
                    position: 'top'
                }
            },
            // areaStyle: {normal: {}},
            data:[715, 985, 1525, 1254, 1861, 2621, 1987,2136,2363,2851,1546,2541]
        }
    ]
};
myChart1.setOption(chart1);
offAndremove($(".remove"),"section");
function offAndremove($nowEl,prtEl){
    $nowEl.click(function () {
        $(this).parents(prtEl).fadeOut();
    })
}


//      sct 2  饼形图  #browser-usage
let myChart2 = echarts.init($("#browser-usage")[0]);
let chart2 = {
    title : {
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b}<br/>{c}%",
        // formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        // type: 'scroll',
        // orient: 'vertical',
        // right: 10,
        // top: 20,
        // bottom: 20,
        data:[]
    },
    series : [
        {
            name: '',
            type: 'pie',
            radius :['60%', '90%'],
            center: ['50%', '50%'],
            label: {
                normal: {
                    show: true,
                    position: 'center',
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold',
                    }
                }
            },
            data:[
                {value:25, name:'Chrome'},
                {value:25, name:'Other'},
                {value:20, name:'Safari'},
                {value:15, name:'Firefox'},
                {value:10, name:'Internet Explorer'},
                {value:5, name:'Opera'}
            ]
        }
    ]
};
myChart2.setOption(chart2);

//      sct 1 内存图
var myChart3 = echarts.init($("#serverload-chart")[0]);
var xData = [];
var yData = [];
let yData2=[];
for (var i = 60; i >= 0; i--) {
    xData.push(i);
    let y = Math.random()*10+30;
    let y2 = Math.random()*20+65;
    yData.push(y);
    yData2.push(y2);

}
var chart3 = {
    animation: false,
    title: {
        // text: 'CPU占用率',
        // x: 'left'
    },
    tooltip : {
        trigger: 'axis',
    },
    grid: {
        left: '-1%',
        right: '0%',
        bottom: '0%',
        top:'-1%',
        containLabel: false
    },
    xAxis: [{
        show:false,
        name: '秒',
        type: 'category',
        boundaryGap: true,
        data: xData
    }],
    yAxis: {
        show:false,
        name: '占用率',
        type: 'value',
        // max: 100,
        splitLine: {
            show: false
        }
    },
    series:[{
        type: 'line',
        name:'mailserver',
        symbol: 'none',
        smooth: true,
        itemStyle: {
            normal: {
                color: "#fff"
            }
        },
        lineStyle: {
            normal: {
                color: "#fff"
            }
        },
        areaStyle: {
            normal: {
                color: "#fff",
                opacity:1
            }
        },
        data: yData2
    },{
        type: 'line',
        symbol: 'none',
        name:'fileserver',
        tooltip: {
            trigger: 'axis'
            // formatter: '{a} <br/>{b}日: {c}元'
        },
        smooth: true,
        itemStyle: {
            normal: {
                color: "#000"
            }
        },
        lineStyle: {
            normal: {
                color: "#000"
            }
        },
        areaStyle: {
            normal: {
                color: "#000",
                opacity: 0.8
            }
        },
        data: yData
    }]
};
myChart3.setOption(chart3);
setInterval(function go() {
    let y = Math.random()*10+30;
    let y2 = Math.random()*20+65;
    yData.push(y);
    yData.shift();
    yData2.push(y2);
    yData2.shift();
    var option = myChart3.getOption();
    option.series[0].data = yData2;
    option.series[1].data=yData;
    myChart3.setOption(option);
}, 1000);