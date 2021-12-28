<template>
  <div id="three-test"></div>
</template>
<script>
import * as THREE from 'three'
// import * as OrbitControls  from 'three-orbitcontrols'

export default {
  data () {
    return {
      scene: null,
      camera: null,
      mesh: null
    }
  },
  mounted () {
    this.init()
    this.render()
    // var controls = new OrbitControls(this.camera, this.renderer.domElement)
  },
  methods: {
    init () {
      this.scene = new THREE.Scene()

      var gem = new THREE.PlaneGeometry(10000, 10000)

      var texture = new THREE.TextureLoader().load('../static/img/grass.png')
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.RepeatWrapping
      texture.repeat.set(10, 10)

      var material = new THREE.MeshLambertMaterial({
        color: 0x777700,
        map: texture
      })
      var mesh = new THREE.Mesh(gem, material)

      this.scene.add(mesh)
      mesh.rotateX(-Math.PI / 2)

      var textureTree = new THREE.TextureLoader().load('../static/img/logo.png')
      for (let i = 0; i < 1000; i += 1) {
        var spriteMetrial = new THREE.SpriteMaterial({
          map: textureTree
        })
        var sprite = new THREE.Sprite(spriteMetrial)
        this.scene.add(sprite)
        sprite.scale.set(100, 100, 1) // 只需要设置x、y两个分量就可以
        var k1 = Math.random() - 0.5
        var k2 = Math.random() - 0.5
        // 设置精灵模型位置，在xoz平面上随机分布
        sprite.position.set(10000 * k1, 50, 10000 * k2)
      }
      var point = new THREE.PointLight(0xffffff)
      point.position.set(400, 200, 300)
      this.scene.add(point)
      var axesHelper = new THREE.AxesHelper(5000)
      this.scene.add(axesHelper)
      var ambient = new THREE.AmbientLight(0x888888)
      this.scene.add(ambient)

      var width = window.innerWidth // 窗口宽度
      var height = window.innerHeight // 窗口高度
      var k = width / height // 窗口宽高比
      // var s = 200 // 三维场景显示范围控制系数，系数越大，显示的范围越大
      // 创建相机对象
      this.camera = new THREE.PerspectiveCamera(60, k, 1, 10000)
      this.camera.position.set(200, 50, 200) // 设置相机位置
      this.camera.lookAt(this.scene.position) // 设置相机方向(指向的场景对象)

      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(width, height) // 设置渲染区域尺寸
      this.renderer.setClearColor(0xb9d3ff, 1) // 设置背景颜色
      const three = document.getElementById('three-test')
      three.appendChild(this.renderer.domElement)
      // document.body.appendChild(this.renderer.domElement) // body元素中插入canvas对象

      this.renderer.render(this.scene, this.camera)
    },
    render () {
      this.renderer.render(this.scene, this.camera)
      requestAnimationFrame(this.render)
    }
  }
}
</script>
