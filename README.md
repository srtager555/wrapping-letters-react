# Wrapping-Letters

WRAPPING LETTERS IS A REACT LIBRARY(come soon for JS) THAT SIMPLIFIES THE JOB OF WRAPPING LETTERS IN HTML TAGS



## New upgrades

1.1.0 is now, the following functions have been implemented

- Now you can add a default class to <span>!

- Now you can set a specific class to a specific word or phrase!

1.1.1 (fixed errors)

- ✅ "SelectClass" not work only (Fixed) 
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

Wrapping Letters is a component for react with the goal of to simplify the job to wrap letters,
call the component and that's ready to use.  its has a default word is: "Hello world!!! <3".

The component ```` <WrappingLetters /> ```` always returns each letter of the word or phrase within a ```<span />``` each letter.

  ```!IMPORTANT```
The component only returns the single letters, they are not inside any extra tag.
```
  <span>H</span>
  <span>e</span>
  <span>l</span>
  <span>l</span>
  <span>...</span>
```

If you want modifies the word, call the prop "word", this prop only accept strings

```
<WrappingLetters word="I'm the new word" />
```

Now you can add a special options to the word, is so easy!:

```
<WrappingLetters 
    word="I'm the new word" 
    wordOptions={[
        {
            "ClassToAdd": "letter-wrapp",

            "SelectClass": {
              wordToSearch: "the",
              classToAdd: "Im-the-new-class",
              spaceBetweenWord: false,
            }
        },
    ]}
/>
```

```word Options``` is the new prop in 1.1.0, with this you can select a special class for a 
word or phrase, put a class for all letters or both

#
How to add a class for all letters
```
wordOptions={[
        {
            "ClassToAdd": "letter-wrapp",
        },
    ]}

```
The atribute ```"ClassToAdd"``` of the new prop is your solution

```"ClassToAdd"``` places the class of your choice in the ```<span>```

Is so easy to use, call the attribute and places the class of your choice

```"ClassToAdd"``` only accept Strings.

#
How to add a special class for a word or phrase(or letters)

```
  word="WrappingLetters"
  wordOptions={[
        {
            "SelectClass": {
              wordToSearch: "ping",
              classToAdd: "Im-the-new-class",
              spaceBetweenWord: false,
            }
        },
    ]}
```
```"SelectClass"``` is the solution for this problem.

```"SelectClass"``` is a object it can a search a word, phrase or letters in the sentence, is so easy to use:


- ```wordToSearch: <String>``` is the word to search, only accept strings!.

- ```classToAdd: <String>``` is the class to add a the ```<span>```

- ```spaceBetweenWord: <Boolean>``` is the a conditional for the search.
  
  For example: ```wordToSearch: "ping"``` has the word ```"ping"``` but the algorithm can 
  search for a word within other words and also being alone, ```spaceBeetwenWord``` in ``` 
  true``` only allows searching for the word alone, in ```false``` searches everywhere

  ``` IMPORTANT! ```

  ```"SelectClass"``` look for all the times the word is repeated, ```spaceBetweenWord``` 
  is important for avoiding problems



Wrapping Letters has its 1.1.0 version !!!.

Thank you all for downloading the project, this is a dream for me <3




