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
  const { getByA11yLabel } = render(<Details route={route} />);

  const input = getByA11yLabel("Title");

  expect(input.value).toBe("Dexterity");
});
