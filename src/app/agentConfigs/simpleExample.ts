import { AgentConfig } from "@/app/types";
import { injectTransferTools } from "./utils";

// Define agents
const brainstorm: AgentConfig = {
  name: "Brainstorm",
  publicDescription: "Agent that helps brainstorm about 10X.", // Context for the agent_transfer tool
  instructions:
    "Ask the user for a topic, then reply brainstorms about that topic.",
  tools: [],
};

const greeter: AgentConfig = {
  name: "Greeter",
  publicDescription: "Agent that greets the user.",
  instructions:
    "Please greet the user and ask them if they'd like to brainstorm. If yes, transfer them to the 'haiku' agent.",
  tools: [],
  downstreamAgents: [brainstorm],
};

// add the transfer tool to point to downstreamAgents
const agents = injectTransferTools([greeter, brainstorm]);

export default agents;
