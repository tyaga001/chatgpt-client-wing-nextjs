"use strict";
const $stdlib = require('@winglang/sdk');
const std = $stdlib.std;
const $helpers = $stdlib.helpers;
const $extern = $helpers.createExternRequire(__dirname);
const cloud = $stdlib.cloud;
const util = $stdlib.util;
class Sim extends $stdlib.std.Resource {
  constructor($scope, $id, ) {
    super($scope, $id);
  }
  static _toInflightType() {
    return `
      require("${$helpers.normalPath(__dirname)}/inflight.Sim-1.cjs")({
        $std_Json: ${$stdlib.core.liftObject($stdlib.core.toLiftableModuleType(std.Json, "@winglang/sdk/std", "Json"))},
      })
    `;
  }
  _toInflight() {
    return `
      (await (async () => {
        const SimClient = ${Sim._toInflightType()};
        const client = new SimClient({
        });
        if (client.$inflight_init) { await client.$inflight_init(); }
        return client;
      })())
    `;
  }
  get _liftMap() {
    return ({
      "createCompletion": [
      ],
      "$inflight_init": [
      ],
    });
  }
}
class OpenAI extends $stdlib.std.Resource {
  constructor($scope, $id, props) {
    super($scope, $id);
    this.apiKey = props?.apiKeySecret;
    this.org = props?.orgSecret;
    this.keyOverride = props?.apiKey;
    this.orgOverride = props?.org;
    this.mock = ($helpers.eq((util.Util.env("WING_TARGET")), "sim") && $helpers.nodeof(this).app.isTestEnvironment);
  }
  static _toInflightType() {
    return `
      require("${$helpers.normalPath(__dirname)}/inflight.OpenAI-1.cjs")({
        $Sim: ${$stdlib.core.liftObject(Sim)},
      })
    `;
  }
  _toInflight() {
    return `
      (await (async () => {
        const OpenAIClient = ${OpenAI._toInflightType()};
        const client = new OpenAIClient({
          $this_apiKey: ${$stdlib.core.liftObject(this.apiKey)},
          $this_keyOverride: ${$stdlib.core.liftObject(this.keyOverride)},
          $this_mock: ${$stdlib.core.liftObject(this.mock)},
          $this_org: ${$stdlib.core.liftObject(this.org)},
          $this_orgOverride: ${$stdlib.core.liftObject(this.orgOverride)},
        });
        if (client.$inflight_init) { await client.$inflight_init(); }
        return client;
      })())
    `;
  }
  get _liftMap() {
    return ({
      "createCompletion": [
      ],
      "$inflight_init": [
        [OpenAI, ["createNewInflightClient"]],
        [this.apiKey, ["value"]],
        [this.keyOverride, []],
        [this.mock, []],
        [this.org, ["value"]],
        [this.orgOverride, []],
      ],
      "openai": [
      ],
    });
  }
  static get _liftTypeMap() {
    return ({
      "createNewInflightClient": [
      ],
    });
  }
}
module.exports = { OpenAI };
//# sourceMappingURL=preflight.openai-1.cjs.map