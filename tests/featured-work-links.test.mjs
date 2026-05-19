import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("Faceout and PermiPro have external site links", async () => {
  const source = await readFile("src/data/profile.ts", "utf8");

  assert.match(source, /siteUrl: "https:\/\/faceout\.ca"/);
  assert.match(source, /siteUrl: "https:\/\/permipro\.io"/);
  const bitcoinSection = source.slice(
    source.indexOf('name: "Bitcoin Depot / Bitaccess"'),
    source.indexOf('name: "Faceout"'),
  );
  assert.doesNotMatch(bitcoinSection, /siteUrl:/);
});

test("featured work renders optional visit site links", async () => {
  const source = await readFile("src/components/featured-work.tsx", "utf8");

  assert.match(source, /work\.siteUrl/);
  assert.match(source, /Visit site/);
  assert.match(source, /target="_blank"/);
  assert.match(source, /rel="noreferrer"/);
});
