import { WrappLetter } from "../process/wrappLetter.process";
import { __TextOptions__process__ as textOptionsP } from "../process/textOptions/textOptions.class";
import { __Structure__process__ } from "../process/structure/structure.class";

import {
  sentenceToTest,
  CustomStructure,
  CustomStructure1,
} from "./textArrays";
import { Letter } from "./letters";

/**
 * @param  {boolean} spwSC
 * @param  {boolean} spwSW
 * @param  {boolean} PerWord
 */
function entriesCreator({ spwSC = false, spwSW = false, PerWord = false }) {
  const CHANGES = [
    { SC: false, SW: false },
    { SC: true, SW: false },
    { SC: false, SW: true },
    { SC: true, SW: true },
  ];

  return CHANGES.map((el) => {
    return new textOptionsP(
      {
        ClassToAdd: "class",
        SelectClass: el.SC
          ? {
              wordToSearch: ["This", ["is", "en"]],
              classToAdd: ["class-1", "class-2"],
              spaceBetweenWord: spwSC,
            }
          : {},
        SpecialWrapp: el.SW
          ? {
              wordToSearch: ["a", ["ce", "!!!"], "se"],
              structureToAdd: [CustomStructure, CustomStructure1],
              spaceBetweenWord: spwSW,
            }
          : {},
        PerWord: PerWord,
      },
      sentenceToTest
    );
  });
}

describe("Running a lot situation", () => {
  const EXPECTED = [
    // without features
    [
      new Letter("T"),
      new Letter("h"),
      new Letter("i"),
      new Letter("s"),
      new Letter(" "),
      new Letter("i"),
      new Letter("s"),
      new Letter(" "),
      new Letter("a"),
      new Letter(" "),
      new Letter("s"),
      new Letter("e"),
      new Letter("n"),
      new Letter("t"),
      new Letter("e"),
      new Letter("n"),
      new Letter("c"),
      new Letter("e"),
      new Letter("!"),
      new Letter("!"),
      new Letter("!"),
    ],

    // Only SelectClass
    [
      new Letter("T", "class-1"),
      new Letter("h", "class-1"),
      new Letter("i", "class-1"),
      new Letter("s", "class-1"),
      new Letter(" "),
      new Letter("i", "class-2"),
      new Letter("s", "class-2"),
      new Letter(" "),
      new Letter("a"),
      new Letter(" "),
      new Letter("s"),
      new Letter("e", "class-2"),
      new Letter("n", "class-2"),
      new Letter("t"),
      new Letter("e", "class-2"),
      new Letter("n", "class-2"),
      new Letter("c"),
      new Letter("e"),
      new Letter("!"),
      new Letter("!"),
      new Letter("!"),
    ],

    // Only SpecialWrapp
    [
      new Letter("T"),
      new Letter("h"),
      new Letter("i"),
      new Letter("s"),
      new Letter(" "),
      new Letter("i"),
      new Letter("s"),
      new Letter(" "),
      new Letter("a", "", CustomStructure),
      new Letter(" "),
      new Letter("s", "", CustomStructure),
      new Letter("e", "", CustomStructure),
      new Letter("n"),
      new Letter("t"),
      new Letter("e"),
      new Letter("n"),
      new Letter("c", "", CustomStructure1),
      new Letter("e", "", CustomStructure1),
      new Letter("!", "", CustomStructure1),
      new Letter("!", "", CustomStructure1),
      new Letter("!", "", CustomStructure1),
    ],

    // Both features
    [
      new Letter("T", "class-1"),
      new Letter("h", "class-1"),
      new Letter("i", "class-1"),
      new Letter("s", "class-1"),
      new Letter(" "),
      new Letter("i", "class-2"),
      new Letter("s", "class-2"),
      new Letter(" "),
      new Letter("a", "", CustomStructure),
      new Letter(" "),
      new Letter("s", "", CustomStructure),
      new Letter("e", "", CustomStructure),
      new Letter("n"),
      new Letter("t"),
      new Letter("e", "class-2"),
      new Letter("n", "class-2"),
      new Letter("c", "", CustomStructure1),
      new Letter("e", "", CustomStructure1),
      new Letter("!", "", CustomStructure1),
      new Letter("!", "", CustomStructure1),
      new Letter("!", "", CustomStructure1),
    ],
  ];

  // selectClass y specialWrapp SPW false PW false
  // 1. selectClass SPW false
  // 2. specialWrapp SPW false
  // 3. selectClass y specialWrapp SPW false
  // 4. over writting;
  // selectClass y specialWrapp SPW false true PW false
  // selectClass y specialWrapp SPW true false PW false
  // selectClass y specialWrapp SPW true true PW false
  // selectClass y specialWrapp PW true

  /*
  entry: Here is the change
  output: [[result1],[result2],[result3]]
  */
  test("SelectClass and SpecialWrapp with SPW false and PW false", () => {
    const ENTRIES = entriesCreator({
      spwSC: false,
      spwSW: false,
      PerWord: false,
    });

    const Results = ENTRIES.map((el) => {
      const STRUCTURE = new __Structure__process__(
        new Function(),
        el.ClassToAdd.process
      );

      return WrappLetter(el, STRUCTURE, true);
    });

    expect(Results).toStrictEqual(EXPECTED);
  });
});

// if the user has a custom structure here it will be changed by it

// test.skip("Should be return the same array (SBW: true)", () => {
//   const Structure = structure || baseStructure;

//   const arrWrapp = [
//     ["T", "class special-class-1"],
//     ["h", "class special-class-1"],
//     ["i", "class special-class-1"],
//     ["s", "class special-class-1"],
//     [" ", "class"],
//     ["i", "class special-class-1"],
//     ["s", "class special-class-1"],
//     [" ", "class"],
//     ["a", "class special-class-1"],
//     [" ", "class"],
//     ["s", "class special-class-1"],
//     ["h", "class special-class-1"],
//     ["o", "class special-class-1"],
//     ["r", "class special-class-1"],
//     ["t", "class special-class-1"],
//     [" ", "class"],
//     ["s", "class special-class-3"],
//     ["e", "class special-class-3"],
//     ["n", "class special-class-3"],
//     ["t", "class special-class-3"],
//     ["e", "class special-class-3"],
//     ["c", "class special-class-3"],
//     ["e", "class special-class-3"],
//     [" ", "class"],
//     ["f", "class"],
//     ["o", "class"],
//     ["r", "class"],
//     [" ", "class"],
//     ["a", "class"],
//     ["n", "class"],
//     [" ", "class"],
//     ["e", "class special-class-1"],
//     ["x", "class special-class-1"],
//     ["a", "class special-class-1"],
//     ["m", "class special-class-1"],
//     ["p", "class special-class-1"],
//     ["l", "class special-class-1"],
//     ["e", "class special-class-1"],
//     [" ", "class"],
//     ["t", "class"],
//     ["e", "class"],
//     ["s", "class"],
//     ["t", "class"],
//     [" ", "class"],
//     ["O", "class special-class-2"],
//     ["w", "class special-class-2"],
//     ["O", "class special-class-2"],
//   ];

//   const wrappResponse = WrappLetter({
//     SelectClass: {
//       searchWordValue: [
//         "a",
//         "OwO",
//         "sentence",
//         "sent",
//         "short",
//         "example",
//         "This",
//         "is",
//       ],
//       specialClass: ["special-class-1", "special-class-2", "special-class-3"],
//       spaceBetweenWord: true,
//     },
//     crumbledText,
//     ClassToAdd: "class",
//     Structure,
//     specialStructure: false,
//     PerWord: false,
//     test: true,
//   });

//   expect(wrappResponse).toStrictEqual(arrWrapp);
// });

// test.skip("Should be return the same array (PerWord: true)", () => {
//   const Structure = structure || baseStructure;

//   const crumbledText = [
//     "This",
//     "is",
//     "a",
//     "short",
//     "sentece",
//     "for",
//     "an",
//     "example",
//     "test",
//     "OwO",
//   ];

//   const arrWrapp = [
//     ["This ", "class special-class-1"],
//     ["is ", "class special-class-1"],
//     ["a ", "class special-class-1"],
//     ["short ", "class special-class-1"],
//     ["sentece ", "class special-class-3"],
//     ["for ", "class"],
//     ["an ", "class"],
//     ["example ", "class special-class-1"],
//     ["test ", "class"],
//     ["OwO", "class special-class-2"],
//   ];

//   const wrappResponse = WrappLetter({
//     SelectClass: {
//       searchWordValue: [
//         "a",
//         "OwO",
//         "sentence",
//         "sent",
//         "short",
//         "example",
//         "This",
//         "is",
//       ],
//       specialClass: ["special-class-1", "special-class-2", "special-class-3"],
//       spaceBetweenWord: false,
//     },
//     crumbledText,
//     ClassToAdd: "class",
//     Structure,
//     specialStructure: false,
//     PerWord: true,
//     test: true,
//   });

//   expect(wrappResponse).toStrictEqual(arrWrapp);
// });
