import request from '@/utils/request'

const apiName = 'configs'

/**
 * 列表查询
 * @param {object} params 查询参数
 */
export function lists(params) {
  return request({
    url: apiName,
    method: 'get',
    params
  })
}

/**
 * 增加相册
 * @param {object} data 提交数据
 */
export function add(data) {
  return request({
    url: apiName,
    method: 'post',
    data
  })
}

/**
 * 更新相册
 * @param {Integer} id 更新相册的ID
 * @param {Object} data 更新的数据
 */
export function update(id, data) {
  return request({
    url: apiName + '/' + id,
    method: 'put',
    data
  })
}

/**
 * 删除相册
 * @param {Integer} id 相册ID
 */
export function del(id) {
  return request({
    url: apiName + '/' + id,
    method: 'delete'
  })
}

/**
 * 查询一条相册
 * @param {Integer} id 资源ID
 */
export function show(id) {
  return request({
    url: apiName + '/' + id,
    method: 'get'
  })
}

/**
 * 更新一个组的数据
 */
export function updateGroup(data) {
  return request({
    url: apiName + '/update-group',
    method: 'post',
    data
  })
}
