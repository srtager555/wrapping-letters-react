export class LettersWrapping {
  constructor(wrappingElement, crumbledText, index, props) {
    this.wrappingElement = wrappingElement;
    this.index = index;
    this.props = props;
    this.crumbledText = crumbledText;
  }

  getSpecialArrayResults(el) {
    if (!el.SpecialArray) throw new Error("specialArray not support");

    const ARR = el.SpecialArray.targets.flat();
    let word;

    if (!this.props.PerWord.process) {
      if (this.#COMPROBATION(ARR)) {
        word = this.#FIND_WORD_PER_LEETTERS(ARR, el);
      }
    } else word = ARR.find((el) => el === this.wrappingElement);

    return word;
  }

  #COMPROBATION(arrayToComprobate) {
    const arrComprobations = [
      arrayToComprobate.length > 0,
      arrayToComprobate.some((element) => this.wrappingElement === element[0]),
      arrayToComprobate.some(
        (element) => this.index + element.length <= this.crumbledText.length
      ),
      // Here the code will check if an element is same with a slice of its length
      arrayToComprobate.some((el) => {
        return (
          this.crumbledText
            .slice(this.index, this.index + el.length)
            .join("") === el
        );
      }),
    ];

    return arrComprobations.every((currentValue) => currentValue === true);
  }

  // check if the element has white space before and after it when spw is true
  SPW(spw) {
    if (spw) {
      let firstWhiteSpace = this.crumbledText[this.index - 1] === " ";
      let lastWhiteSpace = this.crumbledText.indexOf(" ", this.index);
      let choppedWord = this.crumbledText
        .slice(this.index, lastWhiteSpace)
        .join("");

      return !this.props.SelectClass.searchWordValue.some((element) => {
        let choppedWordCoditional = choppedWord === element;

        return (
          choppedWordCoditional &&
          firstWhiteSpace &&
          this.crumbledText[lastWhiteSpace] === " "
        );
      });
    }
  }

  #FIND_WORD_PER_LEETTERS(arrayOfWords, el) {
    let newCrumbledWord = arrayOfWords.flat().filter((element) => {
      // here the code will cut the "word" from the array

      let choppedWord = this.crumbledText
        .slice(this.index, this.index + element.length)
        .join("");

      if (el.process.spaceBetweenWord) {
        // here the code will checks if the "word" has whitespace
        // before and after
        if (this.crumbledText[this.index - 1] !== " ") return false;

        if (this.crumbledText[this.index + element.length] !== " ")
          return false;
      }

      return choppedWord === element;
    });

    return newCrumbledWord;
  }
}
