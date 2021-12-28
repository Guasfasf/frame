<template>
  <div id="boxThree"></div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'boxThree',
  data () {
    return {
      // 场景对象
      scene: null,
      // 相机
      camera: null,
      // 渲染器对象
      renderer: null,
      // 对象
      cube: null
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // 创建场景对象Scene
      this.scene = new THREE.Scene()
      // 相机设置
      // 第一个参数为俯角度
      // 第二个为相机可视化范围的长宽比
      // 第三个参数为相机离物体的最近距离
      // 第四个参数为相机离物体的最远距离
      this.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000)
      // 创建渲染器对象
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      var boxThree = document.getElementById('boxThree')
      boxThree.appendChild(this.renderer.domElement)

      // 盒子 正方体
      var geometry = new THREE.BoxGeometry(10, 10, 40)
      var material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
      this.cube = new THREE.Mesh(geometry, material)
      this.scene.add(this.cube)

      // 半球几何
      var sphereGeom = new THREE.SphereGeometry(40, 140, 140, 0, Math.PI * 2, 0, Math.PI)
      // 球体材质
      // 一个颜色为红色，开启透明度，透明度为0.5，双面渲染的一个半球
      var redMaterial = new THREE.MeshLambertMaterial({color: 0xff00010, transparent: true, opacity: 0.5, side: THREE.DoubleSide})
      var sphere = new THREE.Mesh(sphereGeom, redMaterial)
      // sphere.scale.multiplyScalar(1.07)//等比例放大

      this.scene.add(sphere)
      // 模拟光线照射
      var directionalLight = new THREE.DirectionalLight(0xffffff, 100)
      directionalLight.position.set(0, 1000, 0)
      this.scene.add(directionalLight)

      // 相机位置
      this.camera.position.set(0, 0, 400)
      this.animate()
    },
    animate () {
      requestAnimationFrame(this.animate)
      // 旋转
      this.cube.rotation.x += 0.01
      this.cube.rotation.y += 0.01
      // sphere.rotation.x += 0.01
      // sphere.rotation.y += 0.01
      // 位移
      // sphere.position.x += 0.1
      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style scoped>
body { margin: 0; }
canvas { width: 100%; height: 100% }
</style>
