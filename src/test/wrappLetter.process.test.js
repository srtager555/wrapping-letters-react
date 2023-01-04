import { WrappLetter } from "../process/wrappLetter.process";
import { __TextOptions__process__ as textOptionsP, __TextOptions__process__ } from "../process/textOptions/textOptions.class";

import {
  sentenceToTest,
  CustomStructure,
  CustomStructure1,
} from "./textArrays";

function entriesCreator({ spwSC, spwSW, PerWord = false }) {
  const CHANGES = [
    { SC: false, SW: false },
    { SC: true, SW: false },
    { SC: false, SW: true },
    { SC: true, SW: true },
  ];

  return CHANGES.map((el) => {
    return new __TextOptions__process__({
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
            wordToSearch: ["a", ["ce", "ce", "!!!"]],
            structureToAdd: [CustomStructure, CustomStructure1],
            spaceBetweenWord: spwSW,
          }
        : {},
      PerWord: PerWord,
    }, sentenceToTest);
  });
}

describe("Running a lot situation", () => {
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
   // A function to iterate to create custom entries xd
   const ENTRIES = entriesCreator();

   const 
  });
});

// if the user has a custom structure here it will be changed by it

test("Should be return the same array (SBW: true)", () => {
  const Structure = structure || baseStructure;

  const arrWrapp = [
    ["T", "class special-class-1"],
    ["h", "class special-class-1"],
    ["i", "class special-class-1"],
    ["s", "class special-class-1"],
    [" ", "class"],
    ["i", "class special-class-1"],
    ["s", "class special-class-1"],
    [" ", "class"],
    ["a", "class special-class-1"],
    [" ", "class"],
    ["s", "class special-class-1"],
    ["h", "class special-class-1"],
    ["o", "class special-class-1"],
    ["r", "class special-class-1"],
    ["t", "class special-class-1"],
    [" ", "class"],
    ["s", "class special-class-3"],
    ["e", "class special-class-3"],
    ["n", "class special-class-3"],
    ["t", "class special-class-3"],
    ["e", "class special-class-3"],
    ["c", "class special-class-3"],
    ["e", "class special-class-3"],
    [" ", "class"],
    ["f", "class"],
    ["o", "class"],
    ["r", "class"],
    [" ", "class"],
    ["a", "class"],
    ["n", "class"],
    [" ", "class"],
    ["e", "class special-class-1"],
    ["x", "class special-class-1"],
    ["a", "class special-class-1"],
    ["m", "class special-class-1"],
    ["p", "class special-class-1"],
    ["l", "class special-class-1"],
    ["e", "class special-class-1"],
    [" ", "class"],
    ["t", "class"],
    ["e", "class"],
    ["s", "class"],
    ["t", "class"],
    [" ", "class"],
    ["O", "class special-class-2"],
    ["w", "class special-class-2"],
    ["O", "class special-class-2"],
  ];

  const wrappResponse = WrappLetter({
    SelectClass: {
      searchWordValue: [
        "a",
        "OwO",
        "sentence",
        "sent",
        "short",
        "example",
        "This",
        "is",
      ],
      specialClass: ["special-class-1", "special-class-2", "special-class-3"],
      spaceBetweenWord: true,
    },
    crumbledText,
    ClassToAdd: "class",
    Structure,
    specialStructure: false,
    PerWord: false,
    test: true,
  });

  expect(wrappResponse).toStrictEqual(arrWrapp);
});

test("Should be return the same array (PerWord: true)", () => {
  const Structure = structure || baseStructure;

  const crumbledText = [
    "This",
    "is",
    "a",
    "short",
    "sentece",
    "for",
    "an",
    "example",
    "test",
    "OwO",
  ];

  const arrWrapp = [
    ["This ", "class special-class-1"],
    ["is ", "class special-class-1"],
    ["a ", "class special-class-1"],
    ["short ", "class special-class-1"],
    ["sentece ", "class special-class-3"],
    ["for ", "class"],
    ["an ", "class"],
    ["example ", "class special-class-1"],
    ["test ", "class"],
    ["OwO", "class special-class-2"],
  ];

  const wrappResponse = WrappLetter({
    SelectClass: {
      searchWordValue: [
        "a",
        "OwO",
        "sentence",
        "sent",
        "short",
        "example",
        "This",
        "is",
      ],
      specialClass: ["special-class-1", "special-class-2", "special-class-3"],
      spaceBetweenWord: false,
    },
    crumbledText,
    ClassToAdd: "class",
    Structure,
    specialStructure: false,
    PerWord: true,
    test: true,
  });

  expect(wrappResponse).toStrictEqual(arrWrapp);
});
