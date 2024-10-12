import React from 'react'
import axios from 'axios';

import { useParams } from 'react-router-dom';
import {  useUsersDetails } from '../hooks/queries';


function UserDetails() {

    
    const {id} = useParams();

    const {data} = useUsersDetails(id);

    console.log(data)
  return (
    <div>UserDetails - {id}</div>
  )
}

export default UserDetails