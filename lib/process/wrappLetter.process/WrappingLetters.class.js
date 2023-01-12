"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LettersWrapping = void 0;

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _COMPROBATION = /*#__PURE__*/new WeakSet();

var _FIND_WORD_PER_LEETTERS = /*#__PURE__*/new WeakSet();

class LettersWrapping {
  constructor(wrappingElement, crumbledText, index, props) {
    _classPrivateMethodInitSpec(this, _FIND_WORD_PER_LEETTERS);

    _classPrivateMethodInitSpec(this, _COMPROBATION);

    this.wrappingElement = wrappingElement;
    this.index = index;
    this.props = props;
    this.crumbledText = crumbledText;
  }
  /**
   * @param  {} el this function is to get the special word.
   * @returns The word target if it's in the specialArray, else if will return the current element to wrapp.
   */


  getSpecialArrayTarget(el) {
    if (!el.SpecialArray) throw new Error("[specialArray] not support"); // if the options empty, the function will stopped

    if (!(el.SpecialArray.target != undefined) && !(el.SpecialArray.elementsToGive != undefined)) {
      return this.wrappingElement;
    }

    const ARR = el.SpecialArray.targets.flat();
    let word;

    if (!this.props.PerWord.process) {
      if (_classPrivateMethodGet(this, _COMPROBATION, _COMPROBATION2).call(this, ARR)) {
        word = _classPrivateMethodGet(this, _FIND_WORD_PER_LEETTERS, _FIND_WORD_PER_LEETTERS2).call(this, ARR, el);
      }
    } else word = ARR.find(el => el === this.wrappingElement);

    return word ??= this.wrappingElement;
  }

  // check if the element has white space before and after it when spw is true
  SPW(spw) {
    if (spw) {
      let firstWhiteSpace = this.crumbledText[this.index - 1] === " ";
      let lastWhiteSpace = this.crumbledText.indexOf(" ", this.index);
      let choppedWord = this.crumbledText.slice(this.index, lastWhiteSpace).join("");
      return !this.props.SelectClass.searchWordValue.some(element => {
        let choppedWordCoditional = choppedWord === element;
        return choppedWordCoditional && firstWhiteSpace && this.crumbledText[lastWhiteSpace] === " ";
      });
    }
  }

}

exports.LettersWrapping = LettersWrapping;

function _COMPROBATION2(arrayToComprobate) {
  const arrComprobations = [arrayToComprobate.length > 0, arrayToComprobate.some(element => this.wrappingElement === element[0]), arrayToComprobate.some(element => this.index + element.length <= this.crumbledText.length), // Here the code will check if an element is same with a slice of its length
  arrayToComprobate.some(el => {
    return this.crumbledText.slice(this.index, this.index + el.length).join("") === el;
  })];
  return arrComprobations.every(currentValue => currentValue === true);
}

function _FIND_WORD_PER_LEETTERS2(arrayOfWords, el) {
  let newCrumbledWord = arrayOfWords.flat().find(element => {
    // here the code will cut the "word" from the array
    let choppedWord = this.crumbledText.slice(this.index, this.index + element.length).join("");

    if (el.process.spaceBetweenWord) {
      // here the code will checks if the "word" has whitespace
      // before and after
      if (this.crumbledText[this.index - 1] !== " ") return false;
      if (this.crumbledText[this.index + element.length] !== " ") return false;
    }

    return choppedWord === element;
  });
  return newCrumbledWord;
}