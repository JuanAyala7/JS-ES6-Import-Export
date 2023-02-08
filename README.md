# JS-ES6-Import-Export
Created with CodeSandbox
## Overall lessons learned:

What import, export and the concept of modules allows us to do is to really be able to start splitting up our large Javascript files into individual more manageable components.

We looked at the import and export keywords. We saw that in a single file, we can only have a single default export but that default export can be imported under any name you give it inside another file.

But if you wanted to get a hold of the other things that are being exported then you can add a comma and a set of curly braces and specify the exact names of the functions or constants or anything you want to export from the other file. Once you've done that, you can freely use these things that you've imported, either the constants or the functions, and treat them as if they existed in this current file (index.js). 

## Why is this important? 

This would then mean that your files are split up. As a result, they're easier to understand and it's easier to spot problems if there are any. This way we can start building up more complex and more interesting apps that uses this kind of modularity.

## Considerations: 

If you use a wild card ( * ), however, then you'll lose the benefit of having a single default export. Using the single default export and incorporating specific functions makes your code more clear and it means that you're only importing the things that you need. This is why you'll see the wild card import discouraged in many style guides.
