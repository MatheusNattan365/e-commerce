import { ProductForm } from "../common/components/ProductForm";
import { Product } from "../pages/main";

export async function createProduct(
    product: Partial<ProductForm>
): Promise<Product | boolean> {
    const formData = new FormData();
    const currentUser = JSON.parse(localStorage.getItem("devx-user") || "");
    product.product_photo?.forEach((file) =>
        formData.append("product_photo", file)
    );

    formData.append("name", product.name!);
    formData.append("description", product.description!);
    formData.append("price", product.price?.toString()!);
    formData.append("UserId", currentUser.id);

    return fetch("http://localhost:7000/api/v1/products", {
        method: "POST",
        body: formData,
    })
        .then((res) => res.json())
        .then((res) => {
            if (res?.issue) {
                alert(res.issue);
                return false;
            }
            return res;
        })
        .catch((err) => {
            alert(err);
            return false;
        });
}

export async function getAllProducts(): Promise<Product[] | boolean> {
    return fetch("http://localhost:7000/api/v1/products", {
        method: "GET",
    })
        .then((res) => res.json())
        .catch((err) => {
            alert(err);
            return false;
        });
}

export async function getAllMyProducts(): Promise<Product[] | boolean> {
    const currentUser = JSON.parse(
        localStorage.getItem("devx-user") || JSON.stringify("")
    );

    return fetch(
        `http://localhost:7000/api/v1/products/by-user-id/${currentUser.id}`,
        {
            method: "GET",
        }
    )
        .then((res) => res.json())
        .catch((err) => {
            alert(err);
            return false;
        });
}
