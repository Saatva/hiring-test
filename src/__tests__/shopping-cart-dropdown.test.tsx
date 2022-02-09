import React from "react";
import { fireEvent, getByText, render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppContextProvider } from "context";
import MattressPage from "pages/mattress";
import Navbar from "components/navbar";

describe("Shopping cart", () => {
    const renderShoppingCart = () => {
        const { getByRole, getByText, getAllByRole } = render(
            <AppContextProvider>
                <Navbar />
                <MattressPage />
            </AppContextProvider>
        );

        return { getByRole, getByText, getAllByRole };
    };

    test("should render shopping cart button with 0 items", () => {
        const { getByRole } = renderShoppingCart();
        const shoppingCartButton = getByRole("button", { name: /0/i });
        const classicSelectButton = getByRole("button", {
            name: /saatva classic/i,
        });

        expect(shoppingCartButton).toBeInTheDocument();
        expect(classicSelectButton).toBeInTheDocument();
    });

    test("should display badge on cart button", () => {
        const { getByRole } = renderShoppingCart();
        const addToCartButton = getByRole("button", {
            name: /add to cart/i,
        });
        expect(addToCartButton).toBeInTheDocument();

        userEvent.click(addToCartButton);
        const shoppingCartButton = getByRole("button", {
            name: /1/i,
        });

        expect(shoppingCartButton).toBeInTheDocument();
    });

    test("should add 3 items to shopping cart", () => {
        const { getAllByRole, getByRole } = renderShoppingCart();
        const addToCartButton = getByRole("button", {
            name: /add to cart/i,
        });
        const classicSelectButton = getByRole("button", {
            name: "Saatva Classic",
        });
        const loomSelectButton = getByRole("button", {
            name: "Loom & Leaf",
        });
        const zenSelectButton = getByRole("button", {
            name: "Zenhaven",
        });

        // Add classic mattress
        userEvent.click(classicSelectButton);
        userEvent.click(addToCartButton);

        // Add Loom mattress
        userEvent.click(loomSelectButton);
        userEvent.click(addToCartButton);

        // Add zen mattress
        userEvent.click(zenSelectButton);
        userEvent.click(addToCartButton);

        // Cart button
        const shoppingCartButton = getByRole("button", {
            name: /3/i,
        });

        expect(getAllByRole("listitem").length).toEqual(3);
        expect(shoppingCartButton).toBeInTheDocument();
    });

    test("should increase the quantity", () => {
        const { getByRole, getByText } = renderShoppingCart();
        const addToCartButton = getByRole("button", {
            name: /add to cart/i,
        });

        userEvent.click(addToCartButton);

        const increaseQuantityButton = getByRole("button", {
            name: "+",
        });

        expect(within(getByRole("listitem")).findByRole("span", { name: "2" }));

        userEvent.click(increaseQuantityButton);
        expect(within(getByRole("listitem")).findByRole("span", { name: "3" }));
    });

    test("subtract button should be disabled when quantity is 1", () => {
        const { getByRole, getByText } = renderShoppingCart();
        const addToCartButton = getByRole("button", {
            name: /add to cart/i,
        });

        userEvent.click(addToCartButton);

        const subtractButton = getByRole("button", {
            name: "-",
        });

        expect(subtractButton).toHaveAttribute("disabled");
        userEvent.click(subtractButton);
        expect(within(getByRole("listitem")).findByRole("span", { name: "1" }));
    });

    test("subtract button should decrease quantity by 1", () => {
        const { getByRole } = renderShoppingCart();
        const addToCartButton = getByRole("button", {
            name: /add to cart/i,
        });

        // Set the quantity to 2
        userEvent.click(addToCartButton);
        userEvent.click(addToCartButton);

        const subtractButton = getByRole("button", {
            name: "-",
        });

        expect(subtractButton).not.toHaveAttribute("disabled");
        userEvent.click(subtractButton);
        expect(within(getByRole("listitem")).findByRole("span", { name: "1" }));
    });

    test("delete button should remove the item from shopping cart", () => {
        const { getByRole, getAllByRole, getByText } = renderShoppingCart();
        const addToCartButton = getByRole("button", {
            name: /add to cart/i,
        });

        // Add one item
        userEvent.click(addToCartButton);

        const deleteItemButton = getByRole("button", {
            name: "delete-bin-7-line.svg",
        });

        expect(deleteItemButton).toBeInTheDocument();
        expect(getAllByRole("listitem").length).toEqual(1);

        userEvent.click(deleteItemButton);

        const emptyCartMessage = getByText(/Your Shopping Cart is empty/i);
        expect(emptyCartMessage).toBeInTheDocument();
    });
});
