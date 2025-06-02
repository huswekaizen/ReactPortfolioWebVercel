import React from "react";
import { useState } from "react";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { GiSkills } from "react-icons/gi";
import Stacks from "./website/stacks";
import Card from "./website/card";
import { BrowserRouter as Router, NavLink } from "react-router-dom";


function Crud() {
    const [usernameInput, setUsernameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [submittedUsers, setSubmittedUsers] = useState([]);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const [isAdd, setIsAdd] = useState(false);
    const [detailInput, setDetailInput] = useState("");
    const [isDetail, setIsDetail] = useState(false);

    const [newUsernameInput, setNewUsernameInput] = useState("");
    const [newEmailInput, setNewEmailInput] = useState("");
    const [newDetailInput, setNewDetailInput] = useState("");

    const [users, setUsers] = useState(false);

    const handleClickUser = () => {
        if (usernameInput.trim() !== "" && emailInput.trim() !== "") {  
            setSubmittedUsers([...submittedUsers, { username: usernameInput, email: emailInput, detail: "" }]);
            setUsernameInput("");
            setEmailInput(""); 
            setUsers(false);
        }
    };



    const handleEditUser = (index) => {
        const selectedUser = submittedUsers[index];
    
        setIsOpen(true);
        setSelectedIndex(index);
        setNewUsernameInput(selectedUser.username);
        setNewEmailInput(selectedUser.email);
        setDetailInput(selectedUser.detail || ""); // Set current detail
        setNewDetailInput(selectedUser.detail || ""); // ✅ ADD THIS LINE
        // ✅ Reset isDetail based on whether detail exists
        setIsDetail(selectedUser.detail && selectedUser.detail.trim() !== "");

    
        setIsAdd(false);
    };
    
    

    // Function to update the user details
    const UpdateUser = () => {
        const updatedUsers = [...submittedUsers];
        updatedUsers[selectedIndex] = {
            username: newUsernameInput,
            email: newEmailInput,
            detail: newDetailInput
        };

        setSubmittedUsers(updatedUsers);
        setIsOpen(false); // Close the update form
            
    };

    const DeleteUser = (index) => {
        const filteredUsers = submittedUsers.filter((_, i) => i !== index);
        setSubmittedUsers(filteredUsers);
        setIsOpen(false);
        setIsAdd(false);
    };

    const AddUser = (index) => {
        setIsAdd(true);
        setSelectedIndex(index);
        setIsOpen(false);
    }

    const CancelDetail = () => {
        setIsAdd(false);
        setDetailInput("");
    }

    const SubmitDetail = () => {
        if (selectedIndex !== null) {
            const updatedUsers = [...submittedUsers];
            updatedUsers[selectedIndex] = {
                ...updatedUsers[selectedIndex], // Preserve existing username and email
                detail: detailInput, // Update only the detail
            };
            setSubmittedUsers(updatedUsers);
        }
        setIsAdd(false);
        setDetailInput("");
    }

    const addUser = () => {
        setUsers(true);
    }
   

    return (
        <div className="web">
            <div className="crud">
                <button onClick={addUser}>+</button>
                
            </div>

            {users && (
                <div className="username">
                    <div>
                        <label htmlFor="username">Enter username</label>
                        <input
                            name="username"
                            type="text" 
                            value={usernameInput} 
                            onChange={(e) => setUsernameInput(e.target.value)} 
                        />
                        <br />
                        <label htmlFor="email">Enter email</label>
                        <input
                            name="email"
                            type="email" 
                            value={emailInput} 
                            onChange={(e) => setEmailInput(e.target.value)} 
                        />
                        <button onClick={handleClickUser}>Add</button>
                    </div>
                    <button onClick={() => setUsers(false)}>Cancel</button>
                </div>
            )}

            {submittedUsers.map((user, index) => (
                <div key={index} className="submitted-user">
                    <h1>Username: {user.username}</h1>
                    <h1>Email: {user.email}</h1>
                        <div>
                            <h3>{user.detail}</h3>
                        </div>
                    <button onClick={() => handleEditUser(index)}>Update</button>
                    <button onClick={() => AddUser(index)}>Add</button>
                    <button onClick={() => DeleteUser(index)}>Delete</button>
                </div>
            ))}

            {isOpen && (
                <div className="update">
                    <label htmlFor="username">Enter new username</label>
                    <input
                        name="username"
                        type="text"
                        value={newUsernameInput}
                        onChange={(e) => setNewUsernameInput(e.target.value)}
                    />
                    <br />
                    <label htmlFor="email">Enter new email</label>
                    <input
                        name="email"
                        type="email"
                        value={newEmailInput}
                        onChange={(e) => setNewEmailInput(e.target.value)}
                    />
                    {isDetail && (
                        <div>   
                            <label htmlFor="detail">Enter new detail</label>
                            <input
                                name="detail"
                                type="text"
                                value={newDetailInput}
                                onChange={(e) => setNewDetailInput(e.target.value)} // ✅ Fix this
                            />

                        </div>
                    )}
                    <button onClick={UpdateUser}>Update</button>
                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                </div>
            )}

            {isAdd && (
                <div className="add">
                    <label htmlFor="username">Add some details:</label>
                    <input
                        name="detail"
                        type="text"
                        value={detailInput}
                        onChange={(e) => setDetailInput(e.target.value)}
                    />
                    <button onClick={() => SubmitDetail()}>Submit</button>
                    <button onClick={() => CancelDetail()}>Cancel</button>
                </div>
            )}
        </div>
    );
}

export default Crud;