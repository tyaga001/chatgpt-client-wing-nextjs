      "use strict";
      let $stop;
      exports.start = async function() {
        if ($stop) {
          throw Error('service already started');
        }
        const client = await 
          (await (async () => {
            const $Closure1Client = 
          require("/Users/ankurtyagi/dev/wing/nextjs/chatgpt-client-wing-nextjs/backend/target/test/main.wsim/.wing/inflight.$Closure1-4.cjs")({
            $____parent_this_1_props_useBuildCommand_____null_: false,
            $__parent_this_1_buildCommand: "npm run build",
            $__parent_this_1_buildDir: "/Users/ankurtyagi/dev/wing/nextjs/chatgpt-client-wing-nextjs/front_end/build",
            $__parent_this_1_env: {"API_URL": process.env["WING_TOKEN_WSIM_ROOT_ENV0_API_ATTRS_URL"],},
            $__parent_this_1_path: "/Users/ankurtyagi/dev/wing/nextjs/chatgpt-client-wing-nextjs/front_end",
            $__parent_this_1_startCommand: "npm run start",
            $fs_Util: require("/Users/ankurtyagi/.nvm/versions/node/v18.20.1/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/fs/fs.js").Util,
            $props_localPort: undefined,
            $state: (function() {
  let handle = process.env.STATE_HANDLE_10071f99;
  if (!handle) {
    throw new Error("Missing environment variable: STATE_HANDLE_10071f99");
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
            $std_Json: require("/Users/ankurtyagi/.nvm/versions/node/v18.20.1/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
            $util_Util: require("/Users/ankurtyagi/.nvm/versions/node/v18.20.1/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/util/util.js").Util,
            $utils_Utils: 
      require("/Users/ankurtyagi/dev/wing/nextjs/chatgpt-client-wing-nextjs/backend/target/test/main.wsim/.wing/inflight.Utils-2.cjs")({
      })
    ,
          })
        ;
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ;
        const noop = () => {};
        $stop = (await client.handle()) ?? noop;
      };

      exports.stop = async function() {
        if (!$stop) {
          throw Error('service not started');
        }
        await $stop();
        $stop = undefined;
      };
      
process.on("uncaughtException", (reason) => {
  process.send({ type: "reject", reason });
});

process.on("message", async (message) => {
  const { fn, args } = message;
  const value = await exports[fn](...args);
  process.send({ type: "resolve", value });
});
