const specialClass =
  require("../process/specialClass.process").process__select_specialClass__;

test("Should be the same Object", () => {
  let SelectClass = {
    wordToSearch: ["OwO", "sentence", "example", "This", "is", "s"],
    classToAdd: ["special-class-1", "special-class-2", "special-class-3"],
    spaceBetweenWord: true,
  };

  const PerWord = false;

  const crumbledText = [
    " ",
    "T",
    "h",
    "i",
    "s",
    " ",
    "i",
    "s",
    " ",
    "a",
    " ",
    "s",
    "h",
    "o",
    "r",
    "t",
    " ",
    "s",
    "e",
    "n",
    "t",
    "e",
    "c",
    "e",
    " ",
    "f",
    "o",
    "r",
    " ",
    "a",
    "n",
    " ",
    "e",
    "x",
    "a",
    "m",
    "p",
    "l",
    "e",
    " ",
    "t",
    "e",
    "s",
    "t",
    " ",
    "O",
    "w",
    "O",
    " ",
  ];

  const expectedObj = {
    searchWordValue: ["OwO", "sentence", "example", "This", "is", "s"],
    specialClass: ["special-class-1", "special-class-2", "special-class-3"],
    spaceBetweenWord: true,
  };

  expect(specialClass({ SelectClass, crumbledText, PerWord })).toStrictEqual(
    expectedObj
  );
});
