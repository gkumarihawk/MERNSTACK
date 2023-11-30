//Question :
///////////////////////////

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "dontnet"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag
//2. List the same on person using java and put programmer after their name, change the name key to Developer
//3. If we have anyone with tag python
//4. Find the number of unique tags and their count present in list

//1. List the person with javascript tag

let javascript = persons.filter(person => person.tags === "javascript")
console.log(javascript);

//2. List the same on person using java and put programmer after their name, change the name key to Developer

let java = persons.filter(person => person.tags === "java").map(person => {
    person.name = person.name + " Programmer";
    person.Developer = person.name;
    return person;
}
)
console.log(java);

//3. If we have anyone with tag python

let python = persons.some(person=> person.tags == "python")
console.log(python);

//4. Find the number of unique tags and their count present in list

let uniquetag = persons.reduce((prevVal, currVal, index, list)=>{
    console.log(prevVal)
    prevVal[currVal.tags] = prevVal[currVal.tags] ? prevVal[currVal.tags] + 1 : 1
    return prevVal
}, new Set())