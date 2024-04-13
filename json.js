const jsonString = '{"name":"Alice", "age":25, "hobby":["reading","playing","dancing"]}';
const jsonObject = JSON.parse(jsonString); // convert json string to object
console.log(jsonObject)

const objectToConvert = {name:"Alice",age:25,hobby:['reading','playing']};
const jsonStringified = JSON.stringify(objectToConvert) // converting object to json string
console.log(jsonStringified)

const fs = require('fs');

const person = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    postalCode: '12345'
  },
  phoneNumbers: [
    {
      type: 'home',
      number: '212 555-1234'
    },
    {
      type: 'office',
      number: '646 555-4567'
    }
  ]
};

fs.writeFile('person.json', JSON.stringify(person, null, 2), (err) => {
  if (err) throw err;
  console.log('JSON file has been saved.');
});