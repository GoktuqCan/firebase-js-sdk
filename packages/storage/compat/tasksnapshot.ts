/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import * as types from '@firebase/storage-types';
import { TaskState } from '../src/implementation/taskenums';
import { Metadata } from '../src/metadata';
import { ReferenceCompat } from './reference';
import { UploadTaskCompat } from './task';

export class UploadTaskSnapshotCompat implements types.UploadTaskSnapshot{
  constructor(
    readonly bytesTransferred: number,
    readonly totalBytes: number,
    readonly state: TaskState,
    readonly metadata: Metadata,
    readonly task: UploadTaskCompat,
    readonly ref: ReferenceCompat
  ) {}
}