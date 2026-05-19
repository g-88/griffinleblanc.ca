import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const contactActionPath = "src/components/contact-action.tsx";

test("contact actions copy the email and show a fallback toast", async () => {
  const source = await readFile(contactActionPath, "utf8");

  assert.match(source, /navigator\.clipboard\.writeText\(email\)/);
  assert.match(source, /Email copied/);
  assert.match(source, /Email: /);
  assert.match(source, /aria-live="polite"/);
  assert.match(source, /cursor-pointer/);
});

test("header, hero, and footer use the copy contact action", async () => {
  const [header, hero, footer] = await Promise.all([
    readFile("src/components/site-header.tsx", "utf8"),
    readFile("src/components/hero-section.tsx", "utf8"),
    readFile("src/components/site-footer.tsx", "utf8"),
  ]);

  for (const source of [header, hero, footer]) {
    assert.match(source, /ContactAction/);
    assert.doesNotMatch(source, /href=\{profile\.links\.email\}/);
  }
});
