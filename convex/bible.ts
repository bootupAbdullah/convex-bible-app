import { query, mutation, action} from "./_generated/server";
import { v } from "convex/values";


// Query - get all verses in the book of John
export const getVerses = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("verses")
      .filter(q => q.eq(q.field("type"), "paragraph text"))
      .collect();
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

// MUTATION - delete a bookmark
export const deleteBookmark = mutation({
  args: { id: v.id("bookmarks") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
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