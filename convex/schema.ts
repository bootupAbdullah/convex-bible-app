// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Main verse content table - preserves all WEB formatting
  verses: defineTable({
    book: v.string(),           // "John"
    chapterNumber: v.number(),  // 1, 2, 3... 21
    verseNumber: v.optional(v.number()), // 1, 2, 3... (optional for formatting markers)
    sectionNumber: v.optional(v.number()), // 1, 2, 3... for verse parts
    type: v.string(),           // "paragraph text", "paragraph start", "line text", etc.
    value: v.optional(v.string()), // The actual text content (optional for markers)
    // Preserve order for proper rendering
    orderIndex: v.number(),     // Sequential order in the book
  }),

  // User notes on specific verses
  notes: defineTable({
    // Reference to specific verse text (not formatting markers)
    book: v.string(),
    chapterNumber: v.number(),
    verseNumber: v.number(),
    // Note content
    content: v.string(),
    author: v.optional(v.string()), // For future user system
    createdAt: v.string(),
    // Optional: reference specific verse section if needed
    sectionNumber: v.optional(v.number()),
  }),

  // Bookmarks (existing functionality)
  bookmarks: defineTable({
    verse: v.string(),
    reference: v.string(),
    createdAt: v.string(),
  }),
});

