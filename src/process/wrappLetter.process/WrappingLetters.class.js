export class LettersWrapping {
  constructor(wrappingElement, index, props) {
    this.wrappingElement = wrappingElement;
    this.index = index;
    this.props = props;
  }

  Comprobation(PerWord, arrayToComprobate) {
    const arrComprobations = [
      !PerWord,
      arrayToComprobate.length > 0,
      arrayToComprobate.some((element) => this.wrappingElement === element[0]),
      arrayToComprobate.some(
        (element) =>
          this.index + element.length <= this.props.crumbledText.length
      ),
      // Here the code will check if an element is same with a slice of its length
      arrayToComprobate.some(
        (el) =>
          this.props.crumbledText
            .slice(this.index, this.index + el.length)
            .join("") === el
      ),
    ];

    return arrComprobations.every((currentValue) => currentValue === true);
  }

  // check if the element has white space before and after it when spw is true
  SPW(spw) {
    if (spw) {
      let firstWhiteSpace = this.props.crumbledText[this.index - 1] === " ";
      let lastWhiteSpace = this.props.crumbledText.indexOf(" ", this.index);
      let choppedWord = this.props.crumbledText
        .slice(this.index, lastWhiteSpace)
        .join("");

      return !this.props.SelectClass.searchWordValue.some((element) => {
        let choppedWordCoditional = choppedWord === element;

        return (
          choppedWordCoditional &&
          firstWhiteSpace &&
          this.props.crumbledText[lastWhiteSpace] === " "
        );
      });
    }
  }
}
