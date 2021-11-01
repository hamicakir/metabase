import MetabaseSettings from "metabase/lib/settings";

import "./advanced_config";
import "./advanced_permissions";
import "./audit_app";
import "./auth";
import "./caching";
import "./collections";
import "./embedding";
import "./moderation";
import "./sandboxes";
import "./sharing";
import "./snippets";
import "./store";
// PLUGINS:
import "./tools";
import "./whitelabel";

// SETTINGS OVERRIDES:

// NOTE: temporarily use "latest" for Enterprise Edition docs
MetabaseSettings.docsTag = () => "latest";
MetabaseSettings.isEnterprise = () => true;
