# Wrapping-Letters

WRAPPING LETTERS IS A REACT LIBRARY(come soon for JS) THAT 
SIMPLIFIES THE JOB OF WRAPPING LETTERS IN HTML TAGS

## New upgrades

1.3.0 IS NOW !!!

- The new prop of Wrapping-letters is here ```structure={<React component />}```!!!

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
its has a default word is: "Hello world!!! <3".

The component ```` <WrappingLetters /> ```` always returns each letter of 
the word or phrase within a ```<span />``` each letter.

  ```!IMPORTANT```
The component only returns the single letters, they are not inside 
any extra tag.
```
  <span>H</span>
  <span>e</span>
  <span>l</span>
  <span>l</span>
  <span>...</span>
```

If you want modifies the word, call the prop "word", this prop only 
accept strings

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

```word Options``` is the new prop in 1.1.0, with this you can select
a special class for a word or phrase, put a class for all letters or both

## How to add a class for all letters
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


## How to add a special class for a word or phrase(or letters)

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

```"SelectClass"``` is a object it can a search a word, phrase or letters 
in the sentence, is so easy to use:


- ```wordToSearch: <String>``` is the word to search, only accept strings!.

- ```classToAdd: <String>``` is the class to add a the ```<span>```

- ```spaceBetweenWord: <Boolean>``` is the a conditional for the search.
  
  For example: ```wordToSearch: "ping"``` has the word ```"ping"``` 
  but the algorithm can search for a word within other words and also 
  being alone, ```spaceBeetwenWord``` in ``` true``` only allows 
  searching for the word alone, in ```false``` searches everywhere

  ``` IMPORTANT! ```

  ```"SelectClass"``` look for all the times the word is repeated, 
  ```spaceBetweenWord``` 
  is important for avoiding problems


## How to add a special ```structure```

Sometimes a special structure is needed for the letters to be wrapped, 
```structure``` is the solution of this problem.

Is so easy to use: 

```
import React from 'react'
import WrappingLetters from 'wrapping-letters-react'

function App(){
    return(
        <WrappingLetters 
            word='This is the sentence to wrapped'
            wordOptions={[
                {
                    SelectClass: {
                        wordToSearch: 'sentence',
                        ClassToAdd: 'specialClass',
                        spaceBeetwenWord: true,,
                    },
                }
            ]}
            structure={ReactComponent}
        />
    )
}
```

```structure``` modify the wrapper for more flexibility to do 
animations or whatever you can think of.
#
```
// React component example

function ReactComponent({letter, cssClass, ...props}) {
    return(
        <div 
            className={`container-letter ${cssClass}`} 
            {...props}
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

- ```letter``` is the letter to wrap

- ```cssClass``` is the special css class

- ```key``` is the key :3


```!IMPORTANT```

The ```classToAdd``` attribute of ```wordOptions```,
not used when the ```structure``` is active, if you want a css class, 
use ```className``` in the component.

Thanks for you visit :v




