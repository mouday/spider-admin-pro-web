export const ScheduleTypeEnum = {
  // 指定一个服务器
  ONLY_ONE_SERVER: '0',

  // 随机轮询
  RANDOM_SERVER: '1',
}

export const ScheduleTypeOptions = [
  {
    value: ScheduleTypeEnum.ONLY_ONE_SERVER,
    label: '当前服务器',
  },
  {
    value: ScheduleTypeEnum.RANDOM_SERVER,
    label: '服务器轮询',
  },
]
