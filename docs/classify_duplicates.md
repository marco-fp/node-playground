### Classify duplicates

#### Problem
- Generate a list of N + 1 Integers with values within [1, N].

- Write a function to find and print all the duplicated values.

#### Solution

1. Generate list ([code](./../src/classifyDuplicates/generateList.js))

2. Find and print duplicates ([code](./../src/classifyDuplicates/printDuplicates.js))

__Note__: The `printDuplicates` function receives the log function as a parameter, this gives the flexibility to handle the repeated values at will. 
E.g, we could store the values in an array as easy as:

```{javascript}
const values = [];
printDuplicates(list, (value) => {
  values.push(value);
});

console.log(values);
```

This would allow us to print the output and speed up the sprint significantly, since the constant requests (in each iteration) for the output stream to the O.S would be avoided.