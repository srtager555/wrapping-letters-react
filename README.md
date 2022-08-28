# Wrapping-Letters

WRAPPING LETTERS IS A REACT LIBRARY(come soon for JS) THAT
SIMPLIFIES THE JOB OF WRAPPING LETTERS IN HTML TAGS

## New upgrades

2.2.0

The new property is here!!!

The `SpecialWrapp` is the new property for Wrapping Letters in the 2.2.0.

Create your custom wrapp for your text with this new
property!

- 2.2.1 Error when specialWrapp was not in component props resolved

- 2.2.2 New documentation added with new customitation in "SpecialWrapp"

  2.3.0

This upgrade is very small.

- now you do can get the index in `structure` for you sintaxis.

## News

- Are you have a idea for the library?, share the idea in github(in issue section)

- I working now in the demo page from the wrapping-letters

## How to use

Wrapping letters is so easy to use!:

```
import React from "react";
import WrappingLetters from "wrapping-letters-react";


function App() {
  return <WrappingLetters  />;
}

export default App;

```

Wrapping Letters is a component for react with the goal of to simplify
the job to wrap letters, call the component and that's ready to use.  
its has a default text is: "Hello world!!! <3".

The component `<WrappingLetters />` always returns each letter of
the text or phrase within a `<span />` each letter.

`!IMPORTANT`
The component only returns the single letters, they are not inside
any extra tag.

```
  <span>H</span>
  <span>e</span>
  <span>l</span>
  <span>l</span>
  <span>...</span>
```

If you want modifies the text, call the prop "text", this prop only
accept strings

```
<WrappingLetters text="I'm the new text" />
```

Now you can add a special options to the text, is so easy!:

```
<WrappingLetters
    text="I'm the new text"
    textOptions={
        {
            "ClassToAdd": "letter-wrapp",

            "SelectClass": {
              wordToSearch: "the",
              classToAdd: "Im-the-new-class",
              spaceBetweenWord: false,
            }
        },
    }
/>
```

`textOptions` is the new prop in 1.1.0, with this you can select
a special class for a word or phrase, put a class for all letters or both

#

## How to add a class for all letters

```
textOptions={
        {
            "ClassToAdd": "letter-wrapp",
        },
    }

```

The atribute `"ClassToAdd"` of the new prop is your solution

`"ClassToAdd"` places the class of your choice in the `<span>`

Is so easy to use, call the attribute and places the class of your choice

`"ClassToAdd"` only accept Strings.

#

## How to add a special class for a word or phrase(or letters)

```
  text="WrappingLetters"
  textOptions={
        {
            "SelectClass": {
              wordToSearch: "ping",
              classToAdd: "Im-the-new-class",
              spaceBetweenWord: false,
            }
        },
    }
```

`"SelectClass"` is the solution for this problem.

`"SelectClass"` is a object it can a search a word, phrase or letters
in the sentence, is so easy to use:

- `wordToSearch: <String>` is the word to search for, but you can search for more word with an `[Array]` these Arrays are called "special array".

- `classToAdd: <String>` is the class to add a the `<span>`, You can add more specialClass with an `[Array]`, The code will put the class depending of its index, for example:

- `spaceBetweenWord: <Boolean>` is the a conditional for the search (default is `false`).

  For example: `wordToSearch: "ping"` has the word `"ping"`
  but the algorithm can search for a word within other words and also
  being alone, `spaceBeetwenWord` in ` true` only allows
  searching for the word alone, in `false` searches everywhere

  `IMPORTANT!`

  `"SelectClass"` look for all the times the word is repeated,
  `spaceBetweenWord`
  is important for avoiding problems

#

## Special Array, find more with less

find more information with 2 arrays, sooooo easy to use!

```

// You put 3 words to search

wordToSearch: ["cheese", "rice", "eggs"]

// the code will select the index of the word and
// will check what the class is in the array.

classToAdd: ["class-1", "class-2"]

// if the index of the word is greater than that of
// the length of the array of specialClass, it'll
// select the first class.

return
    // PerWord: true
    <span class="class-1">cheese </span>
    <span class="class-2">rice </span>
    <span class="class-1">eggs</span>

```

This is only a example, "special Array" has support with any property in Wrapping Letters!!!

#

## I want a wrapp to each word

`PerWord` is an attribute of `textOptions` to wrap each word instead of wrapping each letter (default is false)

Is very easy to use:

```
    <WrappingLetters
         text="Carlos is a good person, but Carlos is a bad person"
         textOptions={
            {
               ClassToAdd: "class",
               SelectClass: {
                  wordToSearch: "Carlos",
                  classToAdd: "special-class",
               },
               PerWord: true,
            },
         }
    />
```

the return is:

```
    <span class="class special-class">Carlos </span>
    <span class="class">is </span>
    <span class="class">a </span>
    <span class="class">good </span>
    <span class="class">person, </span>
    //...
```

`!IMPORTANT`

When `PerWord` is true, `spaceBetweenWord` always is disabled. `wordToSearch`
must be a single word, spaces break the search.

THE CODE SEARCH EACH WORD BY THE SPACE HAS BETWEEN EACH WORD

#

## How to add a special `structure`

Sometimes a special structure is needed for the letters or words to be wrapped,
`structure` is the solution of this problem.

Is so easy to use:

```
import React from 'react'
import WrappingLetters from 'wrapping-letters-react'

function App(){
    return(
        <WrappingLetters
         text='This is the sentence to wrapped'
            textOptions={
                {
                    SelectClass: {
                        wordToSearch: 'sentence',
                        ClassToAdd: 'specialClass',
                        spaceBeetwenWord: true,,
                    },
                }
            }
            structure={ReactComponent}
        />
    )
}
```

`structure` modify the wrapper for more flexibility to do
animations or whatever you can think of.

#

```
// React component example

function ReactComponent({letter, cssClass }) {
    return(
        <div
            className={`container-letter ${cssClass}`}
        >
            <span className="letter-wrapp">{letter}</span>
        </div>
    )
}
```

Being able to make a personalized structure opens a new sea of ​​
possibilities for the use of Wrapping-letters

#

The list of element to send a the component for now is small:

- `letter` is the letter to wrap

- `cssClass` is the special css class

- `specialWrapp` this attribute is explaining in the next section

- `index` yeah, the index is now available.

`!IMPORTANT` The key is assigned automatically in the component

- `key` is the key :3 ('{wrappedElement}'-{indexNumber})

`!IMPORTANT`

The `classToAdd` attribute of `textOptions`,
is disable when the `structure` is active, if you want a css class
use `className` in the component.

#

## How to add a `special wrap`

The property `SpecialWrapp` is the solution for this problem!

```
<Wl
    text="This is a short sentence"
    textOptions={{
        SpecialWrapp: {
            wordToSearch: ["short", "is", "This"],
            structureToAdd: [specialTag, specialTag1],
        },
    }}
/>
```

SpecialWrapp has support with specialArray

The atribute will find the words in the text for to add a specialWrapp

Your structure will recive the following properties

- letter
- cssClass

Here a component example

```
function specialTag({ letter, cssClass }) {
    return (
        <div className={`example-class ${cssClass}`}>
            <a
                className={`another example-class`}
                href="//..."
            >
                {letter}
            </a>
        </div>
    )
}
```

Well get this problem, Do you have a `specialStruture`, but How Do you can put the `specialWrapp`? well is simple.

```
// Now your customStrucuture will recive a new prop "specialWrapp"
// With this prop do you can comprobate if the text has a "specialWrapp"

function customStrucuture({ letter, cssClass, specialWrapp }) {
    // specialWrapp is an object with this attribute.
    const { hasCustomWrapp, NewWrappStructure } = specialWrapp;

    // here will declare the components to the comprobation
    // the "Default" component, when the "hasCustomWrapp" is false
    // this is will returned
    const Default = ({ letter, cssClass }) => (
        <div className="container">
        <span className={cssClass}>{letter}</span>
        </div>
    );

    // When "hasCustomWrapp" is true this is the return
    // "NewWrappStructure" will pass to be the custom wrapp
    const CustomComponent = ({ letter, cssClass }) => (
        <div className="container">
            // I have been error when I don't put this
            // comprobation beacuase "NewWrappStrucuture"
            // is undefiend when hasCustomWrapp is false.
            {hasCustomWrapp ? (
                <NewWrappStructure letter={letter} cssClass={cssClass} />
            ) : null}
        </div>
    );


    // Now You do will make the comprobation with
    // your another params or it can be like this
    return hasCustomWrapp ? (
        <CustomComponent letter={letter} cssClass={cssClass} />
    ) : (
        <Default letter={letter} cssClass={cssClass} />
    );
}

function YourComponent() {
    // this is a simple example of WrappingLetters component
    return (
        <>
            <WrappingLetters
            text="This is a short sentence for an example test OwO"
            textOptions={{
                SpecialWrapp: {
                wordToSearch: ["for", "an", "test"],
                structureToAdd: [specialTag, specialTag1],
                },
            }}
            structure={customStructure}
            />
        </>
    );
}

// here is the custom tags
function specialTag({ letter, cssClass }) {
  return (
    <a
      className={cssClass}
      href="https://ttager.page/"
      target="_blank"
      rel="noreferrer"
    >
      {letter}
    </a>
  );
}

function specialTag1({ letter, cssClass }) {
  return (
    <a
      className={cssClass}
      href="https://ttager.page/"
      target="_blank"
      rel="noreferrer"
    >
      :D{letter}
    </a>
  );
}
```

`!IMPORTANT`
The component has priority in the `specialClass` for example:

You have this config

```
    text="This is an apple 🍎 :3"
    textOptions={{
        SelectClass: {
            wordToSearch: ["a", "apple"],
            classToAdd: "class"
        },
        SpecialWrapp: {
            wordToSearch: "an",
            structureToAdd: specialWrapp
        }
        spaceBetweenWord: false,
    }}
```

This is the return:

```
    //...
    <span>i</span>
    <span>s</span>
    <span> </span>
    <span class="class">a</span>
    <span class="">n</span>
    //...
```

The code first will iterate the `SpecialClass` after the `SpecialWrapp`. The code sintaxis will work with the letter and then remove it, In this example the next letter is "n" so no `SpecialWrapp` is added.

To avoid this priority you can use`spaceBetweenWord: true`, the code will check if the `wordToSerch` from `SelectClass` is between white-space.

Now customization is superior thanks to being able to customize each word separately if you wish.

Thanks for you visit :v
