// `this` lets a method access the current object (or the containing object)
// without needing to know the name of the variable containing the object.

const groucho = {
  fullname: 'Groucho Julius Marx',
  greeting: function () {
    return 'Good evening, my name is ' + this.fullname;
  }
}

console.log( 'Calling the method: ', groucho.greeting() );

// What if we copy the method from inside the object?
// What if convert the method to a regular function?

const unboundGreeting = groucho.greeting;
console.log( 'Calling the function: ', unboundGreeting() ); // 'Good evening, my name is undefined'

// .bind() /////////////////////////////////////////////////////////////////////
const boundGreeting = groucho.greeting.bind(groucho);
console.log( 'Calling the bound function: ', boundGreeting() ); // 'Good evening, my name is Groucho Julius Marx'

const otherGreeting = groucho.greeting.bind({ diabetic: true, salary: false, fullname: 'Chico Marx'});
console.log( 'Hey Chico', otherGreeting() );

// .call() /////////////////////////////////////////////////////////////////////
console.log( unboundGreeting.call(groucho) );
console.log( unboundGreeting.call({fullname: 'Hunter S. Thompson'}) );

// .apply() ////////////////////////////////////////////////////////////////////
console.log( unboundGreeting.apply(groucho) );

const numbers = [56, 11, 23, 100];
console.log( Math.max(numbers)); // NaN: unexpected array
console.log( Math.max.apply(Math, numbers)); // flatten the array into a list of actual arguments.

// Modern fix (ES6):
Math.max( ...numbers );
