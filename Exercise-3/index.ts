function fullName(firstName: string , lastName: string): string {
  return `${firstName}, ${lastName}`
}

console.log(fullName("Muna" , "Adam"))



function registerUser (userName:string , isAdmin?:boolean, language = 'en')  {

    return `${userName} ${isAdmin} ${language}`;
}

console.log(registerUser("said", false, "english"))


function average(...scores: number[]): number {
  if (scores.length === 0) {
    return 0;
  }

  const total = scores.reduce((sum, score) => sum + score, 0);
  return total;
}


console.log(average(80, 90, 100));
console.log(average(10, 20, 30, 40));
console.log(average(75, 85, 95, 65, 80));
console.log(average());
