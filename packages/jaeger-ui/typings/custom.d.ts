// Copyright (c) 2019 Uber Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// For jest
declare const global: {
  location: Location;
}

// For setting the site-prefix
declare interface Window {
  // eslint-disable-next-line camelcase
  __webpack_public_path__: string;
}

// For inlined envvars
declare const process: {
  env: {
    NODE_ENV: string;
  }
}

declare module 'tween-functions';