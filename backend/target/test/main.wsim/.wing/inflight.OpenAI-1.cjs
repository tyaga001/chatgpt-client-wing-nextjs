"use strict";
const $helpers = require("@winglang/sdk/lib/helpers");
module.exports = function({ $Sim }) {
  class OpenAI {
    constructor({ $this_apiKey, $this_keyOverride, $this_mock, $this_org, $this_orgOverride }) {
      this.$this_apiKey = $this_apiKey;
      this.$this_keyOverride = $this_keyOverride;
      this.$this_mock = $this_mock;
      this.$this_org = $this_org;
      this.$this_orgOverride = $this_orgOverride;
    }
    async createCompletion(prompt, params) {
      const resp = (await this.openai.createCompletion(({"max_tokens": (params?.maxTokens ?? 2048), "model": (params?.model ?? "gpt-3.5-turbo"), "messages": [({"role": "user", "content": prompt})]})));
      return ((arg) => { if (typeof arg !== "string") {throw new Error("unable to parse " + typeof arg + " " + arg + " as a string")}; return JSON.parse(JSON.stringify(arg)) })($helpers.lookup($helpers.lookup($helpers.lookup($helpers.lookup(resp, "choices"), 0), "message"), "content"));
    }
    static async createNewInflightClient(apiKey, org) {
      return (require("@winglibs/openai/openai.js")["createNewInflightClient"])(apiKey, org)
    }
    async $inflight_init() {
      const UNDEFINED = "<UNDEFINED>";
      const apiKey = (this.$this_keyOverride ?? ((await this.$this_apiKey?.value?.()) ?? UNDEFINED));
      if ($helpers.eq(apiKey, UNDEFINED)) {
        throw new Error("Either `apiKeySecret` or `apiKey` are required");
      }
      let org = this.$this_orgOverride;
      if ($helpers.eq(org, undefined)) {
        org = (await this.$this_org?.value?.());
      }
      if (this.$this_mock) {
        this.openai = (await (async () => {const o = new $Sim(); await o.$inflight_init?.(); return o; })());
      }
      else {
        this.openai = (await OpenAI.createNewInflightClient(apiKey, org));
      }
    }
  }
  return OpenAI;
}
//# sourceMappingURL=inflight.OpenAI-1.cjs.map