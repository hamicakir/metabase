import { withLogoBackground } from "metabase/hoc/Background";
import fitViewPort from "metabase/hoc/FitViewPort";

// Auth components expect a full viewport experience to center most of the pages
const AuthApp = ({ children }) => children;

export default withLogoBackground(fitViewPort(AuthApp));
