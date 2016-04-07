// this is a reference to the thing that calls it
var Cata6 =  {
    printFirstName: function() {
        console.log("My name is Cata");
        console.log(this === Cata6);
    }
};
Cata6.printFirstName();

// The default calling context is global
function doSomething() {
    console.log("My worthless");
    console.log(this === Cata6);
    console.log(this === global);
}
doSomething();