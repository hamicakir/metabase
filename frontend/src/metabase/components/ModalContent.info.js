/* eslint-disable react/prop-types */
import React from "react";

import Button from "metabase/components/Button";
import ModalContent from "metabase/components/ModalContent";

export const component = ModalContent;
export const category = "modal";

export const description = `
A standard modal content layout, including header with title and close button, body, and footer.
`;

const Modal = ({ children }) => (
  <div className="rounded bordered">{children}</div>
);

export const examples = {
  default: (
    <Modal>
      <ModalContent
        title="Do something crazy?"
        onClose={() => alert("close!")}
        footer={<Button danger>Ok</Button>}
      >
        Are you sure?
      </ModalContent>
    </Modal>
  ),
};
