import { pipe } from "fp-ts/function";
import { Option, some, map, Apply } from "fp-ts/Option";
import { sequenceS } from "fp-ts/Apply";

type TvShow = {
  name: string;
  yearStart: number;
  yearEnd: number;
};

function extractName(rawShow: string): Option<string> {
  return some("Example Name");
}

function extractYearStart(rawShow: string): Option<number> {
  return some(2000);
}

function extractYearEnd(rawShow: string): Option<number> {
  return some(2004);
}

function parseShow(rawShow: string): Option<TvShow> {
  return pipe(
    sequenceS(Apply)({
      name: extractName(rawShow),
      yearStart: extractYearStart(rawShow),
      yearEnd: extractYearEnd(rawShow),
    }),
    map(({ name, yearStart, yearEnd }) => ({
      name,
      yearStart,
      yearEnd,
    }))
  );
}

// 使用例
const rawShow = "Some raw show data";
const parsedShow = parseShow(rawShow);
console.log(parsedShow);
