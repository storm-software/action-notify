/* -------------------------------------------------------------------

                🗲 Storm Software - Action Notify

 This code was released as part of the Action Notify project. Action Notify
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/action-notify.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/action-notify
 Documentation:            https://docs.stormsoftware.com
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { defineConfig } from "@storm-software/eslint";

Error.stackTraceLimit = Number.POSITIVE_INFINITY;

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig({
  name: "action-notify",
  nx: false,
  typescript: false,
  tsdoc: false
});
