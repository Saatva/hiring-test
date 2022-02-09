import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "components/select";
import { mattresses } from "assets/mattresses.json";

const mattressesList = Object.entries(mattresses);

describe("Select component", () => {
    const renderComponent = () => {
        const handleSelect = jest.fn((value) => value);

        const { getAllByRole } = render(
            <Select
                mattressesList={mattressesList}
                selected="classic"
                onSelect={handleSelect}
                label="select mattress type"
            />
        );

        return { handleSelect, getAllByRole };
    };

    test("Should render 3 options", () => {
        const { getAllByRole } = renderComponent();
        const selectOptions = getAllByRole("button");
        expect(selectOptions.length).toEqual(3);
    });

    test("Should change the selected option on click", () => {
        const { getAllByRole, handleSelect } = renderComponent();
        const selectOptions = getAllByRole("button");
        userEvent.click(selectOptions[0]);
        userEvent.click(selectOptions[1]);
        userEvent.click(selectOptions[2]);

        expect(handleSelect.mock.results[0].value).toBe("classic");
        expect(handleSelect.mock.results[1].value).toBe("loom");
        expect(handleSelect.mock.results[2].value).toBe("zen");
    });
});
