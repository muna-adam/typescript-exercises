
function echo<T>(input: T): T {
  return input;
}

const textResult = echo<string>("Hello TypeScript");


const numberResult = echo<number>(100);


const arrayResult = echo<number[]>([1, 2, 3]);


const objectResult = echo<{ name: string; age: number }>({
  name: "Ali",
  age: 25
});

console.log(textResult);
console.log(numberResult);
console.log(arrayResult);
console.log(objectResult);


interface ApiResult<T> {
  status: string;
  data: T;
}

const result1: ApiResult<string> = {
  status: "success",
  data: "Welcome"
};

const result2: ApiResult<{ id: number; name: string }> = {
  status: "success",
  data: {
    id: 1,
    name: "Ahmed"
  }
};

console.log(result1);
console.log(result2);



function first<T>(items: T[]): T {
  return items[0];
}


const firstNumber = first<number>([10, 20, 30]);

const firstString = first<string>(["Ali", "Ahmed", "Hassan"]);

const firstObject = first<{ name: string }>([
  { name: "Ali" },
  { name: "Ahmed" }
]);

console.log(firstNumber);
console.log(firstString);
console.log(firstObject);
