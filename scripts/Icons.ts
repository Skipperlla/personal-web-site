import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, fas } from "@fortawesome/free-solid-svg-icons";

export default function ExportIcons() {
  return library.add(fas, fab, faEnvelope);
}
