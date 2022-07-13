import React, { Fragment, MouseEvent, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
    MenuIcon,
    SearchIcon,
    ShoppingBagIcon,
    XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import AddProductModal from "../common/components/Modal";

export interface User {
    email: string;
}

const navigation = {
    categories: [
        {
            id: "products",
            name: "Products",
            featured: [
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
                    imageAlt:
                        "Drawstring top with elastic loop closure and textured interior padding.",
                },
                {
                    name: "Artwork Tees",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
                    imageAlt:
                        "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
                },
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
                    imageAlt:
                        "Drawstring top with elastic loop closure and textured interior padding.",
                },
                {
                    name: "Artwork Tees",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
                    imageAlt:
                        "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
                },
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
                    imageAlt:
                        "Drawstring top with elastic loop closure and textured interior padding.",
                },
                {
                    name: "Artwork Tees",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
                    imageAlt:
                        "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
                },
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
                    imageAlt:
                        "Drawstring top with elastic loop closure and textured interior padding.",
                },
                {
                    name: "Artwork Tees",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
                    imageAlt:
                        "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
                },
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
                    imageAlt:
                        "Drawstring top with elastic loop closure and textured interior padding.",
                },
                {
                    name: "Artwork Tees",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
                    imageAlt:
                        "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
                },
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
                    imageAlt:
                        "Drawstring top with elastic loop closure and textured interior padding.",
                },
                {
                    name: "Artwork Tees",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
                    imageAlt:
                        "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
                },
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
                    imageAlt:
                        "Drawstring top with elastic loop closure and textured interior padding.",
                },
                {
                    name: "Artwork Tees",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
                    imageAlt:
                        "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
                },
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
                    imageAlt:
                        "Drawstring top with elastic loop closure and textured interior padding.",
                },
                {
                    name: "Artwork Tees",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
                    imageAlt:
                        "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
                },
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
                    imageAlt:
                        "Drawstring top with elastic loop closure and textured interior padding.",
                },
                {
                    name: "Artwork Tees",
                    href: "#",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
                    imageAlt:
                        "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
                },
            ],
            products: [
                {
                    id: 1,
                    name: "Wine - Sawmill Creek Autumn",
                    description: "Other recurrent atlantoaxial dislocation",
                    price: 17.75,
                    thumbnailUrls: [
                        `https://source.unsplash.com/random/300x300`,
                    ],
                },
                {
                    id: 2,
                    name: "Beef Flat Iron Steak",
                    description:
                        "Superficial frostbite of unspecified hand, initial encounter",
                    price: 49.71,
                    thumbnailUrls: [
                        "https://source.unsplash.com/random/300x300",
                    ],
                },
                {
                    id: 3,
                    name: "Rolled Oats",
                    description: "Acute viral hepatitis, unspecified",
                    price: 32.69,
                    thumbnailUrls: [
                        "https://source.unsplash.com/random/300x300",
                    ],
                },
                {
                    id: 4,
                    name: "Country Roll",
                    description:
                        "Stress fracture, unspecified hand, init encntr for fracture",
                    price: 52.34,
                    thumbnailUrls: [
                        "https://source.unsplash.com/random/300x300",
                    ],
                },
                {
                    id: 5,
                    name: "Bread Foccacia Whole",
                    description:
                        "2-part disp fx of surgical neck of right humerus, sequela",
                    price: 54.35,
                    thumbnailUrls: [
                        "https://source.unsplash.com/random/300x300",
                    ],
                },
                {
                    id: 6,
                    name: "Onions - Cippolini",
                    description:
                        "Melanocytic nevi of ear and external auricular canal",
                    price: 97.11,
                    thumbnailUrls: [
                        "https://source.unsplash.com/random/300x300",
                    ],
                },
                {
                    id: 7,
                    name: "Relish",
                    description: "Disorder of ligament, unspecified shoulder",
                    price: 47.56,
                    thumbnailUrls: [
                        "https://source.unsplash.com/random/300x300",
                    ],
                },
                {
                    id: 8,
                    name: "Wine - Marlbourough Sauv Blanc",
                    description: "Adverse effect of stimulant laxatives",
                    price: 84.49,
                    thumbnailUrls: [
                        "https://source.unsplash.com/random/300x300",
                    ],
                },
                {
                    id: 9,
                    name: "Lobster - Canned Premium",
                    description: "Macular keratitis",
                    price: 26.63,
                    thumbnailUrls: [
                        "https://source.unsplash.com/random/300x300",
                    ],
                },
                {
                    id: 10,
                    name: "Southern Comfort",
                    description:
                        "Abrasion of right index finger, subsequent encounter",
                    price: 40.04,
                    thumbnailUrls: [
                        "https://source.unsplash.com/random/300x300",
                    ],
                },
            ],
            sections: [],
        },
    ],
    pages: [
        { name: "Company", href: "#" },
        { name: "Stores", href: "#" },
    ],
};

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Home() {
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const [user, setUser] = useState<User>({
        email: "",
    });

    React.useEffect(() => {
        hasUser();
    }, []);

    const hasUser = () => {
        const user = JSON.parse(
            localStorage.getItem("devx-user") || JSON.stringify("")
        );
        if (user.email) setUser({ email: user.email });
    };

    const handleLogout = (event: MouseEvent<Element>): void => {
        localStorage.clear();
        setUser({ email: "" });
    };
    const openAddProductModal = (event: MouseEvent<Element>): void => {
        setOpenModal(true);
    };

    return (
        <div className="bg-white">
            <AddProductModal
                openModal={openModal}
                setOpenModal={(value) => setOpenModal(value)}
            ></AddProductModal>
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-40 lg:hidden"
                    onClose={setOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex z-40">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                                <div className="px-4 pt-5 pb-2 flex">
                                    <button
                                        type="button"
                                        className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex px-4 space-x-8">
                                            {navigation.categories.map(
                                                (category) => (
                                                    <Tab
                                                        key={category.name}
                                                        className={({
                                                            selected,
                                                        }) =>
                                                            classNames(
                                                                selected
                                                                    ? "text-indigo-600 border-indigo-600"
                                                                    : "text-gray-900 border-transparent",
                                                                "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                                                            )
                                                        }
                                                    >
                                                        {category.name}
                                                    </Tab>
                                                )
                                            )}
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        {navigation.categories.map(
                                            (category) => (
                                                <Tab.Panel
                                                    key={category.name}
                                                    className="pt-10 pb-8 px-4 space-y-10"
                                                >
                                                    <div className="grid grid-cols-2 gap-x-4">
                                                        {category.featured.map(
                                                            (item) => (
                                                                <div
                                                                    key={
                                                                        item.name
                                                                    }
                                                                    className="group relative text-sm"
                                                                >
                                                                    <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                        <img
                                                                            src={
                                                                                item.imageSrc
                                                                            }
                                                                            alt={
                                                                                item.imageAlt
                                                                            }
                                                                            className="object-center object-cover"
                                                                        />
                                                                    </div>
                                                                    <a
                                                                        href={
                                                                            item.href
                                                                        }
                                                                        className="mt-6 block font-medium text-gray-900"
                                                                    >
                                                                        <span
                                                                            className="absolute z-10 inset-0"
                                                                            aria-hidden="true"
                                                                        />
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </a>
                                                                    <p
                                                                        aria-hidden="true"
                                                                        className="mt-1"
                                                                    >
                                                                        Shop now
                                                                    </p>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </Tab.Panel>
                                            )
                                        )}
                                    </Tab.Panels>
                                </Tab.Group>

                                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                    {navigation.pages.map((page) => (
                                        <div
                                            key={page.name}
                                            className="flow-root"
                                        >
                                            <a
                                                href={page.href}
                                                className="-m-2 p-2 block font-medium text-gray-900"
                                            >
                                                {page.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                    <div className="flow-root">
                                        <a
                                            href="#"
                                            className="-m-2 p-2 block font-medium text-gray-900"
                                        >
                                            Sign in
                                        </a>
                                    </div>
                                    <div className="flow-root">
                                        <a
                                            href="#"
                                            className="-m-2 p-2 block font-medium text-gray-900"
                                        >
                                            Create account
                                        </a>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 py-6 px-4">
                                    <a
                                        href="#"
                                        className="-m-2 p-2 flex items-center"
                                    >
                                        <img
                                            src="https://tailwindui.com/img/flags/flag-canada.svg"
                                            alt=""
                                            className="w-5 h-auto block flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-base font-medium text-gray-900">
                                            CAD
                                        </span>
                                        <span className="sr-only">
                                            , change currency
                                        </span>
                                    </a>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-white">
                <p className="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
                    Get free delivery on orders over $100
                </p>

                <nav
                    aria-label="Top"
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="border-b border-gray-200">
                        <div className="h-16 flex items-center">
                            <button
                                type="button"
                                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Open menu</span>
                                <MenuIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <a href="#">
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                                        alt=""
                                    />
                                </a>
                            </div>

                            {/* Flyout menus */}
                            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="h-full flex space-x-8">
                                    {navigation.categories.map((category) => (
                                        <Popover
                                            key={category.name}
                                            className="flex"
                                        >
                                            {({ open }) => (
                                                <>
                                                    <div className="relative flex">
                                                        <Popover.Button
                                                            className={classNames(
                                                                open
                                                                    ? "border-indigo-600 text-indigo-600"
                                                                    : "border-transparent text-gray-700 hover:text-gray-800",
                                                                "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                                                            )}
                                                        >
                                                            {category.name}
                                                        </Popover.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0"
                                                        enterTo="opacity-100"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                            <div
                                                                className="absolute inset-0 top-1/2 bg-white shadow"
                                                                aria-hidden="true"
                                                            />

                                                            <div className="relative bg-white">
                                                                <div className="max-w-7xl mx-auto px-8">
                                                                    <div className="grid grid-cols-1 py-16">
                                                                        <div className="grid grid-cols-3 gap-x-8 ">
                                                                            {category.products.map(
                                                                                (
                                                                                    item
                                                                                ) => (
                                                                                    <div
                                                                                        key={
                                                                                            item.name
                                                                                        }
                                                                                        className="group relative text-base sm:text-sm mb-4"
                                                                                    >
                                                                                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                                            <img
                                                                                                src={
                                                                                                    item
                                                                                                        .thumbnailUrls[0]
                                                                                                }
                                                                                                alt={
                                                                                                    "item.imageAlt"
                                                                                                }
                                                                                                className="object-center object-cover"
                                                                                            />
                                                                                        </div>
                                                                                        <a
                                                                                            href={
                                                                                                "#"
                                                                                            }
                                                                                            className="mt-6 block font-medium text-gray-900"
                                                                                        >
                                                                                            <span
                                                                                                className="absolute z-10 inset-0"
                                                                                                aria-hidden="true"
                                                                                            />
                                                                                            {
                                                                                                item.name
                                                                                            }
                                                                                        </a>
                                                                                        <p
                                                                                            aria-hidden="true"
                                                                                            className="mt-1"
                                                                                        >
                                                                                            Price:
                                                                                            $
                                                                                            {
                                                                                                item.price
                                                                                            }
                                                                                        </p>
                                                                                        <p
                                                                                            aria-hidden="true"
                                                                                            className="mt-1"
                                                                                        >
                                                                                            Shop
                                                                                            now
                                                                                        </p>
                                                                                    </div>
                                                                                )
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    ))}

                                    {navigation.pages.map((page) => (
                                        <a
                                            key={page.name}
                                            href={page.href}
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                        >
                                            {page.name}
                                        </a>
                                    ))}
                                </div>
                            </Popover.Group>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {user.email ? (
                                        <>
                                            <button
                                                onClick={openAddProductModal}
                                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium bg-gray-700 text-white hover:bg-gray-800"
                                            >
                                                Add Product
                                            </button>
                                            <span className="text-sm font-medium text-gray-700">
                                                {user.email}
                                            </span>
                                            <button
                                                onClick={handleLogout}
                                                className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                            >
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <Link href={"/auth/sign-in"}>
                                                <a
                                                    href="#"
                                                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                                >
                                                    Sign in
                                                </a>
                                            </Link>
                                            <Link href={"/auth/sign-up"}>
                                                <a
                                                    href="#"
                                                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                                >
                                                    <span
                                                        className="h-6 w-px bg-gray-200"
                                                        aria-hidden="true"
                                                    />
                                                    Create account
                                                </a>
                                            </Link>
                                        </>
                                    )}
                                </div>

                                <div className="hidden lg:ml-8 lg:flex">
                                    <a
                                        href="#"
                                        className="text-gray-700 hover:text-gray-800 flex items-center"
                                    >
                                        <img
                                            src="https://tailwindui.com/img/flags/flag-canada.svg"
                                            alt=""
                                            className="w-5 h-auto block flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-sm font-medium">
                                            CAD
                                        </span>
                                        <span className="sr-only">
                                            , change currency
                                        </span>
                                    </a>
                                </div>

                                {/* Search */}
                                <div className="flex lg:ml-6">
                                    <a
                                        href="#"
                                        className="p-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">Search</span>
                                        <SearchIcon
                                            className="w-6 h-6"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>

                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <a
                                        href="#"
                                        className="group -m-2 p-2 flex items-center"
                                    >
                                        <ShoppingBagIcon
                                            className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                                            0
                                        </span>
                                        <span className="sr-only">
                                            items in cart, view bag
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
