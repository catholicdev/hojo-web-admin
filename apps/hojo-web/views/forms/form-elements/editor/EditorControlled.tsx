// ** React Imports
// ** Component Import
import ReactDraftWysiwyg from "@web/@core/components/react-draft-wysiwyg";
// ** Third Party Imports
import { EditorState } from "draft-js";
import { useState } from "react";

const EditorControlled = () => {
  // ** State
  const [value, setValue] = useState(EditorState.createEmpty());

  return <ReactDraftWysiwyg editorState={value} onEditorStateChange={(data) => setValue(data)} />;
};

export default EditorControlled;
