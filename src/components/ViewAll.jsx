import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const ViewAll = () => {
    const [todos, changeTodos] = useState(
        [] 
    )
    const fetchData = () => {
        axios.get("https://friendsapi-re5a.onrender.com/view")
            .then(
                (response) => {
                    console.log(response.data)
                    changeTodos(response.data)
                }
            ).catch(
                (error) => {
                    console.log(error.message)
                    alert(error.message)

                }
            ).finally()
    }
    useEffect(() => { fetchData() }, [])
    return (

        <div>
            <NavBar />
            <h1><center>VIEWALL FRIENDS</center></h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">NAME</th>
                                    <th scope="col">FRIEND NAME</th>
                                    <th scope="col">FRIEND NICK NAME</th>
                                    <th scope="col">DESCRIBE YOUR FRIEND</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todos.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value.name}</th>
                                                <td>{value.friendName}</td>
                                                <td>{value.friendNickName}</td>
                                                <td>{value.DescribeYourFriend}</td>
                                            </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll