export const LOCAL_ANES_MANIFEST = {
  type: "anes-satellite",
  mode: "slave",
  masterServer: "D:\\Site web2\\mycarriere.aurora-nexus-emerald-system",
  controlPlane: "D:\\siteweb4\\Ad2sys\\VITRINE-OFFICIELLE-AD2SYS-ECOSYSTEM-OS",
  canOverrideMaster: false,
  canExecuteLocalTasks: true,
  localScope: ["monitoring, observability, métriques, logs, dashboards."],
  localAgents: [],
  localWorkers: [],
  localRoutes: [],
  localReports: [],
  forbidden: [
    "do-not-duplicate-master-manifest",
    "do-not-duplicate-all-agents",
    "do-not-duplicate-super-workers",
    "do-not-act-as-main-server"
  ]
};
