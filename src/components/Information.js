import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../store/actions'

function Info() {
    const [userName, setUserName] = useState()
    const myCounter = useSelector((state) => {
        return state.counter
    })
    const dispatch = useDispatch();
    const name = useSelector((state) => {
        return state.user.name
    })
    return (
        <div>
            <div>
                Counter from Info Component: {myCounter}
            </div>
            <div>
                User name : {name}
            </div>
            <input type="text" placeholder="Enter username" onChange={(e)=>setUserName(e.target.value)}/>
            <button onClick={()=> dispatch(updateUser(userName))}>Update Name</button>
        </div>
    )
}

export default Info;
