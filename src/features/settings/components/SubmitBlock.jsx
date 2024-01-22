import { Button, Card, Form } from "src/modules/common/components";

function SubmitBlock() {
  return (
    <Card>
      {/* <Form.Submit className="w-full">Save changes</Form.Submit> */}
      <Button type="submit" className="w-full" variant="primary-bg">
        Save profile information
      </Button>
    </Card>
  );
}
export default SubmitBlock;
