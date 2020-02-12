import React, {useContext, useState} from 'react';
import useHttp from "../hooks/http.hook";
import AuthContext from "../context/AuthContext";
import {useHistory} from 'react-router-dom';
import PlaidLink from 'react-plaid-link'

const CreatePage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext)
  const {request} = useHttp();
  const [link, setLink] = useState("");

  const pressHandler = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await request('/api/link/generate', 'POST', {from: link}, {
          Authorization: `Bearer ${auth.token}`
        });
        history.push(`/detail/${data.link._id}`);
      } catch (e) {

      }
    }
  };

  const handleOnSuccess = (token, metadata) =>{
    // send token to client server
  };

  const handleOnExit = () => {
    // handle the case when your user exits Link
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
      <PlaidLink
        clientName="Your app name"
        env="sandbox"
        product={["auth", "transactions"]}
        publicKey="aa45ff14d6c44b9bdb2a93fa7a256f"
        onExit={handleOnExit}
        onSuccess={handleOnSuccess}>
        Open Link and connect your bank!
      </PlaidLink>
    </div>
  )
};

export default CreatePage;