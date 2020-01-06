import React, {useContext, useState} from 'react';
import useHttp from "../hooks/http.hook";
import AuthContext from "../context/AuthContext";
import {useHistory} from 'react-router-dom';

const CreatePage = () =>  {
  const history = useHistory();
  const auth = useContext(AuthContext)
  const {request} = useHttp();
  const [link, setLink] = useState("");

  const pressHandler = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await request('/api/link/generate', 'POST', {from: link},  {
          Authorization: `Bearer ${auth.token}`
        });
        history.push(`/detail/${data.link._id}`);
      } catch (e) {
        
      }
    }
  };

  return (
    <div className="create-page">
      <h1>Create page</h1>
      <div>
        <input
          placeholder="add link"
          id="link"
          type="text"
          value={link}
          onChange={e => setLink(e.target.value)}
          onKeyPress={pressHandler}
        />
        <label htmlFor="link">Ведите ссылку</label>
      </div>

    </div>
  )
};

export default CreatePage;