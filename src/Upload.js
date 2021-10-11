import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import Other from './Other';


export default function Upload() {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/Newpage'), [history]);

  return (
      <div class name="Other">
<Other

/>
 <button type="button" onClick={handleOnClick}>  
    Upload
    </button>
    </div>
  );
}