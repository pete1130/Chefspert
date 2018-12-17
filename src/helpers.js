export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getStoreName() {
  const adjectives = [
    "Beautiful",
    "Elegant",
    "Fancy",
    "Glamorous",
    "Handsome",
    "Magnificent",
    "Sparkling",
    "Fierce",
    "Achiever",
    "Active",
    "Adaptable",
    "Ambitious",
    "Balanced",
    "Cheerful",
    "Devoted",
    "Enthusiastic",
    "Exciting",
    "Fast",
    "Focused",
    "Generous",
    "Genuine",
    "Imaginative",
    "Incredible",
    "Insightful",
    "Interesting",
    "Inventive",
    "Knowledgeable",
    "Logical",
    "Modest",
    "Organized",
    "Original",
    "Outgoing",
    "Perceptive",
    "Personable",
    "Persuasive",
    "Pleasant",
    "Positive",
    "Practical",
    "Proactive",
    "Quality",
    "Quirky",
    "Skilled",
    "Thoughtful",
    "Trustworthy",
    "Wise"

  ];

  const names = [
    "Liam",
    "Noah",
    "Pete",
    "William",
    "James",
    "Logan",
    "Benjamin",
    "Mason",
    "Elijah",
    "Oliver",
    "Jacob",
    "Alexander",
    "Matthew",
    "Aiden",
    "Carter",
    "Anthony",
    "Emma",
    "Olivia",
    "Sophia",
    "Isabella",
    "Ava",
    "Mia",
    "Emily",
    "Grace",
    "Zoey",
    "Natalie",
    "Addison",
    "Lilly",
    "Hannah",
    "Brooklyn"
  ];

  return `${rando(adjectives)} ${rando(names)}`;
}
