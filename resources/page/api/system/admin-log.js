import request from '@/utils/request'

const apiName = 'admin-log'

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
 * 增加资源
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
 * 更新资源
 * @param {Integer} id 更新资源的ID
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
 * 删除资源
 * @param {Integer} id 资源ID
 */
export function del(id) {
  return request({
    url: apiName + '/' + id,
    method: 'delete'
  })
}

/**
 * 批量更新
 * @param data
 */
export function multiUpdate(data) {
  return request({
    url: apiName + '/multi',
    method: 'post',
    data
  })
}

/**
 * 批量删除
 */
export function multiDestroy(data) {
  return request({
    url: apiName + '/multi-del',
    method: 'post',
    data
  })
}