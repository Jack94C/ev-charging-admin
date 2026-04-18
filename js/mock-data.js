// 后台统计系统模拟数据

// 24小时使用分布数据
const hourlyUsageData = {
    hours: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
    usage: [12, 8, 5, 3, 2, 5, 15, 35, 45, 30, 25, 30, 40, 35, 30, 25, 30, 45, 60, 55, 45, 35, 25, 15]
};

// 区域使用数据
const regionUsageData = [
    { name: '朝阳区', value: 350 },
    { name: '海淀区', value: 320 },
    { name: '东城区', value: 180 },
    { name: '西城区', value: 150 },
    { name: '丰台区', value: 220 },
    { name: '石景山区', value: 120 },
    { name: '门头沟区', value: 80 },
    { name: '房山区', value: 100 },
    { name: '通州区', value: 180 },
    { name: '顺义区', value: 150 },
    { name: '昌平区', value: 160 },
    { name: '大兴区', value: 140 },
    { name: '怀柔区', value: 90 },
    { name: '平谷区', value: 70 },
    { name: '密云区', value: 60 },
    { name: '延庆区', value: 50 }
];

// 充电桩使用率排名
const stationUsageData = [
    { name: '国家电网充电站(怀柔区长哨营政府)', usage: 95 },
    { name: '国家电网汽车充电站(北京市怀柔区喇叭沟原始森林风景区)', usage: 88 },
    { name: '国家电网汽车充电站(北京市怀柔区中榆店村)', usage: 82 },
    { name: '国家电网汽车充电站(北京市怀柔区汤河口)', usage: 75 },
    { name: '特来电汽车充电站(特来电北京大石窑农家院充电站)', usage: 70 },
    { name: '国家电网汽车充电站(北京市怀柔区宝山镇文化活动中心)', usage: 65 },
    { name: '汽车充电站(亚楠民宿共享充电站)', usage: 60 },
    { name: '国家电网汽车充电站(北京市怀柔区喇叭沟门白桦林景区)', usage: 55 }
];

// 月度充电量趋势
const monthlyTrendData = {
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    energy: [2100, 2300, 2500, 2800, 3100, 3500, 3800, 4200, 3900, 3600, 3200, 2800]
};

// 用户增长数据
const userGrowthData = {
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    users: [120, 150, 180, 220, 260, 310, 360, 410, 450, 480, 520, 560]
};

// 充电时长分布
const durationDistributionData = [
    { name: '0-30分钟', value: 25 },
    { name: '30-60分钟', value: 45 },
    { name: '60-90分钟', value: 20 },
    { name: '90分钟以上', value: 10 }
];

// 导出数据
const exportData = {
    hourlyUsageData,
    regionUsageData,
    stationUsageData,
    monthlyTrendData,
    userGrowthData,
    durationDistributionData
};
