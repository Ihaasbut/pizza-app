import { Await, useLoaderData } from "react-router-dom";
import type { Product } from "../../interfaces/product.interface";
import { Suspense } from "react";

function ProductOne() {
    const data = useLoaderData() as { data: Product }
    console.log(data)
    
    return <>
        <Suspense fallback={"Загружаю"}>
            <Await
                resolve={data.data}>
                {( product: Product) => {
                    {console.log(product)}
                   return  <> Product- {product.name}</>
                }}
            </Await>
        </Suspense></>
}

export default ProductOne;
