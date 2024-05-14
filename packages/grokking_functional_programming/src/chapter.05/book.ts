import type { Book } from "./type";

const books: Book[] = [
  {
    title: "FP in Scala",
    authors: ["Chiusano", "Bjarnason"],
  },
  {
    title: "The Hobibt",
    authors: ["Tolkien"],
  },
  {
    title: "Modern Java in Action",
    authors: ["Urma", "Fusco", "Mycroft"],
  },
];

const ret = books.map((b) => b.title).filter((t) => t.includes("Scala")).length;
console.log(ret);
