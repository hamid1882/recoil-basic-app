import React from 'react'
import { useRecoilState, useRecoilStateLoadable } from 'recoil'
import { counterState, draftState } from './redux/counter'

function Counter() {
  const [counterLoadable, setCounterLoadable] = useRecoilStateLoadable(counterState);
  const [draftLoadable, setDraftLoadable] = useRecoilStateLoadable(draftState);

  const HandleGetRandomQoute = () => {
    fetch("https://type.fit/api/quotes")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          const generateRandom = Math.floor(Math.random() * data.length)
          setCounterLoadable([{id: generateRandom.toString(), count: data[generateRandom].text}])
        });
  }

  const HandleGetRandomDraft = () => {
    fetch("https://6371c617078587786181ef9d.mockapi.io/draft")
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      setDraftLoadable(data)
    })
  }
  

  switch(counterLoadable.state) {
    case 'hasValue':
      return <div>
          <h1>Qoute generator</h1>
          <h3>{counterLoadable.contents[0].count}</h3>
          <button
          className="btn" 
          onClick={HandleGetRandomQoute}
          >Update</button>
          {
          draftLoadable?.state === "hasValue"
           && <h1>{draftLoadable.contents[1].text}</h1>
          }

          <button 
          className="btn"   
          onClick={HandleGetRandomDraft}>Get drafts</button>
        </div>;
    case 'loading':
      return <div>loading...</div>;
    case 'hasError':
      throw counterLoadable.contents;
  }
}

export default Counter
