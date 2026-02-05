import { NextResponse } from "next/server";

import { getDb } from "@/lib/db";

export const GET = () => {
  const db = getDb();
  const feedback = db
    .prepare(
      "SELECT id, name, email, message, created_at as createdAt FROM feedback ORDER BY created_at DESC"
    )
    .all();

  return NextResponse.json({ data: feedback });
};

export const POST = async (request: Request) => {
  const db = getDb();
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!body.message) {
    return NextResponse.json(
      { error: "message is required" },
      { status: 400 }
    );
  }

  const statement = db.prepare(
    "INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)"
  );
  const result = statement.run(
    body.name ?? null,
    body.email ?? null,
    body.message
  );

  return NextResponse.json({ id: result.lastInsertRowid });
};
