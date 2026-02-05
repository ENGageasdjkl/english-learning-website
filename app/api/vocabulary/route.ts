import { NextResponse } from "next/server";

import { getDb } from "@/lib/db";

export const GET = () => {
  const db = getDb();
  const items = db
    .prepare(
      "SELECT id, word, definition, example, created_at as createdAt FROM vocabulary ORDER BY created_at DESC"
    )
    .all();

  return NextResponse.json({ data: items });
};

export const POST = async (request: Request) => {
  const db = getDb();
  const body = (await request.json()) as {
    word?: string;
    definition?: string;
    example?: string;
  };

  if (!body.word) {
    return NextResponse.json({ error: "word is required" }, { status: 400 });
  }

  const statement = db.prepare(
    "INSERT INTO vocabulary (word, definition, example) VALUES (?, ?, ?)"
  );
  const result = statement.run(
    body.word,
    body.definition ?? null,
    body.example ?? null
  );

  return NextResponse.json({ id: result.lastInsertRowid });
};
