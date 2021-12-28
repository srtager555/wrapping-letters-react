import WrappingLetters from "../src/index";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("Mount WrappingLetters", () => {
  
  let container;
  
  beforeEach(() => {
    container = document.createElement("div");
  })

  test("Mount component with default props", () => {
    render(<WrappingLetters />, {
      container,
    });
    expect(container).toMatchInlineSnapshot(`
    <div>
      <span>
        H
      </span>
      <span>
        e
      </span>
      <span>
        l
      </span>
      <span>
        l
      </span>
      <span>
        o
      </span>
      <span>
         
      </span>
      <span>
        w
      </span>
      <span>
        o
      </span>
      <span>
        r
      </span>
      <span>
        l
      </span>
      <span>
        d
      </span>
      <span>
         
      </span>
      <span>
        !
      </span>
      <span>
        !
      </span>
      <span>
        !
      </span>
      <span>
         
      </span>
      <span>
        &lt;
      </span>
      <span>
        3
      </span>
    </div>
    `);
  });
  
  test("Mount component with custom word", () => {
    render(<WrappingLetters word="Custom word"/>, {
      container
    });
    expect(container).toMatchInlineSnapshot(`
    <div>
      <span>
        C
      </span>
      <span>
        u
      </span>
      <span>
        s
      </span>
      <span>
        t
      </span>
      <span>
        o
      </span>
      <span>
        m
      </span>
      <span>
         
      </span>
      <span>
        w
      </span>
      <span>
        o
      </span>
      <span>
        r
      </span>
      <span>
        d
      </span>
    </div>
    `);
  });
  
  test("Mount component with options { ClassToAdd: 'custom-class' }", () => {
    render(<WrappingLetters word="Custom word" wordOptions={[{ ClassToAdd: 'custom-class' }]}/>, {
      container
    });
    expect(container).toMatchInlineSnapshot(`
    <div>
      <span
        class="custom-class"
      >
        C
      </span>
      <span
        class="custom-class"
      >
        u
      </span>
      <span
        class="custom-class"
      >
        s
      </span>
      <span
        class="custom-class"
      >
        t
      </span>
      <span
        class="custom-class"
      >
        o
      </span>
      <span
        class="custom-class"
      >
        m
      </span>
      <span
        class="custom-class"
      >
         
      </span>
      <span
        class="custom-class"
      >
        w
      </span>
      <span
        class="custom-class"
      >
        o
      </span>
      <span
        class="custom-class"
      >
        r
      </span>
      <span
        class="custom-class"
      >
        d
      </span>
    </div>
    `);
  });
  
  test("Mount component with options { SelectClass: { wordToSearch: 'word', classToAdd: 'my-class', spaceBetweenWord: false } }", () => {
    render(<WrappingLetters word="Custom word" wordOptions={[{ SelectClass: { wordToSearch: 'word', classToAdd: 'my-class', spaceBetweenWord: false } }]}/>, {
      container
    });
    expect(container).toMatchInlineSnapshot(`
    <div>
      <span
        class=""
      >
        C
      </span>
      <span
        class=""
      >
        u
      </span>
      <span
        class=""
      >
        s
      </span>
      <span
        class=""
      >
        t
      </span>
      <span
        class=""
      >
        o
      </span>
      <span
        class=""
      >
        m
      </span>
      <span
        class=""
      >
         
      </span>
      <span
        class=" my-class"
      >
        w
      </span>
      <span
        class=" my-class"
      >
        o
      </span>
      <span
        class=" my-class"
      >
        r
      </span>
      <span
        class=" my-class"
      >
        d
      </span>
    </div>
    `);
  });
  
  test("Mount component with options { SelectClass: { wordToSearch: 'word', classToAdd: 'my-class', spaceBetweenWord: true } }", () => {
    render(<WrappingLetters word="Custom word" wordOptions={[{ SelectClass: { wordToSearch: 'word', classToAdd: 'my-class', spaceBetweenWord: true } }]}/>, {
      container
    });
    
    // screen.debug(container);
    expect(container).toMatchInlineSnapshot(`
    <div>
      <span
        class=""
      >
        C
      </span>
      <span
        class=""
      >
        u
      </span>
      <span
        class=""
      >
        s
      </span>
      <span
        class=""
      >
        t
      </span>
      <span
        class=""
      >
        o
      </span>
      <span
        class=""
      >
        m
      </span>
      <span
        class=" my-class"
      >
         
      </span>
      <span
        class=" my-class"
      >
        w
      </span>
      <span
        class=" my-class"
      >
        o
      </span>
      <span
        class=" my-class"
      >
        r
      </span>
      <span
        class=" my-class"
      >
        d
      </span>
      <span
        class=" my-class"
      >
         
      </span>
    </div>
    `);
  });
  
  test("Mount component with options { ClassToAdd: 'custom-class', SelectClass: { wordToSearch: 'word', classToAdd: 'my-class', spaceBetweenWord: false } }", () => {
    render(<WrappingLetters word="Custom word" wordOptions={[{ ClassToAdd: 'custom-class', SelectClass: { wordToSearch: 'word', classToAdd: 'my-class', spaceBetweenWord: false } }]}/>, {
      container
    });
    expect(container).toMatchInlineSnapshot(`
    <div>
      <span
        class="custom-class"
      >
        C
      </span>
      <span
        class="custom-class"
      >
        u
      </span>
      <span
        class="custom-class"
      >
        s
      </span>
      <span
        class="custom-class"
      >
        t
      </span>
      <span
        class="custom-class"
      >
        o
      </span>
      <span
        class="custom-class"
      >
        m
      </span>
      <span
        class="custom-class"
      >
         
      </span>
      <span
        class="custom-class my-class"
      >
        w
      </span>
      <span
        class="custom-class my-class"
      >
        o
      </span>
      <span
        class="custom-class my-class"
      >
        r
      </span>
      <span
        class="custom-class my-class"
      >
        d
      </span>
    </div>
    `);
  });
});

describe("Throw errors WrappingLetters", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  })
  
  afterAll(() => {
    console.error.mockRestore();
  })
  
  test("Throw error when word is empty", () => {
    expect(() => {
      render(<WrappingLetters word="" />);
    }).toThrow(new Error("Word cannot be empty"));
  });
  
  test("Throw error word when is no string", () => {
    expect(() => {
      render(<WrappingLetters word={1} />);
    }).toThrow(new Error("Word must be a string"));
  });
  
  test("Throw error when wordOptions is not an array", () => {
    expect(() => {
      render(<WrappingLetters word="Custom word" wordOptions={{}} />);
    }).toThrow(new Error("wordOptions must be an array"));
  });
  
  test("Throw error when wordOptions.[0].SelectClass haven't 3 keys", () => {
    expect(() => {
      render(<WrappingLetters word="Custom word" wordOptions={[{ SelectClass: {} }]}/>);
    }).toThrow(new Error("SelectClass must have 3 keys : wordToSearch, spaceBetween and classToAdd"));
  });
  
  test("Throw error when wordOptions is not an array with a single object", () => {
    expect(() => {
      render(<WrappingLetters word="Custom word" wordOptions={[{}, {}]} />);
    }).toThrow(new Error("wordOptions must be a single object"));
  });
  
  test("Throw error when wordOptions.[0].ClassToAdd is not a string", () => {
    expect(() => {
      render(<WrappingLetters word="Custom word" wordOptions={[{ ClassToAdd: 1 }]} />);
    }).toThrow(new Error("ClassToAdd must be a string"));
  });
  
  test("Throw error when SelectClass.classToAdd is not a string and spaceBetweenWord is no a boolean", () => {
    expect(() => {
      render(<WrappingLetters word="Custom word" wordOptions={[{ SelectClass: { wordToSearch: 'word', classToAdd: 1, spaceBetweenWord: false } }]} />);
    }).toThrow(new Error("wordToSearch and classToAdd must be a string, spaceBetweenWord must be a boolean"));
  });
})
