const wrappLetter = require("../process/wrappLetter.process");

function structure({ letter, cssClass }) {
  const Default = (
    <div className="container">
      <span className={cssClass}>{`LETTER: "${letter}", `}</span>
      <span className={cssClass}>{`CLASS: "${cssClass}"`}</span>
    </div>
  );
  return Default;
}
function baseStructure({ letter, cssClass, specialStructure = {} }) {
  function DEFAULT_COMPONENT({ letter, cssClass }) {
    return <span className={cssClass}>{letter}</span>;
  }

  const {
    hasModification = false,
    NewTagStructure = () => (
      <DEFAULT_COMPONENT letter={letter} cssClass={cssClass} />
    ),
  } = specialStructure;

  return hasModification ? (
    <NewTagStructure />
  ) : (
    <DEFAULT_COMPONENT letter={letter} cssClass={cssClass} />
  );
}

// if the user has a custom structure here it will be changed by it

test("Should be return the same array", () => {
  const Structure = structure || baseStructure;

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

  const arrWrapp = [
    ["T", "class special-class-1"],
    ["h", "class special-class-1"],
    ["i", "class special-class-1"],
    ["s", "class special-class-1"],
    [" ", "class"],
    ["i", "class special-class-1"],
    ["s", "class special-class-1"],
    [" ", "class"],
    ["a", "class"],
    [" ", "class"],
    ["s", "class"],
    ["h", "class"],
    ["o", "class"],
    ["r", "class"],
    ["t", "class"],
    [" ", "class"],
    ["s", "class special-class-1"],
    ["e", "class"],
    ["n", "class"],
    ["t", "class"],
    ["e", "class"],
    ["c", "class"],
    ["e", "class"],
    [" ", "class"],
    ["f", "class"],
    ["o", "class"],
    ["r", "class"],
    [" ", "class"],
    ["a", "class"],
    ["n", "class"],
    [" ", "class"],
    ["e", "class special-class-3"],
    ["x", "class special-class-3"],
    ["a", "class special-class-3"],
    ["m", "class special-class-3"],
    ["p", "class special-class-3"],
    ["l", "class special-class-3"],
    ["e", "class special-class-3"],
    [" ", "class"],
    ["t", "class"],
    ["e", "class"],
    ["s", "class"],
    ["t", "class"],
    [" ", "class"],
    ["O", "class special-class-1"],
    ["w", "class special-class-1"],
    ["O", "class special-class-1"],
  ];

  const wrappResponse = wrappLetter.WrappLetter({
    SelectClass: {
      searchWordValue: ["OwO", "sentence", "example", "This", "is", "s"],
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

  //   console.log(wrappResponse);

  expect(wrappResponse).toStrictEqual(arrWrapp);
});
