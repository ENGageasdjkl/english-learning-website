import { NextResponse } from "next/server";

import { getDb } from "@/lib/db";

export const GET = () => {
  const db = getDb();
  const passages = db
    .prepare(
      "SELECT id, title, content, level, created_at as createdAt FROM reading_passages ORDER BY created_at DESC"
    )
    .all();

  return NextResponse.json({ data: passages });
};

export const POST = async (request: Request) => {
  const db = getDb();
  const body = (await request.json()) as {
    title?: string;
    content?: string;
    level?: string;
  };

  if (!body.title || !body.content || !body.level) {
    return NextResponse.json(
      { error: "title, content, and level are required" },
      { status: 400 }
    );
  }

  const statement = db.prepare(
    "INSERT INTO reading_passages (title, content, level) VALUES (?, ?, ?)"
  );
  const result = statement.run(body.title, body.content, body.level);

  return NextResponse.json({ id: result.lastInsertRowid });
};
