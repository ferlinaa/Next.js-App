import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1, 
        name: "Nike Blazer Low '77 Vintage",
        price: "958.000",
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1f6fceb7-c776-4b2c-9ada-12a39e10346e/BLAZER+LOW+%2777+VNTG.png"
    },
    {
        id: 2, 
        name: "Nike Dunk Low Retro LTD",
        price: "1.678.000",
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6773c7ce-caec-4876-92fb-3f9fb9adc48d/NIKE+DUNK+LOW+RETRO+LTD.png"
    },
    {
        id: 3, 
        name: "Nike Dunk Low LX",
        price: "1.468.000",
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/831c8990-b281-4b49-890e-10c91a7a88eb/W+NIKE+DUNK+LOW+LX.png"
    },
];

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get("id");
    console.log(id);

    if (id) {
        const detailProduct = await retrieveDataById("products", id);
        if (detailProduct) {
            return NextResponse.json ({
                status: 200, 
                message: "success",
                data: detailProduct
            });
        }
        return NextResponse.json ({
            status: 404, 
            message: "Not Found",
            data: {}
        });
    }

    const products = await retrieveData ('products')
    
    return NextResponse.json ({status: 200, message: "success", data: products});
}