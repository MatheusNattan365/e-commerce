import React, { FormEvent } from "react";
import { Context } from "../../context/main";
import { Product } from "../../pages/main";
import { createProduct } from "../../services/Products";

export interface ProductForm {
    description: string;
    name: string;
    product_photo: File[] | null;
    price: number;
}

interface AppProps {
    closeModal: () => void;
}
// import { Container } from './styles';
const ProductForm = ({ closeModal }: AppProps) => {
    const [productForm, setProductForm] = React.useState<ProductForm>({
        description: "",
        name: "",
        product_photo: null,
        price: 0,
    });

    const [products, setProducts] = React.useContext(Context);

    const handleFormSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const createdProduct = await createProduct(productForm);
        const newArrayOfProducts = [...products, createdProduct as Product];

        if (!!createProduct) {
            setProducts(newArrayOfProducts);
        }
        closeModal();
    };

    const handleFileListToFileArray = (files: FileList) =>
        setProductForm({ ...productForm, product_photo: Array.from(files) });

    return (
        <div className="p-2 md:mt-0 md:col-span-2">
            <form onSubmit={handleFormSubmit}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-400 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <div className=" text-sm text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                    >
                                        <span>
                                            {productForm.product_photo
                                                ? "Change file(s)"
                                                : "Upload file(s)"}
                                        </span>

                                        <input
                                            id="file-upload"
                                            name="file-upload"
                                            type="file"
                                            multiple
                                            accept=".jpeg, .png"
                                            className="sr-only"
                                            onChange={(event) =>
                                                handleFileListToFileArray(
                                                    event.target.files!
                                                )
                                            }
                                        />
                                    </label>
                                </div>
                                <p className="text-xs text-gray-500">
                                    PNG, JPG,up to 1MB
                                </p>
                                {productForm.product_photo &&
                                    productForm.product_photo.map(
                                        (file: File) => (
                                            <p
                                                key={file.name}
                                                className="text-xs"
                                            >
                                                {" "}
                                                {file.name}{" "}
                                            </p>
                                        )
                                    )}
                            </div>
                        </div>
                    </div>
                    <div className="flex px-4 bg-white sm:p-2 mt-2">
                        <div className="grid-cols-7">
                            <label
                                htmlFor="product-name"
                                className="flex text-sm font-medium text-gray-700"
                            >
                                Name:
                            </label>
                            <input
                                type="text"
                                name="product-name"
                                id="product-name"
                                className=" center focus:ring-indigo-500 focus:border-indigo-500 rounded-none rounded-r-md sm:text-sm border-gray-300"
                                placeholder="Ex: Wine..."
                                onChange={(event) =>
                                    setProductForm({
                                        ...productForm,
                                        name: event.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                        <div className="grid-cols-1">
                            <label
                                htmlFor="product-price"
                                className="flex text-sm font-medium text-gray-700"
                            >
                                Price:
                            </label>
                            <input
                                type="number"
                                name="product-price"
                                id="product-price"
                                step="any"
                                required
                                onChange={(event) =>
                                    setProductForm({
                                        ...productForm,
                                        price: parseFloat(event.target.value),
                                    })
                                }
                                className=" flex focus:ring-indigo-500 focus:border-indigo-500 rounded-none rounded-r-md sm:text-sm border-gray-300"
                            />
                        </div>
                    </div>
                    <div className="px-4 bg-white sm:p-2 mt-0">
                        <div className="grid-cols-12">
                            <label
                                htmlFor="product-description"
                                className="flex text-sm font-medium text-gray-700"
                            >
                                Description:
                            </label>
                            <textarea
                                name="product-description"
                                id="product-description"
                                rows={6}
                                onChange={(event) =>
                                    setProductForm({
                                        ...productForm,
                                        description: event.target.value,
                                    })
                                }
                                className="w-full center focus:ring-indigo-500 focus:border-indigo-500 rounded-none rounded-r-md sm:text-sm border-gray-300"
                                placeholder="Ex: Rich. Wines with full, pleasant flavours that are sweet and 'rounded' in nature are described as rich. In dry wines..."
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 flex sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                        type="submit"
                        disabled={!productForm.name || !productForm.price}
                        className="mt-2 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-700 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                        Confirm
                    </button>
                    <button
                        type="button"
                        className="mt-2 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => closeModal()}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;
