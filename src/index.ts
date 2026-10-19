const productName: string = "キーボード";
const unitPrice: number = 4800;
const quantity: number = 2;
const inStock: boolean = true;

console.log(productName, unitPrice, quantity, inStock);

const subtotal = unitPrice * quantity;
const taxRate = 0.1;
const total = subtotal * (1 + taxRate);

console.log(total);

const message: string = `商品名: ${productName}を${quantity}個購入しました。合計金額は${total}円です。`

console.log(message);

const courseName = "Web Engineering";
let retryCount = 1;

retryCount = 2;

console.log(`Course: ${courseName}`);
console.log(`Retry count: ${retryCount}`);