---
title: "Checking parentheses balance using Stack!"
date: '2020-04-10T17:44:59+06:00'
categories: Algorithms
tags:
    - C++
    - Coding
    - CPP
    - 'Parentheses balancing'
    - Programming
    - Stack
---

Checking for ***balanced parentheses*** or ***balanced brackets*** is a very old and classic problem in the field of computer science.

## Types of parentheses

As we all know there are three kinds of parentheses or brackets. They are the *round brackets*, the *curly brackets* and the *square brackets*. Each of the brackets has an opening part and a closing part.

![Types of brackets](/assets/images/posts/parentheses-balancing/brackets-types.png)

## What is balanced parentheses

Now the question arises — what are balanced parentheses? Some parentheses are called balanced if each opening bracket has a corresponding closing bracket or each closing bracket has a corresponding opening bracket and the brackets are properly nested. Followings are some examples of balanced parentheses:

```text
()
()()()
((()))
{()}
[[[{{((()))}}]]]
[][]()(){()}{}
```

And the followings are some example of parentheses which are not balanced:

```text
()))
)))(((
{()()
[[[}}}
{}{
```

## Algorithm to balance parentheses

Now, let’s try to make an algorithm with the stack. But why stack? To understand this, we have to pay a closer look at the parentheses balancing. Some parentheses are balanced only if there is a corresponding closing part of a specific parenthesis's opening part in sequence. Consider a string of balanced parentheses as "*\[{()}\]*". Here, the opening parentheses are "*\[{(*". So to be balanced "*)*" has to come first, then "*}*" and "*\]*" respectively. If we add the opening parts to the stack, it’ll be done as follows:

![Adding to the stack](/assets/images/posts/parentheses-balancing/add_to_stack.gif)

Now, when the closing part comes, if it matches the corresponding opening part, it indicates that it is a balancing part and the parenthesis is removed from the stack. It works as follows:

![Delete from the stack](/assets/images/posts/parentheses-balancing/delete_from_stack.gif)

Thus if after processing the string if the stack is empty, the parentheses are balanced.

## Implementation

A CPP implementation of checking parentheses balance is as follows:

```cpp
bool isBalanced(string expression){
    stack <char> s;
    
    for(int i = 0; i < expression.length(); i++){
        if(expression[i] == '(' || expression[i] == '{' || expression[i] == '['){
            s.push(expression[i]);
            continue;
        }

        if(s.empty())
            return false;
        
        char c = s.top();

        switch(expression[i]){
            case ')':
                if(c != '(')
                    return false;
    
                break;

            case '}':
                if(c != '{')
                    return false;

                break;
            
            case ']':
                if(c != '[')
                    return false;

                break;
            
            default:
                break;
        }

        s.pop();
    }

    return s.empty();
}
```

You can get the full implementation [here](https://github.com/shahad-mahmud/data_structures/blob/master/stacks/parentheses.cpp){:target="_blank"}. If you like a video version. Check [here](https://www.youtube.com/watch?v=fOvGG4j7mP0){:target="_blank"}. Thank you very much.
