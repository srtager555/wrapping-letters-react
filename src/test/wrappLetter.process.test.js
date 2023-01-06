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

describe("Running a lot situation about the output inside an Array", () => {
  const emptyResult = [
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
  ];

  const SelectClassSBWfalse = [
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
  ];

  const SelectClassSBWtrue = [
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
  ];

  const SpecialWrappSBWfalse = [
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
  ];

  const SpecialWrappSBWtrue = [
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

  test("SelectClass and SpecialWrapp with SPW false and PW false", () => {
    const ENTRIES = entriesCreator({
      spwSC: false,
      spwSW: false,
      PerWord: false,
    });

    const EXPECTED = [
      // without features
      emptyResult,

      // Only SelectClass
      SelectClassSBWfalse,

      // Only SpecialWrapp
      SpecialWrappSBWfalse,

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

    const Results = ENTRIES.map((el) => {
      const STRUCTURE = new __Structure__process__(
        undefined,
        el.ClassToAdd.process
      );

      return WrappLetter(el, STRUCTURE, true);
    });

    expect(Results).toStrictEqual(EXPECTED);
  });

  test("SelectClass and SpecialWrapp with SPW true false and PW false", () => {
    const ENTRIES = entriesCreator({
      spwSC: true,
      spwSW: false,
      PerWord: false,
    });

    const EXPECTED = [
      // without features
      emptyResult,

      // Only SelectClass
      SelectClassSBWtrue,

      // Only SpecialWrapp
      SpecialWrappSBWfalse,

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
        new Letter("e"),
        new Letter("n"),
        new Letter("c", "", CustomStructure1),
        new Letter("e", "", CustomStructure1),
        new Letter("!", "", CustomStructure1),
        new Letter("!", "", CustomStructure1),
        new Letter("!", "", CustomStructure1),
      ],
    ];

    const Results = ENTRIES.map((el) => {
      const STRUCTURE = new __Structure__process__(
        undefined,
        el.ClassToAdd.process
      );

      return WrappLetter(el, STRUCTURE, true);
    });

    expect(Results).toStrictEqual(EXPECTED);
  });

  test("SelectClass and SpecialWrapp with SPW false true and PW false", () => {
    const ENTRIES = entriesCreator({
      spwSC: false,
      spwSW: true,
      PerWord: false,
    });

    const EXPECTED = [
      // without features
      emptyResult,

      // Only SelectClass
      SelectClassSBWfalse,

      // Only SpecialWrapp
      SpecialWrappSBWtrue,

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
    ];

    const Results = ENTRIES.map((el) => {
      const STRUCTURE = new __Structure__process__(
        undefined,
        el.ClassToAdd.process
      );

      return WrappLetter(el, STRUCTURE, true);
    });

    expect(Results).toStrictEqual(EXPECTED);
  });

  test("SelectClass and SpecialWrapp with SPW true true and PW false", () => {
    const ENTRIES = entriesCreator({
      spwSC: true,
      spwSW: true,
      PerWord: false,
    });

    const EXPECTED = [
      // without features
      emptyResult,

      // Only SelectClass
      SelectClassSBWtrue,

      // Only SpecialWrapp
      SpecialWrappSBWtrue,

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
    ];

    const Results = ENTRIES.map((el) => {
      const STRUCTURE = new __Structure__process__(
        undefined,
        el.ClassToAdd.process
      );

      return WrappLetter(el, STRUCTURE, true);
    });

    expect(Results).toStrictEqual(EXPECTED);
  });

  test("SelectClass and SpecialWrapp with SPW false and PW true", () => {
    const ENTRIES = entriesCreator({
      spwSC: false,
      spwSW: false,
      PerWord: true,
    });

    const EXPECTED = [
      // without features
      [
        new Letter("This "),
        new Letter("is "),
        new Letter("a "),
        new Letter("sentence!!!"),
      ],
      // Only SelectClass
      [
        new Letter("This ", "class-1"),
        new Letter("is ", "class-2"),
        new Letter("a "),
        new Letter("sentence!!!"),
      ],
      // Only SpecialWrapp
      [
        new Letter("This "),
        new Letter("is "),
        new Letter("a ", "", CustomStructure),
        new Letter("sentence!!!"),
      ],

      // Both features
      [
        new Letter("This ", "class-1"),
        new Letter("is ", "class-1"),
        new Letter("a ", "", CustomStructure),
        new Letter("sentence!!!"),
      ],
    ];

    const Results = ENTRIES.map((el) => {
      const STRUCTURE = new __Structure__process__(
        undefined,
        el.ClassToAdd.process
      );

      return WrappLetter(el, STRUCTURE, true);
    });

    expect(Results).toStrictEqual(EXPECTED);
  });
});
