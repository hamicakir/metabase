import { GET, POST } from "metabase/lib/api";
import { createEntity } from "metabase/lib/entities";

const listRevisions = GET("/api/revision");

const ASSOCIATED_ENTITY_TYPES = ["questions", "dashboards"];

const Revision = createEntity({
  name: "revisions",
  api: {
    list: ({ model_type, model_id }, options) =>
      // add model_type and model_id to each object since they are required for revert
      listRevisions({ entity: model_type, id: model_id }).then(revisions =>
        revisions.map(revision => ({
          model_type,
          model_id,
          ...revision,
        })),
      ),
    revert: POST("/api/revision/revert"),
  },

  objectActions: {
    // use thunk since we don't actually want to dispatch an action
    revert: revision => (dispatch, getState) =>
      Revision.api.revert({
        entity: revision.model_type,
        id: revision.model_id,
        revision_id: revision.id,
      }),
  },

  actionShouldInvalidateLists(action) {
    const entities = require("metabase/entities");
    for (const type of ASSOCIATED_ENTITY_TYPES) {
      if (entities[type].actionShouldInvalidateLists(action)) {
        return true;
      }
    }

    return action.type === this.actionTypes.INVALIDATE_LISTS_ACTION;
  },
});

export default Revision;
