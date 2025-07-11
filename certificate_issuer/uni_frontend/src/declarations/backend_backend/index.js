import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "./backend_backend.did.js";
export { idlFactory } from "./backend_backend.did.js";

// ✅ Updated canister ID
export const canisterId = "ulvla-h7777-77774-qaacq-cai";

export const createActor = (canisterId, options = {}) => {
  const agent = options.agent || new HttpAgent({ ...options.agentOptions });

  if (options.agent && options.agentOptions) {
    console.warn(
      "Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent."
    );
  }

  if (canisterId && !options.agent && process.env.DFX_NETWORK !== "ic") {
    agent.fetchRootKey().catch((err) => {
      console.warn("Could not fetch root key from local replica");
      console.error(err);
    });
  }

  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options.actorOptions,
  });
};

export const backend_backend = createActor(canisterId);
