export interface IOptions {
  /** 定义设计图尺寸宽度 */
  designWidth?: number;
  /** 定义最大屏幕尺寸, 为了解决平板字体太大问题 */
  maxWidth?: number;
  /** 定义最大屏幕尺寸, 为了解决平板字体太大问题 */
  minWidth?: number;
  /** 定义文档默认字体大小 */
  bodyFontSize?: number;
  /**
   * 定义基准字号
   * 设置200便于计算, 在开发环境中Chrome用的是1倍图
   * 那100px=1rem, 34px=0.34rem, 所有尺寸的实际尺寸和rem相差100倍
   * 也不要小于12px, 虽然用10px也不错, 但是开发环境由于是Chrome,
   * 小于12像素会有问题, 但是真实设备上是没问题的, 所以根据自己的开发环境决定
   * */
  baseFontSize?: number;
}

export const initRem = (options: IOptions) => {
  options = {
    designWidth: 750,  // 定义设计图尺寸宽度
    maxWidth: 500,     // 定义最大屏幕尺寸, 为了解决平板字体太大问题
    minWidth: 300,     // 定义最大屏幕尺寸, 为了解决平板字体太大问题
    bodyFontSize: 16,  // 定义文档默认字体大小
    baseFontSize: 200, // 定义基准字号
                       // 设置200便于计算, 在开发环境中Chrome用的是1倍图
                       // 那100px=1rem, 34px=0.34rem, 所有尺寸的实际尺寸和rem相差100倍
                       // 也不要小于12px, 虽然用10px也不错, 但是开发环境由于是Chrome,
                       // 小于12像素会有问题, 但是真实设备上是没问题的, 所以根据自己的开发环境决定
    ...options
  }

  _setBaseFontSize()
  _setBodyFontSize()
  _setReCalcRem()

  // 设置文档默认字体
  function _setBodyFontSize (loaded?: boolean) {
    const head = document.head || document.getElementsByTagName('head')[0]
    const innerHTML = loaded
      ? `body { font-size: ${options.bodyFontSize}px; }`
      : `body { display: 'none'; font-size: ${options.bodyFontSize}px; }`
    if (head) {
      let remBaseStyle = document.getElementById('rem-base-style')
      if (remBaseStyle) {
        remBaseStyle.innerHTML = innerHTML
      } else {
        remBaseStyle = document.createElement('style')
        remBaseStyle.id = 'rem-base-style'
        remBaseStyle.innerHTML = innerHTML
        head.appendChild(remBaseStyle)
      }
    }
    document.addEventListener(
      'DOMContentLoaded',
      () => {
        _setBodyFontSize(true)
      },
      false
    )
  }

  // 设置REM基准字号 1rem = 设计图尺寸 / 屏幕dpr / 基准字号
  function _setBaseFontSize () {
    const rem = (options.baseFontSize * Math.min(Math.max(window.innerWidth, options.minWidth), options.maxWidth)) / options.designWidth
    document.documentElement.style.fontSize = `${rem}px`
  }

  // 设置屏幕尺寸变化事件代理, 重新计算REM基准尺寸
  function _setReCalcRem () {
    document.addEventListener('DOMContentLoaded', _setBaseFontSize, false)
    window.addEventListener('orientationchange' in window ? 'orientationchange' : 'resize', _setBaseFontSize, false)
  }
}
export default initRem
