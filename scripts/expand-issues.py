#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
import pathlib
import sys

sys.path.insert(0, "/workspace/scripts")
from issues_1_10 import ISSUES_1_10
from issues_21_30 import ISSUES_21_30

raw = pathlib.Path("/tmp/issues_11_20.py").read_text(encoding="utf-8")
ns = {}
exec("ISSUES_11_20 = [\n" + raw, ns)
ISSUES = ISSUES_1_10 + ns["ISSUES_11_20"] + ISSUES_21_30

assert [i["id"] for i in ISSUES] == list(range(1, 31)), [i["id"] for i in ISSUES]
for i in ISSUES:
    assert len(i["distractors"]) == 4
    assert i["scenario"]
    assert i["model"]
    assert i["primaryKey"]

HEADER = """export type Issue = {
  id: number;
  title: string;
  company: string;
  difficulty: string;
  primary: string;
  primaryKey: string;
  cf: string;
  distractors: string[];
  keywords: string[];
  scenario: string;
  model: string;
  generated?: boolean;
};

export const ISSUES: Issue[] = """

FOOTER = """

export const BASE_COUNT = ISSUES.length;

export function getIssue(id: number, extras: Issue[] = []) {
  return ISSUES.find((i) => i.id === id) ?? extras.find((i) => i.id === id);
}
"""

out = pathlib.Path("/workspace/src/data/issues.ts")
out.write_text(HEADER + json.dumps(ISSUES, ensure_ascii=False, indent=2) + FOOTER, encoding="utf-8")
lens = [len(i["scenario"]) for i in ISSUES]
print("n=", len(ISSUES), "min", min(lens), "max", max(lens), "avg", sum(lens) // len(lens))
for i in ISSUES:
    print(f"{i['id']:02d} {len(i['scenario']):4d}  {i['title'][:60]}")
