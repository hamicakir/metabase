import { PLUGIN_MODERATION } from "metabase/plugins";

import ModerationStatusIcon from "./components/ModerationStatusIcon/ModerationStatusIcon";
import QuestionModerationSection from "./components/QuestionModerationSection/QuestionModerationSection";
import {
  getStatusIconForQuestion,
  getStatusIcon,
  getModerationTimelineEvents,
} from "./service";

Object.assign(PLUGIN_MODERATION, {
  QuestionModerationSection,
  ModerationStatusIcon,
  getStatusIconForQuestion,
  getStatusIcon,
  getModerationTimelineEvents,
});
