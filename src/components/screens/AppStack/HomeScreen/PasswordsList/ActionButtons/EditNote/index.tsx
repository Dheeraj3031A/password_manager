import EditorDialog, {
  EditorDialogRef,
} from '@app/components/shared/EditorDialog';
import {TStoredPassword} from '@app/types/Password';
import {useRef, useState} from 'react';
import {IconButton} from 'react-native-paper';
import SaveButton from './SaveButton';

type Props = {
  data: TStoredPassword;
};

function EditNote({data}: Props) {
  const editorRef = useRef<EditorDialogRef>(null);
  const [showEditor, setShowEditor] = useState(false);

  function handleEdit() {
    setShowEditor(true);
  }

  return (
    <>
      <IconButton icon={'pencil'} onPress={handleEdit} />

      <EditorDialog
        ref={editorRef}
        headline="Edit Note"
        visible={showEditor}
        setVisbile={setShowEditor}
        title={data.title}
        description={data.description}
        password={data.password}
        SaveButtonComponent={<SaveButton id={data.id} editorRef={editorRef} />}
      />
    </>
  );
}

export default EditNote;
