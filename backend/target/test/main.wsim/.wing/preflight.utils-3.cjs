"use strict";
const $stdlib = require('@winglang/sdk');
const std = $stdlib.std;
const $helpers = $stdlib.helpers;
const $extern = $helpers.createExternRequire(__dirname);
class Utils extends $stdlib.std.Resource {
  constructor($scope, $id, ) {
    super($scope, $id);
  }
  static execSync(command, env, cwd) {
    return ($extern("@winglibs/react/utils.js")["execSync"])(command, env, cwd)
  }
  static _toInflightType() {
    return `
      require("${$helpers.normalPath(__dirname)}/inflight.Utils-2.cjs")({
      })
    `;
  }
  _toInflight() {
    return `
      (await (async () => {
        const UtilsClient = ${Utils._toInflightType()};
        const client = new UtilsClient({
        });
        if (client.$inflight_init) { await client.$inflight_init(); }
        return client;
      })())
    `;
  }
  get _liftMap() {
    return ({
      "$inflight_init": [
      ],
    });
  }
  static get _liftTypeMap() {
    return ({
      "exec": [
      ],
      "serveStaticFiles": [
      ],
    });
  }
}
module.exports = { Utils };
//# sourceMappingURL=preflight.utils-3.cjs.map