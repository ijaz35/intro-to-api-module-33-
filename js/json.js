//Javascript object notation
//JSON
const user = { id: 11, name: 'Gorib Amir', job: 'actor' };

//JSON.stringify() is used to stringify any noraml object
const stringified = JSON.stringify(user);
console.log(stringified);
//{"id":11,"name":"Gorib Amir","job":"actor"} console result

//JSON.parse() is used to convert any stringified object to normal object
const unstringified = JSON.parse(stringified);
console.log(unstringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);
console.log(converted.products);
//{"name":"Alia Store","address":"Ranbir Road","profit": 15000, products":["laptop","mobile","pepsi"],"isExpensive":false}     console result