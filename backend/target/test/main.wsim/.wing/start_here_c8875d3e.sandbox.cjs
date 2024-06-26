"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (
          (await (async () => {
            const $Closure1Client = 
          require("/Users/ankurtyagi/dev/wing/nextjs/chatgpt-client-wing-nextjs/backend/target/test/main.wsim/.wing/inflight.$Closure1-7.cjs")({
            $answerSource: (function() {
  let handle = process.env.TOPIC_HANDLE_cebbdb1d;
  if (!handle) {
    throw new Error("Missing environment variable: TOPIC_HANDLE_cebbdb1d");
  }
  const simulatorUrl = process.env.WING_SIMULATOR_URL;
  if (!simulatorUrl) {
    throw new Error("Missing environment variable: WING_SIMULATOR_URL");
  }
  const caller = process.env.WING_SIMULATOR_CALLER;
  if (!caller) {
    throw new Error("Missing environment variable: WING_SIMULATOR_CALLER");
  }
  return require("@winglang/sdk/lib/simulator/client").makeSimulatorClient(simulatorUrl, handle, caller);
})(),
            $myAssistant: 
          (await (async () => {
            const RespondToQuestionsClient = 
          require("/Users/ankurtyagi/dev/wing/nextjs/chatgpt-client-wing-nextjs/backend/target/test/main.wsim/.wing/inflight.RespondToQuestions-7.cjs")({
          })
        ;
            const client = new RespondToQuestionsClient({
              $this_gpt: 
          (await (async () => {
            const AssistantClient = 
          require("/Users/ankurtyagi/dev/wing/nextjs/chatgpt-client-wing-nextjs/backend/target/test/main.wsim/.wing/inflight.Assistant-7.cjs")({
          })
        ;
            const client = new AssistantClient({
              $this_openai: 
      (await (async () => {
        const OpenAIClient = 
      require("/Users/ankurtyagi/dev/wing/nextjs/chatgpt-client-wing-nextjs/backend/target/test/main.wsim/.wing/inflight.OpenAI-1.cjs")({
        $Sim: 
      require("/Users/ankurtyagi/dev/wing/nextjs/chatgpt-client-wing-nextjs/backend/target/test/main.wsim/.wing/inflight.Sim-1.cjs")({
        $std_Json: require("/Users/ankurtyagi/.nvm/versions/node/v18.20.1/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
      })
    ,
      })
    ;
        const client = new OpenAIClient({
          $this_apiKey: (function() {
  let handle = process.env.SECRET_HANDLE_2302760e;
  if (!handle) {
    throw new Error("Missing environment variable: SECRET_HANDLE_2302760e");
  }
  const simulatorUrl = process.env.WING_SIMULATOR_URL;
  if (!simulatorUrl) {
    throw new Error("Missing environment variable: WING_SIMULATOR_URL");
  }
  const caller = process.env.WING_SIMULATOR_CALLER;
  if (!caller) {
    throw new Error("Missing environment variable: WING_SIMULATOR_CALLER");
  }
  return require("@winglang/sdk/lib/simulator/client").makeSimulatorClient(simulatorUrl, handle, caller);
})(),
          $this_keyOverride: undefined,
          $this_mock: true,
          $this_org: undefined,
          $this_orgOverride: undefined,
        });
        if (client.$inflight_init) { await client.$inflight_init(); }
        return client;
      })())
    ,
              $this_personality: "Respondent",
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ,
              $this_id: (function() {
  let handle = process.env.COUNTER_HANDLE_13990310;
  if (!handle) {
    throw new Error("Missing environment variable: COUNTER_HANDLE_13990310");
  }
  const simulatorUrl = process.env.WING_SIMULATOR_URL;
  if (!simulatorUrl) {
    throw new Error("Missing environment variable: WING_SIMULATOR_URL");
  }
  const caller = process.env.WING_SIMULATOR_CALLER;
  if (!caller) {
    throw new Error("Missing environment variable: WING_SIMULATOR_CALLER");
  }
  return require("@winglang/sdk/lib/simulator/client").makeSimulatorClient(simulatorUrl, handle, caller);
})(),
              $this_store: (function() {
  let handle = process.env.BUCKET_HANDLE_681a5e46;
  if (!handle) {
    throw new Error("Missing environment variable: BUCKET_HANDLE_681a5e46");
  }
  const simulatorUrl = process.env.WING_SIMULATOR_URL;
  if (!simulatorUrl) {
    throw new Error("Missing environment variable: WING_SIMULATOR_URL");
  }
  const caller = process.env.WING_SIMULATOR_CALLER;
  if (!caller) {
    throw new Error("Missing environment variable: WING_SIMULATOR_CALLER");
  }
  return require("@winglang/sdk/lib/simulator/client").makeSimulatorClient(simulatorUrl, handle, caller);
})(),
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ,
          })
        ;
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        );
  return await $handler.handle(event);
};
process.on("uncaughtException", (reason) => {
  process.send({ type: "reject", reason });
});

process.on("message", async (message) => {
  const { fn, args } = message;
  const value = await exports[fn](...args);
  process.send({ type: "resolve", value });
});
