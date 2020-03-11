// 获取图片完整路径
export function getImgUrl(src) {
  const firstWord = src.substring(0, 1)
  let prefix = process.env.VUE_APP_ASSETS_URL
  if (firstWord !== '/' || firstWord !== '\\') {
    prefix += '/'
  }
  return prefix + src
}
