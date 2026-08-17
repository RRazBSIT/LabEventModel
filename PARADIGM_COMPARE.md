Paradigm Comparison – User Submits a Search Form

Procedural Programming

In procedural programming, the program follows a series of steps from start to finish.

The main program controls the order of the actions and calls the search functions when needed.

The program can get the user's input, check if it is correct, send the search request, and process the result one step at a time.

The flow is mostly controlled by the main program instead of separate events.

If the search result takes time to arrive, callbacks, promises, or other methods can be used to continue the process.

Object-Oriented Programming (OOP)

In OOP, the search feature can be divided into different classes and objects.

For example, a form, search service, or search result can have its own properties and methods.

Methods or handlers can be placed inside the proper classes to handle the user's actions and control the program.

The objects work together when the user submits the search form.

If the search is asynchronous, promises, callbacks, or async/await can be used to receive and handle the result.

Event-Driven Programming

In event-driven programming, the program waits for an event, such as the user submitting a form.

The event handler responds to the user's action instead of having one main program constantly checking for input.

For example, the search form can have a submit event listener that runs when the user submits the form.

The handler can start the search request and wait for the result.

Promises, callbacks, or async/await can then be used to handle the search result when it is ready.
