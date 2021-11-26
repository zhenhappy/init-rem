declare module 'init-rem' {
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
  export default function initRem(options?: IOptions): void;
}
