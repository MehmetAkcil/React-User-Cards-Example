

// https://randomuser.me/api/?results=5

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CardList()
{

   const [users, setUsers] = useState([]);


   const findUsers = async () => {

      try{
         
         const response = await axios.get('https://randomuser.me/api/?results=10')

         setUsers(response?.data.results)

      }catch(err){

         console.log(err)

      }
   }

   useEffect(() => {
      
      findUsers()

   }, [])

   return (
      <div className="container my-3">

         <div className="card-list">

            {users && users.map((user, index) => (
               <div className="card-item text-center" key={index}>
                  <div className="image">
                     <img src={user.picture.large} alt={user.id.value} />
                  </div>
                  <div className="detail">
                     <h3>
                        {user.name.title}. {user.name.first} {user.name.last}
                     </h3>
                     <p>
                        Email: {user.email}
                     </p>
                     <p>
                        Phone: {user.phone}
                     </p>
                     <p>
                        Gender: {user.gender}
                     </p>
                     <p>
                        Country: {user.location.country}
                     </p>
                  </div>
               </div>
            ))}

         </div>
      </div>
   )
}