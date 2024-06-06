import type {
  RunInput,
  FunctionRunResult,
  ProductVariant,
} from "../generated/api";

export function run(input: RunInput): FunctionRunResult {
  console.log("Kuch Bhi");
  console.log(`Line Item -- ${input.cart.lines[0].attribute?.value}`);
  
  return {
    operations:[
      {
        "update": {
          "cartLineId": input.cart.lines[0].id,
          "title": `${(input.cart.lines[0].merchandise as ProductVariant).product.title}`,
          "price": {
            "adjustment": {
              "fixedPricePerUnit": {
                "amount": `${input.cart.lines[0]?.attribute?.value}`
              }
            }
          }
        }
      }
    ]
  }
}; 