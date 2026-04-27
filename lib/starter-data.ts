export type AgentStatus = "idle" | "running" | "error";

export type AgentLog = {
  id: string;
  level: "info" | "warn" | "error";
  time: string;
  message: string;
};

export type AgentRecord = {
  id: string;
  name: string;
  owner: string;
  status: AgentStatus;
  activity: string;
  queueDepth: number;
  latencyMs: number;
  lastHeartbeat: string;
  region: string;
  tags: string[];
  logs: AgentLog[];
};

export const starterAgents: AgentRecord[] = [
  {
    id: "agent-1",
    name: "Intake Router",
    owner: "Ops Team",
    status: "running",
    activity: "Routing new customer tasks into the specialist network.",
    queueDepth: 12,
    latencyMs: 184,
    lastHeartbeat: "6s ago",
    region: "Singapore",
    tags: ["router", "priority"],
    logs: [
      {
        id: "log-1",
        level: "info",
        time: "14:03",
        message: "Accepted 4 new requests from the intake channel."
      },
      {
        id: "log-2",
        level: "warn",
        time: "13:58",
        message: "Latency increased while queue depth crossed 10."
      },
      {
        id: "log-3",
        level: "info",
        time: "13:52",
        message: "Rebalanced work toward the research cluster."
      }
    ]
  },
  {
    id: "agent-2",
    name: "Research Scout",
    owner: "Insights Team",
    status: "idle",
    activity: "Standing by for the next research request.",
    queueDepth: 0,
    latencyMs: 61,
    lastHeartbeat: "14s ago",
    region: "Frankfurt",
    tags: ["research", "analysis"],
    logs: [
      {
        id: "log-4",
        level: "info",
        time: "14:02",
        message: "Finished a source ranking pass for the previous task."
      },
      {
        id: "log-5",
        level: "info",
        time: "13:41",
        message: "Cache warmed for the next research bundle."
      }
    ]
  },
  {
    id: "agent-3",
    name: "Delivery Watcher",
    owner: "Reliability",
    status: "error",
    activity: "Missing response heartbeat from the last execution cycle.",
    queueDepth: 3,
    latencyMs: 910,
    lastHeartbeat: "2m ago",
    region: "Virginia",
    tags: ["delivery", "alerts"],
    logs: [
      {
        id: "log-6",
        level: "error",
        time: "14:01",
        message: "Heartbeat missing from worker process 7."
      },
      {
        id: "log-7",
        level: "warn",
        time: "13:57",
        message: "Retry loop detected for outbound delivery confirmation."
      },
      {
        id: "log-8",
        level: "info",
        time: "13:40",
        message: "Escalation policy attached to the current incident."
      }
    ]
  }
];
