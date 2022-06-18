# Wrapping-Letters

WRAPPING LETTERS IS A REACT LIBRARY(come soon for JS) THAT 
SIMPLIFIES THE JOB OF WRAPPING LETTERS IN HTML TAGS

## New upgrades

2.1.0 is now!!!

Now the code can be able to find more than 2 specialWord and add more than 2 specialClass.

I worked hard on this update because I changed a lot of the code to do the checks correctly.

2.1.1: error in the export solved

come soon 2.2.0 

New options about the structure of the wrapped for reduce your code

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

The component ```` <WrappingLetters /> ```` always returns each letter of 
the text or phrase within a ```<span />``` each letter.

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

If you want modifies the text, call the prop "text", this prop only 
accept strings

```
<WrappingLetters text="I'm the new text" />
```

Now you can add a special options to the text, is so easy!:

```
<WrappingLetters 
    text="I'm the new text" 
    textOptions={[
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

```textOptions``` is the new prop in 1.1.0, with this you can select
a special class for a word or phrase, put a class for all letters or both

#
## How to add a class for all letters
```
textOptions={[
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
## How to add a special class for a word or phrase(or letters)

```
  text="WrappingLetters"
  textOptions={[
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


- ```wordToSearch: <String>``` is the word to search for, but you can search for more word with an ```[Array]```.

- ```classToAdd: <String>``` is the class to add a the ```<span>```, You can add more specialClass with an ```[Array]```, The code will put the class depending of its index, for example: 

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

- ```spaceBetweenWord: <Boolean>``` is the a conditional for the search (default is `false`).
  
  For example: ```wordToSearch: "ping"``` has the word ```"ping"``` 
  but the algorithm can search for a word within other words and also 
  being alone, ```spaceBeetwenWord``` in ``` true``` only allows 
  searching for the word alone, in ```false``` searches everywhere

  ``` IMPORTANT! ```

  ```"SelectClass"``` look for all the times the word is repeated, 
  ```spaceBetweenWord``` 
  is important for avoiding problems

#
## I want a wrapp to each word

```PerWord``` is an attribute of ```textOptions``` to wrap each word instead of wrapping each letter (default is false)

Is very easy to use: 

```
    <WrappingLetters
         text="Carlos is a good person, but Carlos is a bad person"
         textOptions={[
            {
               ClassToAdd: "class",
               SelectClass: {
                  wordToSearch: "Carlos",
                  classToAdd: "special-class",
               },
               PerWord: true,
            },
         ]}
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

When ```PerWord``` is true, ```spaceBetweenWord``` always is disabled. ```wordToSearch``` 
must be a single word, spaces break the search.

THE CODE SEARCH EACH WORD BY THE SPACE HAS BETWEEN EACH WORD
# 

## How to add a special ```structure```

Sometimes a special structure is needed for the letters or words to be wrapped, 
```structure``` is the solution of this problem.

Is so easy to use: 

```
import React from 'react'
import WrappingLetters from 'wrapping-letters-react'

function App(){
    return(
        <WrappingLetters 
         text='This is the sentence to wrapped'
            textOptions={[
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

```!IMPORTANT:```
It is suggested to put out cssClass of the descontruction, if anyways not used, for evit syntax errors.

#

The list of element to send a the component for now is small:

- ```letter``` is the letter to wrap

- ```cssClass``` is the special css class

```!IMPORTANT``` The elements under this line, cannot be assigned for their key name, only can be used with the deconstruction

- ```key``` is the key :3 ({wrappedElement}-{indexNumber})


```!IMPORTANT```

The ```classToAdd``` attribute of ```textOptions```,
is disable when the ```structure``` is active, if you want a css class
use ```className``` in the component.

Thanks for you visit :v




