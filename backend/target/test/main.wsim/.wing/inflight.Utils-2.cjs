"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({  }) {
  class Utils {
    constructor({  }) {
    }
    static async exec(command, env, cwd) {
      return (require("@winglibs/react/utils.js")["exec"])(command, env, cwd)
    }
    static async serveStaticFiles(path, port) {
      return (require("@winglibs/react/utils.js")["serveStaticFiles"])(path, port)
    }
  }
  return Utils;
}
//# sourceMappingURL=inflight.Utils-2.cjs.map