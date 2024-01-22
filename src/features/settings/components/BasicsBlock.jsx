import { Card, Form } from "src/modules/common/components";
import SettingsTitle from "./SettingsTitle";

function BasicsBlock() {
  return (
    <Card className="space-y-4">
      <SettingsTitle>Basics</SettingsTitle>
      <Form.Field
        label="Website URL"
        name="websiteUrl"
        id="website"
        type="text"
        placeholder="https://yoursite.com"
      />
      <Form.Field
        label="Location"
        type="text"
        name="location"
        id="location"
        placeholder="Odessa, Ukraine"
      />
      <Form.TextArea
        name="bio"
        id="bio"
        label="Bio"
        placeholder="A short bio..."
      />
    </Card>
  );
}
export default BasicsBlock;
