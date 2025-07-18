import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "./backend_backend.did.js";
export { idlFactory } from "./backend_backend.did.js";

// Use env variable or fallback to local canister ID
export const canisterId = process.env.CANISTER_ID_BACKEND_BACKEND || "uxrrr-q7777-77774-qaaaq-cai";

export const createActor = (canisterId, options = {}) => {
  const agent = options.agent || new HttpAgent({ ...options.agentOptions });

  if (options.agent && options.agentOptions) {
    console.warn(
      "Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent."
    );
  }

  if (process.env.DFX_NETWORK !== "ic") {
    agent.fetchRootKey().catch((err) => {
      console.warn("Unable to fetch root key. Is the local replica running?");
      console.error(err);
    });
  }

  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options.actorOptions,
  });
};

// ✅ This is now ESLint-safe
export const backend_backend = createActor(canisterId);
