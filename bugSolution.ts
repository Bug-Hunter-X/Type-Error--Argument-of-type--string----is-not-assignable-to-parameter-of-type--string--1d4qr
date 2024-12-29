function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return persons.map(person => "Hello, " + person).join("\n");
}

let user = ["Jane User", "John User"];
console.log(greeter(user[0]));
console.log(greeterArray(user));