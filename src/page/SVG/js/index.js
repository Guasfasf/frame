/**
 * showPathFlowInMap 在地图上描绘出 A点（from）B点（to）的路线，A点画棕色（三色）圈，B点画蓝色（双色）圈。
 * @ from Oject 类型，格式：{name:'xinjiang',nameCH:'新疆',location:{x:"110",y:"170"}} ，location是该点在地图上的坐标,路径起点（A点）
 * @ to Oject 类型，格式：{name:'xinjiang',nameCH:'新疆',location:{x:"110",y:"170"}}，locationlocation是该点在地图上的坐标,路径终点（B点）
 */

function showPathFlowInMap (from, to, s) {
  var html = document.createElementNS('http://www.w3.org/2000/svg', 'g')
  html.innerHTML += `
<circle cx="${to.location.x}" cy="${to.location.y}" r="6"  stroke="#476F8E"  stroke-width="2" fill="transparent" />
<circle cx="${to.location.x}" cy="${to.location.y}" r="2"  fill="#3C9CEF" />

<circle cx="${from.location.x}" cy="${from.location.y}" r="7" stroke="#99834C"  stroke-width="2" fill="transparent" />
<circle cx="${from.location.x}" cy="${from.location.y}" r="4" stroke="#58513C"  stroke-width="1.5" fill="transparent" />
<circle cx="${from.location.x}" cy="${from.location.y}" r="2" fill="#A97631" />
`
  // const rectX = Number(to.location.x) - 4
  // const rectY = Number(to.location.y) - 20
  document.getElementById('s1').appendChild(html)
  //   html.innerHTML +=`
  //  <rect x="${rectX}" y="${rectY}" width="40" height="30" stroke="green" stroke-width="2" fill="transparent"></rect>
  //  <text x="${to.location.x}" y="${to.location.y}" fill="red">
  //     <tspan>${to.nameCH}</tspan>
  //   </text>
  //
  //  <rect x="${from.location.x}" y="${from.location.y}" width="100" height="50" stroke="green" stroke-width="2" fill="transparent"></rect>
  //  <text x="${from.location.x}" y="${from.location.y}" fill="red">
  //     <tspan>${from.nameCH}</tspan>
  //   </text>
  //   <text>
  //     <textPath xlink:href="#route1010_200236">
  //         test loading
  //     </textPath>
  //   </text>
  // </text>
  // `;

  // <text x="${to.location.x}" y="${to.location.y}">${to.nameCH}</text>
  //
  // <rect x="${from.location.x}" y="${from.location.y}" width="100" height="50" stroke="green" stroke-width="2" fill="transparent"></rect>
  // <text x="${from.location.x}" y="${from.location.y}" fill="red">${from.nameCH}</text>
  createPath(from, to, s)
}

/**
 * createPath: showPathFlowInMap 的子函数，作用：描绘Path，添加渐变，添加箭头动态效果
 * @ from Oject 类型，格式：{name:'xinjiang',nameCH:'新疆',location:{x:"110",y:"170"}} ,location是该点在地图上的坐标,路径起点（A点）
 * @ to Oject 类型，格式：{name:'xinjiang',nameCH:'新疆',location:{x:"110",y:"170"}}，locationlocation是该点在地图上的坐标,路径终点（B点）
 * svg path A 指令参数 d="M ${from.location.x} ${from.location.y}（前两个参数起点坐标）     A${r},${r} （椭圆半径）   0 （与x轴的夹角） 0 （大弧度，小弧度选择）,1（圆弧方向，顺时针为0，逆时针为1） ${to.location.x},${to.location.y}（中点坐标）"
 */
const url = require('../img/arrows.png')

function createPath (from, to, s = 3) {
  var dur = s + 's'
  var r = Math.sqrt((Math.pow(Math.abs(from.location.x - to.location.x), 2) + Math.pow(Math.abs(from.location.y - to.location.y), 2))) * 0.9 // 算出两点间的距离，然后乘以0.8
  var linearColor = from.location.x < to.location.x ? 'grad1' : 'grad3'
  var radianOrientation = from.location.x < to.location.x ? '1' : '1' // 调整圆弧方向，这里用不上。所以都赋值为1.
  let html = document.createElementNS('http://www.w3.org/2000/svg', 'g')
  html.innerHTML += `
<path d="M${from.location.x} ${from.location.y} A${r},${r} 0 0,${radianOrientation} ${to.location.x},${to.location.y}" stroke-width="2" stroke="url(#${linearColor})" fill="transparent" id="route${from.location.x}${from.location.y}_${to.location.x}${to.location.y}"/>
<image  x="-17" y="-10.7" width="25px" xlink:href="${url}" >
   <animateMotion
          dur=${dur}
          begin="0s"
          fill="freeze"
          repeatCount="indefinite"
           rotate="auto">
           <mpath xlink:href="#route${from.location.x}${from.location.y}_${to.location.x}${to.location.y}" />
   </animateMotion>
  </image>
`
  document.getElementById('s1').appendChild(html)
}

export default {
  showPathFlowInMap
}
