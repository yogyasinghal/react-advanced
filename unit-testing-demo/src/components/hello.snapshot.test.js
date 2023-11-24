import * as renderer from "react-test-renderer";
import Hello from "./Hello";

it("renders correctly", () => {
  const tree = renderer.create(<Hello name="Nag" />).toJSON();
  expect(tree).toMatchSnapshot();
});
