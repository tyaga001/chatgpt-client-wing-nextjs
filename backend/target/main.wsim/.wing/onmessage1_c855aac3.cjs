"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? (new (require("C:/Users/loyal/AppData/Roaming/npm/node_modules/winglang/node_modules/@winglang/sdk/lib/target-sim/topic.onmessage.inflight.js")).TopicOnMessageHandlerClient({ handler: 
              (await (async () => {
                const $Closure1Client = 
              require("C:/Users/loyal/Desktop/codingProject/test-wing/target/main.wsim/.wing/inflight.$Closure1-2.cjs")({
                $gpt: 
          (await (async () => {
            const AssistantClient = 
          require("C:/Users/loyal/Desktop/codingProject/test-wing/target/main.wsim/.wing/inflight.Assistant-2.cjs")({
          })
        ;
            const client = new AssistantClient({
              $this_openai: 
      (await (async () => {
        const OpenAIClient = 
      require("C:/Users/loyal/Desktop/codingProject/test-wing/target/main.wsim/.wing/inflight.OpenAI-1.cjs")({
        $Sim: 
      require("C:/Users/loyal/Desktop/codingProject/test-wing/target/main.wsim/.wing/inflight.Sim-1.cjs")({
        $std_Json: require("C:/Users/loyal/AppData/Roaming/npm/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
      })
    ,
      })
    ;
        const client = new OpenAIClient({
          $this_apiKey: (function() {
  let handle = process.env.SECRET_HANDLE_94f79573;
  if (!handle) {
    throw new Error("Missing environment variable: SECRET_HANDLE_94f79573");
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
          $this_mock: false,
          $this_org: undefined,
          $this_orgOverride: undefined,
        });
        if (client.$inflight_init) { await client.$inflight_init(); }
        return client;
      })())
    ,
              $this_personality: "English to $hebrew translator.",
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ,
                $id: (function() {
  let handle = process.env.COUNTER_HANDLE_c5284b9c;
  if (!handle) {
    throw new Error("Missing environment variable: COUNTER_HANDLE_c5284b9c");
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
                $language: "hebrew",
                $store: (function() {
  let handle = process.env.BUCKET_HANDLE_7562a09e;
  if (!handle) {
    throw new Error("Missing environment variable: BUCKET_HANDLE_7562a09e");
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
              })
            ;
                const client = new $Closure1Client({
                });
                if (client.$inflight_init) { await client.$inflight_init(); }
                return client;
              })())
            , args: {} }));
  return await $handler.handle(event);
};