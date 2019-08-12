const assert = require("chai").assert;
// const app = require("../index");
const {sayHello, addNumbers} = require("../index");


const sayHelloResult = sayHello();
const addNumberResult = addNumbers(5, 5);

describe("App", function(){


    describe("say hello", function(){
        it("App should return hello", function(){
            assert.equal(sayHelloResult, "hello");
        });


        it("sayHello should return type string", function(){
            assert.typeOf(sayHelloResult, "string");
        });
    });


    describe("add number", function(){
        it("add numbers should be above 5", function(){
            assert.isAbove(addNumberResult, 5);
        });
    });

});