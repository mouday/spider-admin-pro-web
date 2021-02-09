// 接口配置

module.exports = {
  // 登录鉴权
  authLogin: '/auth/login',

  // scrapyd接口
  scrapydListProjects: '/scrapyd/listProjects',
  scrapydlistVersions: '/scrapyd/listVersions',
  scrapydlistSpiders: '/scrapyd/listSpiders',
  // scrapydlistJobs: '/scrapyd/listJobs',
  scrapydlistJobsMerge: '/scrapyd/listJobsMerge',
  scrapydCancel: '/scrapyd/cancel',
  scrapydCancelAllJob: '/scrapyd/cancelAllJob',
  scrapydDeleteVersion: '/scrapyd/deleteVersion',
  scrapydDeleteProject: '/scrapyd/deleteProject',
  scrapydSchedule: '/scrapyd/schedule',
  scrapydDaemonStatus: '/scrapyd/daemonStatus',
  scrapydAddVersion: '/scrapyd/addVersion',
  
  // 日志
  scrapydLogs: '/scrapyd/logs',
  scrapydProjectLogs: '/scrapyd/projectLogs',
  scrapydSpiderLogs: '/scrapyd/spiderLogs',
  scrapydJobLog: '/scrapyd/jobLog',

  // 调度器
  scheduleAddJob: '/schedule/addJob',
  scheduleGetJobs: '/schedule/getJobs',
  schedulePauseJob: '/schedule/pauseJob',
  scheduleResumeJob: '/schedule/resumeJob',
  scheduleRemoveJob: '/schedule/removeJob',
  scheduleJobDetail: '/schedule/jobDetail',
  
  scheduleState: '/schedule/state',
  scheduleStart: '/schedule/start',
  scheduleShutdown: '/schedule/shutdown',
  schedulePause: '/schedule/pause',
  scheduleResume: '/schedule/resume',
  scheduleRemoveAllJobs: '/schedule/removeAllJobs',
  
  
  // 调度日志
  scheduleScheduleLogs: '/schedule/scheduleLogs',
  scheduleRemoveScheduleLogs: '/schedule/removeScheduleLogs',


  // 系统信息
  systemSystemInfo: '/system/systemInfo',
  systemSystemData: '/system/systemData',
  systemSystemConfig: '/system/systemConfig',

  // 状态收集
  statsCollectionListItem: 'statsCollection/listItem',
  statsCollectionDelete: 'statsCollection/delete',

  // 系统管理
  actionHistoryLoginHistoryList: '/actionHistory/loginHistoryList',
};
