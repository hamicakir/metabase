/* eslint-disable react/prop-types */
import React from "react";

import { PLUGIN_FORM_WIDGETS } from "metabase/plugins";

import FormCheckBoxWidget from "./widgets/FormCheckBoxWidget";
import FormCollectionWidget from "./widgets/FormCollectionWidget";
import FormColorWidget from "./widgets/FormColorWidget";
import FormEmailWidget from "./widgets/FormEmailWidget";
import FormHiddenWidget from "./widgets/FormHiddenWidget";
import FormInputWidget from "./widgets/FormInputWidget";
import FormNumericInputWidget from "./widgets/FormNumericInputWidget";
import FormPasswordWidget from "./widgets/FormPasswordWidget";
import FormSelectWidget from "./widgets/FormSelectWidget";
import FormSnippetCollectionWidget from "./widgets/FormSnippetCollectionWidget";
import FormTextAreaWidget from "./widgets/FormTextAreaWidget";
import FormTextFileWidget from "./widgets/FormTextFileWidget";
import FormToggleWidget from "./widgets/FormToggleWidget";

const WIDGETS = {
  input: FormInputWidget,
  email: FormEmailWidget,
  text: FormTextAreaWidget,
  checkbox: FormCheckBoxWidget,
  color: FormColorWidget,
  password: FormPasswordWidget,
  select: FormSelectWidget,
  integer: FormNumericInputWidget,
  boolean: FormToggleWidget,
  collection: FormCollectionWidget,
  snippetCollection: FormSnippetCollectionWidget,
  hidden: FormHiddenWidget,
  textFile: FormTextFileWidget,
};

function getWidgetComponent(formField) {
  if (typeof formField.type === "string") {
    const widget =
      WIDGETS[formField.type] || PLUGIN_FORM_WIDGETS[formField.type];
    return widget || FormInputWidget;
  }
  return formField.type || FormInputWidget;
}

const FormWidget = ({ field, formField, ...props }) => {
  const Widget = getWidgetComponent(formField);
  return <Widget field={field} {...formField} {...props} />;
};

export default FormWidget;
