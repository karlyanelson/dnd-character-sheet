import { render } from "@testing-library/react-native";
import Details from "./Details";

const route = {
  params: {
    id: "123425325",
    key: "DEX",
    title: "Dexterity",
    modifier: "+4",
    total: 19,
  },
};

test("Title input has correct value", () => {
  const { getByDisplayValue } = render(<Details route={route} />);

  const input = getByDisplayValue("Dexterity");

  // expect(input.value).toBe("Dexterity");
});
