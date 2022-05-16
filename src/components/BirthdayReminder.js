import React, {useState} from 'react'
import {data} from "./data"

const BirthdayReminder = () => {
const [people, setPeople] = useState(data);

  return (
      <div className='main' >
          <h1>3 birthday remaining</h1>
       {people.map ((person) => {
            const {id, name, age} = person;
            return (
                <div key={id}>
                    <div className='inner1'>
                  <img src="girl.jpg" alt="" />
                  <div className="inner0">
                  <h3>{name}</h3>
                  <p>{age} years</p>
                  </div>
                  </div>
        </div>
         )  })}
    <button type='button' onClick={() => setPeople([])}> Clear all</button>
    </div>
  )
}

export default BirthdayReminder