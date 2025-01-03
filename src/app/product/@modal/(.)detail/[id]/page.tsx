import { getData } from "@/services/products";
import dynamic from "next/dynamic";
import Image from "next/image";

const Modal = dynamic(() => import('@/components/core/Modal'))

type DetailProductPageProps = {
    params: {
        id: string;
    };
};

export default async function DetailProductPage(props: DetailProductPageProps) {
    const { params } = props;
    const product = await getData('http://localhost:3000/api/product/?id=' + params.id, );
    return (
        <Modal>
             <Image 
                    src={product.data.image} 
                    alt="product"
                    className="w-full object-cover aspect-square col-span-2"
                    width={500}
                    height={500}
                />
                <div className="bg-white p-4 px-6">
                    <h3>{product.data.name}</h3>
                    <p>Price : Rp{product.data.price}</p>
                </div>
        </Modal>
    )          
}
