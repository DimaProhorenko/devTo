import SettingsContent from "src/features/settings/components/SettingsContent";
import { Main, Section } from "src/modules/common/components";

function Settings() {
  return (
    <Section>
      <Main>
        <Main.Sidebar>Small</Main.Sidebar>
        <Main.Body>
          <SettingsContent />
        </Main.Body>
      </Main>
    </Section>
  );
}
export default Settings;
