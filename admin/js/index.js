// 后台统计系统主页面脚本

document.addEventListener('DOMContentLoaded', function() {
    // 初始化图表
    initUsageHourChart();
    initRegionChart();
    initStationUsageChart();
    initMonthlyTrendChart();
    
    // 绑定事件
    document.getElementById('dateRange').addEventListener('change', updateData);
    document.querySelector('.btn-primary').addEventListener('click', refreshData);
});

// 初始化24小时使用分布图表
function initUsageHourChart() {
    const chart = echarts.init(document.getElementById('usageHourChart'));
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: hourlyUsageData.hours,
            axisLabel: {
                rotate: 45
            }
        },
        yAxis: {
            type: 'value',
            name: '使用次数'
        },
        series: [{
            name: '使用次数',
            type: 'line',
            stack: 'Total',
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(102, 126, 234, 0.5)' },
                    { offset: 1, color: 'rgba(102, 126, 234, 0.1)' }
                ])
            },
            lineStyle: {
                color: '#667eea'
            },
            data: hourlyUsageData.usage
        }]
    };
    
    chart.setOption(option);
    
    // 响应式
    window.addEventListener('resize', function() {
        chart.resize();
    });
}

// 初始化区域使用热力图
function initRegionChart() {
    const chart = echarts.init(document.getElementById('regionChart'));
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} 次'
        },
        visualMap: {
            min: 0,
            max: 400,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],
            calculable: true,
            inRange: {
                color: ['#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00acc1', '#0097a7', '#00838f', '#006064']
            }
        },
        series: [{
            name: '使用次数',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '14',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: regionUsageData
        }]
    };
    
    chart.setOption(option);
    
    // 响应式
    window.addEventListener('resize', function() {
        chart.resize();
    });
}

// 初始化充电桩使用率排名图表
function initStationUsageChart() {
    const chart = echarts.init(document.getElementById('stationUsageChart'));
    
    // 提取名称和使用率
    const names = stationUsageData.map(item => item.name);
    const usage = stationUsageData.map(item => item.usage);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            name: '使用率 (%)'
        },
        yAxis: {
            type: 'category',
            data: names,
            axisLabel: {
                interval: 0,
                rotate: 45
            }
        },
        series: [{
            name: '使用率',
            type: 'bar',
            data: usage,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: '#667eea' },
                    { offset: 1, color: '#764ba2' }
                ])
            }
        }]
    };
    
    chart.setOption(option);
    
    // 响应式
    window.addEventListener('resize', function() {
        chart.resize();
    });
}

// 初始化月度充电量趋势图表
function initMonthlyTrendChart() {
    const chart = echarts.init(document.getElementById('monthlyTrendChart'));
    
    const option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: monthlyTrendData.months
        },
        yAxis: {
            type: 'value',
            name: '充电量 (kWh)'
        },
        series: [{
            name: '充电量',
            type: 'bar',
            data: monthlyTrendData.energy,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#667eea' },
                    { offset: 1, color: '#764ba2' }
                ])
            }
        }]
    };
    
    chart.setOption(option);
    
    // 响应式
    window.addEventListener('resize', function() {
        chart.resize();
    });
}

// 更新数据
function updateData() {
    const dateRange = document.getElementById('dateRange').value;
    // 这里可以根据选择的时间范围更新数据
    console.log('更新数据，时间范围：', dateRange);
    // 模拟数据更新
    refreshData();
}

// 刷新数据
function refreshData() {
    // 模拟数据刷新
    console.log('刷新数据');
    // 可以在这里添加加载动画
    // 模拟数据加载延迟
    setTimeout(function() {
        // 重新初始化图表
        initUsageHourChart();
        initRegionChart();
        initStationUsageChart();
        initMonthlyTrendChart();
    }, 500);
}
