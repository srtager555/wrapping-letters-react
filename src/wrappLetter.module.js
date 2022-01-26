import React from "react";

export function WrappLetter({
    SelectClass = {
       searchWordValue: 0,
       searchWordValueLength: 0,
       specialClass: "",
    },
    text,
    ClassToAdd,
    Structure,
    specialStructure = false,
 }) {
    let { searchWordValue, searchWordValueLength, specialClass } = SelectClass;
 
    var wrappedLetters = text.map((letter, index) => {
       if (
          searchWordValue.length > 0 &&
          letter === searchWordValue[0] &&
          index + searchWordValueLength <= text.length &&
          text.slice(index, index + searchWordValueLength).join("") ===
             searchWordValue.join("")
       ) {
          const newText = text.slice(index, index + searchWordValueLength);
 
          var wl = newText.map((letter) => {
             return (
                <Structure
                   letter={letter}
                   cssClass={
                      !specialStructure
                         ? [ClassToAdd, specialClass].join(" ")
                         : specialClass
                   }
                   key={`${letter} ${index}-${Math.random()}`}
                />
             );
          });
          text.splice(index, searchWordValueLength - 1);
          return wl;
       } else {
          return (
             <Structure
                letter={letter}
                cssClass={!specialStructure ? ClassToAdd : ""}
                key={`${letter} ${index}-${Math.random()}`}
             />
          );
       }
    });
 
    return wrappedLetters;
 }