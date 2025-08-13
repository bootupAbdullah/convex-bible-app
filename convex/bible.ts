import { query, mutation, action} from "./_generated/server";
import { v } from "convex/values";

export const searchVerses = query({
  args: {},
  handler: async () => {
    return [
      { book: "John", chapter: 3, verse: 16, text: "For God so loved the world..." },
      { book: "Psalms", chapter: 23, verse: 1, text: "The Lord is my shepherd..." }
    ];
  },
});

// QUERY - read all bookmarks
export const getBookmarks = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("bookmarks").collect();
  },
});

// MUTATION - save a new bookmark  
export const saveBookmark = mutation({
  args: { verse: v.string(), reference: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("bookmarks", {
      verse: args.verse,
      reference: args.reference,
      createdAt: new Date().toISOString()
    });
  },
});

// ACTION - simulate fetching from external API
export const fetchVerse = action({
  args: { reference: v.string() },
  handler: async (ctx, args) => {
    // Simulate external API call
    return { reference: args.reference, text: "Fetched verse text..." };
  },
});