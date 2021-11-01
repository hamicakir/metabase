/* eslint-disable react/prop-types */
import { dissoc } from "icepick";
import React from "react";
import { t } from "ttag";

import ModalContent from "metabase/components/ModalContent";
import EntityForm from "metabase/entities/containers/EntityForm";

const EntityCopyModal = ({
  entityType,
  entityObject,
  copy,
  onClose,
  onSaved,
  ...props
}) => (
  <ModalContent title={t`Duplicate "${entityObject.name}"`} onClose={onClose}>
    <EntityForm
      entityType={entityType}
      entityObject={{
        ...dissoc(entityObject, "id"),
        name: entityObject.name + " - " + t`Duplicate`,
      }}
      onSubmit={copy}
      onClose={onClose}
      onSaved={onSaved}
      submitTitle={t`Duplicate`}
      {...props}
    />
  </ModalContent>
);

export default EntityCopyModal;
