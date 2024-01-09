import { Form } from ".";

function SearchBar() {
  return (
    <Form className="min-w-96">
      <Form.InputM placeholder="Search" name="search" type="text" />
    </Form>
  );
}
export default SearchBar;
