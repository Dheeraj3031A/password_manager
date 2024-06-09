import EditorDialog from '@app/components/shared/EditorDialog';
import {TStoredPassword} from '@app/types/Password';
import {useState} from 'react';
import {IconButton} from 'react-native-paper';
import SaveButton from './SaveButton';

type Props = {
  data: TStoredPassword;
};

function EditNote({data}: Props) {
  const [showEditor, setShowEditor] = useState(false);

  function handleEdit() {
    setShowEditor(true);
  }

  return (
    <>
      <IconButton icon={'pencil'} onPress={handleEdit} />

      <EditorDialog
        headline="Edit Note"
        visible={showEditor}
        setVisbile={setShowEditor}
        title={data.title}
        description={data.description}
        password={data.password}
        SaveButtonComponent={({data: editedData, hideDialog}) => (
          <SaveButton id={data.id} data={editedData} hideDialog={hideDialog} />
        )}
      />
    </>
  );
}

export default EditNote;
