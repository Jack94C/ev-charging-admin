// 用户分析页面脚本

document.addEventListener('DOMContentLoaded', function() {
    // 初始化图表
    initUserGrowthChart();
    initDurationDistributionChart();
    initUsageFrequencyChart();
    initUserTypeChart();
    
    // 绑定事件
    document.getElementById('dateRange').addEventListener('change', updateData);
    document.querySelector('.btn-primary').addEventListener('click', refreshData);
});

// 初始化用户增长趋势图表
function initUserGrowthChart() {
    const chart = echarts.init(document.getElementById('userGrowthChart'));
    
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
            data: userGrowthData.months
        },
        yAxis: {
            type: 'value',
            name: '用户数'
        },
        series: [{
            name: '用户数',
            type: 'line',
            data: userGrowthData.users,
            lineStyle: {
                color: '#667eea'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(102, 126, 234, 0.5)' },
                    { offset: 1, color: 'rgba(102, 126, 234, 0.1)' }
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

// 初始化充电时长分布图表
function initDurationDistributionChart() {
    const chart = echarts.init(document.getElementById('durationDistributionChart'));
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c}%'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [{
            name: '充电时长分布',
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            data: durationDistributionData,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            }
        }]
    };
    
    chart.setOption(option);
    
    // 响应式
    window.addEventListener('resize', function() {
        chart.resize();
    });
}

// 初始化用户使用频率图表
function initUsageFrequencyChart() {
    const chart = echarts.init(document.getElementById('usageFrequencyChart'));
    
    const data = [
        { name: '1次/月', value: 30 },
        { name: '2-3次/月', value: 45 },
        { name: '4-5次/月', value: 15 },
        { name: '6次以上/月', value: 10 }
    ];
    
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
            type: 'category',
            data: data.map(item => item.name)
        },
        yAxis: {
            type: 'value',
            name: '用户数'
        },
        series: [{
            name: '用户数',
            type: 'bar',
            data: data.map(item => item.value),
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

// 初始化用户类型分布图表
function initUserTypeChart() {
    const chart = echarts.init(document.getElementById('userTypeChart'));
    
    const data = [
        { name: '个人用户', value: 85 },
        { name: '企业用户', value: 15 }
    ];
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c}%'
        },
        series: [{
            name: '用户类型',
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
                    fontSize: '18',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: data
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
        initUserGrowthChart();
        initDurationDistributionChart();
        initUsageFrequencyChart();
        initUserTypeChart();
    }, 500);
}
