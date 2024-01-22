import { Card, Form } from "src/modules/common/components";
import SettingsTitle from "./SettingsTitle";

function BrandingBlock() {
  return (
    <Card>
      <SettingsTitle>Branding</SettingsTitle>
      <Form.ColorInput
        label="Brand Color"
        name="brandingColor"
        id="brandingColor"
      />
    </Card>
  );
}
export default BrandingBlock;
