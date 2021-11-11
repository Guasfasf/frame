<template>
    <div>
      <svg width="500px" height="425" id="s1" viewBox="0 0 500 425">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#A91B1E;stop-opacity:0.8" />
            <stop offset="100%" style="stop-color:#4CEF3A;stop-opacity:0.4" />
          </linearGradient>
        </defs>

        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:white;stop-opacity:0.1" />
            <stop offset="100%" style="stop-color:white;stop-opacity:1" />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#efd11c;stop-opacity:0.4" />
            <stop offset="100%" style="stop-color:#1a49a9;stop-opacity:0.8" />
          </linearGradient>
        </defs>
      </svg>

      <iframe :src="mapSrc" width="500" height="425" frameborder="no"></iframe>
    </div>
</template>
<script>
import test from './js/index'
export default {
  name: 'testmap',
  data () {
    return {
      // 各省市在地图上的坐标
      province_config: [
        {name: 'xinjiang', nameCH: '新疆', location: {x: '110', y: '170'}},
        {name: 'Tibet', nameCH: '西藏', location: {x: '130', y: '270'}},
        {name: 'qinghai', nameCH: '青海', location: {x: '200', y: '236'}},
        {name: 'jilin', nameCH: '吉林', location: {x: '454', y: '129'}},
        {name: 'liaoning', nameCH: '辽宁', location: {x: '430', y: '154'}},
        {name: 'hebei', nameCH: '河北', location: {x: '370', y: '197'}},
        {name: 'shandong', nameCH: '山东', location: {x: '394', y: '222'}},
        {name: 'jiangsu', nameCH: '江苏', location: {x: '420', y: '248'}},
        {name: 'zhejiang', nameCH: '浙江', location: {x: '430', y: '292'}},
        {name: 'anhui', nameCH: '安徽', location: {x: '400', y: '274'}},
        {name: 'henan', nameCH: '河南', location: {x: '359', y: '251'}},
        {name: 'shanxi', nameCH: '山西', location: {x: '345', y: '219'}},
        {name: 'shaanxi', nameCH: '陕西', location: {x: '318', y: '255'}},
        {name: 'gansu', nameCH: '甘肃', location: {x: '210', y: '182'}},
        {name: 'hubei', nameCH: '湖北', location: {x: '354', y: '280'}},
        {name: 'jiangxi', nameCH: '江西', location: {x: '388', y: '317'}},
        {name: 'fujian', nameCH: '福建', location: {x: '414', y: '325'}},
        {name: 'hunan', nameCH: '湖南', location: {x: '349', y: '320'}},
        {name: 'guizhou', nameCH: '贵州', location: {x: '300', y: '334'}},
        {name: 'sichuan', nameCH: '四川', location: {x: '270', y: '294'}},
        {name: 'yunnan', nameCH: '云南', location: {x: '250', y: '358'}},
        {name: 'hainan', nameCH: '海南', location: {x: '338', y: '415'}},
        {name: 'shanghai', nameCH: '上海', location: {x: '433', y: '262'}},
        {name: 'chongqing', nameCH: '重庆', location: {x: '309', y: '298'}},
        {name: 'tianjin', nameCH: '天津', location: {x: '387', y: '185'}},
        {name: 'beijing', nameCH: '北京', location: {x: '377', y: '175'}},
        {name: 'ningxia', nameCH: '宁夏', location: {x: '290', y: '215'}},
        {name: 'neimongol', nameCH: '内蒙古', location: {x: '320', y: '175'}},
        {name: 'guangxi', nameCH: '广西', location: {x: '325', y: '371'}},
        {name: 'guangdong', nameCH: '广东', location: {x: '372', y: '360'}},
        {name: 'hongkong', nameCH: '香港', location: {x: '383', y: '372'}},
        {name: 'taiwan', nameCH: '台湾', location: {x: '448', y: '351'}},
        {name: 'macau', nameCH: '澳门', location: {x: '350', y: '387'}},
        {name: 'heilongjiang', nameCH: '黑龙江', location: {x: '456', y: '80'}},
        {name: '1', nameCH: '1', location: {x: '10', y: '10'}}
      ],
      mapSrc: require('./chinaMap.svg'),
      imgSrc: require('./img/arrows.png')
    }
  },
  mounted () {
    const province = this.province_config
    test.showPathFlowInMap(province[1], province[2])
  }
}
</script>

<style scoped>
  iframe{
    background-color: #3A3A3A;
  }
  #s1{position: absolute;
    top:0;
    left:0;
  }
</style>
