export function debounce(func, delay) {
  let _this = this
  let timer = null
  return function (...args) {
    if (timer) clearInterval(timer)
    timer = setTimeout( () => {
      func.apply(_this,args)
    }, delay)
  }
}