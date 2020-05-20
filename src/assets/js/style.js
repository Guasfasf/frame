var width = document.documentElement.clientWidth
if (width > 1366) {
  import('../css/first/index.js')
} else {
  import('../css/second/index.js')
}
