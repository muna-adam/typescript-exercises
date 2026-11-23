
let productName: string = "Laptop";
let price: number = 1200;
let discountAvailable: boolean = true;



productName = 500;   
price = "One Thousand";
discountAvailable = "yes";   


productName = "Smartphone";
price = 800;
discountAvailable = false;

console.log(productName, price, discountAvailable)


function getDiscount(price: number, discount: number): number {
  return price - price * discount;
}

console.log(getDiscount(100, 0.2)); 



function printLength(x: unknown) {
  
  if (typeof x === "string" ) {
    console.log(x.length);
  } 
}


printLength("Hello"); 
printLength(123);     
