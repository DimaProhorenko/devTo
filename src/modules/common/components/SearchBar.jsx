import { Form } from ".";

function SearchBar() {
  return (
    <Form
      className="min-w-96"
      initialsValues={{
        search: "",
      }}
      validationSchema={{}}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form.Input placeholder="Search" name="search" type="text" />
    </Form>
  );
}
export default SearchBar;
