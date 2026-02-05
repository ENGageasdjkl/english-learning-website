import { NextResponse } from "next/server";

import { getDb } from "@/lib/db";

export const GET = () => {
  const db = getDb();
  const lessons = db
    .prepare(
      "SELECT id, title, level, description, created_at as createdAt FROM lessons ORDER BY created_at DESC"
    )
    .all();

  return NextResponse.json({ data: lessons });
};

export const POST = async (request: Request) => {
  const db = getDb();
  const body = (await request.json()) as {
    title?: string;
    level?: string;
    description?: string;
  };

  if (!body.title || !body.level) {
    return NextResponse.json(
      { error: "title and level are required" },
      { status: 400 }
    );
  }

  const statement = db.prepare(
    "INSERT INTO lessons (title, level, description) VALUES (?, ?, ?)"
  );
  const result = statement.run(body.title, body.level, body.description ?? null);

  return NextResponse.json({ id: result.lastInsertRowid });
};
