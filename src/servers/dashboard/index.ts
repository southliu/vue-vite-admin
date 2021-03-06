import type { IDashboardResult } from '@/pages/dashboard/model'
import type { IServerResult } from '@/types/global'
import { request } from '@/utils/request'

/**
 * 获取数据总览数据
 * @param data - 请求数据
 */
export function getDataTrends(data: object) {
  return request.get<IServerResult<IDashboardResult>>('/stat/data-trends', { params: data })
}
