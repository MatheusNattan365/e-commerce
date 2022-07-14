import React, { createContext, useState } from "react";
import { Product } from "../pages/main";
import { getAllProducts } from "../services/Products";

export const Context = createContext<
    [Product[], React.Dispatch<React.SetStateAction<Product[]>>]
>([[], () => {}]);

interface AppProps {
    children: JSX.Element;
}

export const Provider = ({ children }: AppProps) => {
    const [products, setProducts] = React.useState<Product[]>([
        {
            id: 1,
            name: "Wine - Sawmill Creek Autumn",
            description: "Other recurrent atlantoaxial dislocation",
            price: 17.75,
            thumbnailUrls: [`https://source.unsplash.com/random/300x300`],
        },
        {
            id: 2,
            name: "Beef Flat Iron Steak",
            description:
                "Superficial frostbite of unspecified hand, initial encounter",
            price: 49.71,
            thumbnailUrls: ["https://source.unsplash.com/random/300x300"],
        },
        {
            id: 3,
            name: "Rolled Oats",
            description: "Acute viral hepatitis, unspecified",
            price: 32.69,
            thumbnailUrls: ["https://source.unsplash.com/random/300x300"],
        },
        {
            id: 4,
            name: "Country Roll",
            description:
                "Stress fracture, unspecified hand, init encntr for fracture",
            price: 52.34,
            thumbnailUrls: ["https://source.unsplash.com/random/300x300"],
        },
        {
            id: 5,
            name: "Bread Foccacia Whole",
            description:
                "2-part disp fx of surgical neck of right humerus, sequela",
            price: 54.35,
            thumbnailUrls: ["https://source.unsplash.com/random/300x300"],
        },
        {
            id: 6,
            name: "Onions - Cippolini",
            description: "Melanocytic nevi of ear and external auricular canal",
            price: 97.11,
            thumbnailUrls: ["https://source.unsplash.com/random/300x300"],
        },
        {
            id: 7,
            name: "Relish",
            description: "Disorder of ligament, unspecified shoulder",
            price: 47.56,
            thumbnailUrls: ["https://source.unsplash.com/random/300x300"],
        },
        {
            id: 8,
            name: "Wine - Marlbourough Sauv Blanc",
            description: "Adverse effect of stimulant laxatives",
            price: 84.49,
            thumbnailUrls: ["https://source.unsplash.com/random/300x300"],
        },
        {
            id: 9,
            name: "Lobster - Canned Premium",
            description: "Macular keratitis",
            price: 26.63,
            thumbnailUrls: ["https://source.unsplash.com/random/300x300"],
        },
        {
            id: 10,
            name: "Southern Comfort",
            description: "Abrasion of right index finger, subsequent encounter",
            price: 40.04,
            thumbnailUrls: ["https://source.unsplash.com/random/300x300"],
        },
    ]);

    React.useEffect(() => {
        // dbProducts();
    }, []);

    return (
        <Context.Provider value={[products, setProducts]}>
            {children}
        </Context.Provider>
    );
};
