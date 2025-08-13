// convex/seed.ts
import { mutation } from "./_generated/server";
import { v } from "convex/values";

// This will be our john.json data - we'll import it
const johnData = [
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 1,
		"sectionNumber": 1,
		"value": "In the beginning was the Word, and the Word was with God, and the Word was God.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 2,
		"sectionNumber": 1,
		"value": "The same was in the beginning with God.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 3,
		"sectionNumber": 1,
		"value": "All things were made through him. Without him, nothing was made that has been made.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 4,
		"sectionNumber": 1,
		"value": "In him was life, and the life was the light of men.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 5,
		"sectionNumber": 1,
		"value": "The light shines in the darkness, and the darkness hasn’t overcome  it.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 6,
		"sectionNumber": 1,
		"value": "There came a man, sent from God, whose name was John.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 7,
		"sectionNumber": 1,
		"value": "The same came as a witness, that he might testify about the light, that all might believe through him.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 8,
		"sectionNumber": 1,
		"value": "He was not the light, but was sent that he might testify about the light.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 9,
		"sectionNumber": 1,
		"value": "The true light that enlightens everyone was coming into the world. "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 10,
		"sectionNumber": 1,
		"value": "He was in the world, and the world was made through him, and the world didn’t recognize him.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 11,
		"sectionNumber": 1,
		"value": "He came to his own, and those who were his own didn’t receive him.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 12,
		"sectionNumber": 1,
		"value": "But as many as received him, to them he gave the right to become God’s children, to those who believe in his name:  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 13,
		"sectionNumber": 1,
		"value": "who were born not of blood, nor of the will of the flesh, nor of the will of man, but of God.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 14,
		"sectionNumber": 1,
		"value": "The Word became flesh, and lived among us. We saw his glory, such glory as of the one and only Son of the Father, full of grace and truth.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 15,
		"sectionNumber": 1,
		"value": "John testified about him. He cried out, saying, “This was he of whom I said, ‘He who comes after me has surpassed me, for he was before me.’ ”  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 16,
		"sectionNumber": 1,
		"value": "From his fullness we all received grace upon grace.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 17,
		"sectionNumber": 1,
		"value": "For the law was given through Moses. Grace and truth were realized through Jesus Christ.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 18,
		"sectionNumber": 1,
		"value": "No one has seen God at any time. The one and only Son, who is in the bosom of the Father, has declared him. "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 19,
		"sectionNumber": 1,
		"value": "This is John’s testimony, when the Jews sent priests and Levites from Jerusalem to ask him, “Who are you?” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 20,
		"sectionNumber": 1,
		"value": "He declared, and didn’t deny, but he declared, “I am not the Christ.” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 21,
		"sectionNumber": 1,
		"value": "They asked him, “What then? Are you Elijah?” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 21,
		"sectionNumber": 2,
		"value": "He said, “I am not.” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 21,
		"sectionNumber": 3,
		"value": "“Are you the prophet?” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 21,
		"sectionNumber": 4,
		"value": "He answered, “No.” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 22,
		"sectionNumber": 1,
		"value": "They said therefore to him, “Who are you? Give us an answer to take back to those who sent us. What do you say about yourself?” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 23,
		"sectionNumber": 1,
		"value": "He said, “I am the voice of one crying in the wilderness, ‘Make straight the way of the Lord,’ as Isaiah the prophet said.” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 24,
		"sectionNumber": 1,
		"value": "The ones who had been sent were from the Pharisees.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 25,
		"sectionNumber": 1,
		"value": "They asked him, “Why then do you baptize, if you are not the Christ, nor Elijah, nor the prophet?” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 26,
		"sectionNumber": 1,
		"value": "John answered them, “I baptize in water, but among you stands one whom you don’t know.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 27,
		"sectionNumber": 1,
		"value": "He is the one who comes after me, who is preferred before me, whose sandal strap I’m not worthy to loosen.”  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 28,
		"sectionNumber": 1,
		"value": "These things were done in Bethany beyond the Jordan, where John was baptizing. "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 29,
		"sectionNumber": 1,
		"value": "The next day, he saw Jesus coming to him, and said, “Behold, the Lamb of God, who takes away the sin of the world!  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 30,
		"sectionNumber": 1,
		"value": "This is he of whom I said, ‘After me comes a man who is preferred before me, for he was before me.’  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 31,
		"sectionNumber": 1,
		"value": "I didn’t know him, but for this reason I came baptizing in water: that he would be revealed to Israel.”  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 32,
		"sectionNumber": 1,
		"value": "John testified, saying, “I have seen the Spirit descending like a dove out of heaven, and it remained on him.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 33,
		"sectionNumber": 1,
		"value": "I didn’t recognize him, but he who sent me to baptize in water said to me, ‘On whomever you will see the Spirit descending and remaining on him is he who baptizes in the Holy Spirit.’  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 34,
		"sectionNumber": 1,
		"value": "I have seen, and have testified that this is the Son of God.” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 35,
		"sectionNumber": 1,
		"value": "Again, the next day, John was standing with two of his disciples,  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 36,
		"sectionNumber": 1,
		"value": "and he looked at Jesus as he walked, and said, “Behold, the Lamb of God!”  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 37,
		"sectionNumber": 1,
		"value": "The two disciples heard him speak, and they followed Jesus.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 38,
		"sectionNumber": 1,
		"value": "Jesus turned and saw them following, and said to them, “What are you looking for?” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 38,
		"sectionNumber": 2,
		"value": "They said to him, “Rabbi” (which is to say, being interpreted, Teacher), “where are you staying?” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 39,
		"sectionNumber": 1,
		"value": "He said to them, “Come, and see.” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 39,
		"sectionNumber": 2,
		"value": "They came and saw where he was staying, and they stayed with him that day. It was about the tenth hour.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 40,
		"sectionNumber": 1,
		"value": "One of the two who heard John and followed him was Andrew, Simon Peter’s brother.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 41,
		"sectionNumber": 1,
		"value": "He first found his own brother, Simon, and said to him, “We have found the Messiah!” (which is, being interpreted, Christ).  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 42,
		"sectionNumber": 1,
		"value": "He brought him to Jesus. Jesus looked at him, and said, “You are Simon the son of Jonah. You shall be called Cephas” (which is by interpretation, Peter).  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 43,
		"sectionNumber": 1,
		"value": "On the next day, he was determined to go out into Galilee, and he found Philip. Jesus said to him, “Follow me.”  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 44,
		"sectionNumber": 1,
		"value": "Now Philip was from Bethsaida, of the city of Andrew and Peter.  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 45,
		"sectionNumber": 1,
		"value": "Philip found Nathanael, and said to him, “We have found him, of whom Moses in the law, and the prophets, wrote: Jesus of Nazareth, the son of Joseph.” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 46,
		"sectionNumber": 1,
		"value": "Nathanael said to him, “Can any good thing come out of Nazareth?” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 46,
		"sectionNumber": 2,
		"value": "Philip said to him, “Come and see.” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 47,
		"sectionNumber": 1,
		"value": "Jesus saw Nathanael coming to him, and said about him, “Behold, an Israelite indeed, in whom is no deceit!” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 48,
		"sectionNumber": 1,
		"value": "Nathanael said to him, “How do you know me?” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 48,
		"sectionNumber": 2,
		"value": "Jesus answered him, “Before Philip called you, when you were under the fig tree, I saw you.” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 49,
		"sectionNumber": 1,
		"value": "Nathanael answered him, “Rabbi, you are the Son of God! You are King of Israel!” "
	},
	{
		"type": "paragraph end"
	},
	{
		"type": "paragraph start"
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 50,
		"sectionNumber": 1,
		"value": "Jesus answered him, “Because I told you, ‘I saw you underneath the fig tree,’ do you believe? You will see greater things than these!”  "
	},
	{
		"type": "paragraph text",
		"chapterNumber": 1,
		"verseNumber": 51,
		"sectionNumber": 1,
		"value": "He said to him, “Most certainly, I tell you all, hereafter you will see heaven opened, and the angels of God ascending and descending on the Son of Man.” "
	},
	{
		"type": "paragraph end"
	},
];

export const seedJohnData = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if data already exists to avoid duplicates
    const existingVerses = await ctx.db.query("verses").collect();
    if (existingVerses.length > 0) {
      throw new Error("Verses table already has data. Clear it first or skip seeding.");
    }

    // Insert all John data with order preservation
    const insertPromises = johnData.map((entry, index) => {
      return ctx.db.insert("verses", {
        book: "John",
        chapterNumber: entry.chapterNumber || 0, // 0 for formatting markers
        verseNumber: entry.verseNumber,
        sectionNumber: entry.sectionNumber,
        type: entry.type,
        value: entry.value,
        orderIndex: index, // Preserve original order
      });
    });

    // Execute all inserts
    await Promise.all(insertPromises);
    
    return {
      message: `Successfully seeded ${johnData.length} entries for the Book of John`,
      totalEntries: johnData.length
    };
  },
});

// Helper mutation to clear all verses (for testing)
export const clearVerses = mutation({
  args: {},
  handler: async (ctx) => {
    const allVerses = await ctx.db.query("verses").collect();
    const deletePromises = allVerses.map(verse => ctx.db.delete(verse._id));
    await Promise.all(deletePromises);
    
    return {
      message: `Cleared ${allVerses.length} verses from database`
    };
  },
});