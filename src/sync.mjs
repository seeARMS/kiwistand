// @format
import * as lp from "it-length-prefixed";
import { pipe } from "it-pipe";
import { toString } from "uint8arrays/to-string";
import { fromString } from "uint8arrays/from-string";
import map from "it-map";
import all from "it-all";

import log from "./logger.mjs";

export async function toWire(message, sink) {
  const sMessage = JSON.stringify(message);
  const buf = fromString(sMessage);
  return await pipe([buf], lp.encode(), sink);
}

export async function fromWire(source) {
  return await pipe(source, lp.decode(), async (_source) => {
    const results = await map(_source, (message) => {
      if (!message) return;
      const sMessage = toString(message.subarray());
      return JSON.parse(sMessage);
    });
    return await all(results);
  });
}

export function handleDiscovery(evt) {
  log(`discovered ${evt.detail.id.toString()}`);
}

export function handleConnection(evt) {
  log(`connected ${evt.detail.remotePeer.toString()}`);
}

export function handleDisconnection(evt) {
  log(`disconnected ${evt.detail.remotePeer.toString()}`);
}

function handleMessage(evt) {
  log(`${evt.detail.topic}:`, new TextDecoder().decode(evt.detail.data));
}

export const TOPIC_PREFIX = "COPYCAT/v0.0.1";
export const topics = [
  {
    name: `${TOPIC_PREFIX}/messages`,
    handlers: {
      message: handleMessage,
    },
  },
];
