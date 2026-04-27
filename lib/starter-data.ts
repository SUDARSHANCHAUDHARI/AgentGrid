export type AgentStatus = "idle" | "running" | "error";

export type AgentRecord = {
  id: string;
  name: string;
  owner: string;
  status: AgentStatus;
  activity: string;
};

export const starterAgents: AgentRecord[] = [
  {
    id: "agent-1",
    name: "Intake Router",
    owner: "Ops Team",
    status: "running",
    activity: "Routing customer tasks toward the right specialist flow."
  },
  {
    id: "agent-2",
    name: "Research Scout",
    owner: "Insights Team",
    status: "idle",
    activity: "Standing by for the next research request."
  },
  {
    id: "agent-3",
    name: "Delivery Watcher",
    owner: "Reliability",
    status: "error",
    activity: "Missing response heartbeat from the last execution cycle."
  }
];
