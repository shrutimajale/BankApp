import React, { useEffect, useState , useRef } from 'react';
import axios from 'axios';
import '/home/credentek/Bank Demo/bankdemo/src/components/cssfiles/admin.css'; 
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate} from 'react-router-dom';
import { MdOutlineFileDownload } from "react-icons/md";


const Admin = () => {
    const token = localStorage.getItem('token1') || null;
    const navigate = useNavigate();
    const [admins, setAdmins] = useState([]);
    const [users, setUsers] = useState([]);
    const [file, setFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [showDownloadButton, setShowDownloadButton] = useState(false);
    const [showBulkRegistration, setShowBulkRegistration] = useState(false); 
    const fileInputRef = useRef(null);

    useEffect(() => {
        fetchAdminsAndUsers();
       
    }, []);
    const handleDownloadPdf = () => {
        window.location.href = 'http://192.168.0.78:8080/user/pdf';
    };

    const handleDownloadExcel = () => {
        window.location.href = 'http://192.168.0.78:8080/user/excel';
    };
    const fetchAdminsAndUsers = async () => {
        try {
            const response = await axios.get('http://192.168.0.78:8080/admin');
            const data = response.data;

            // Assuming you have a way to distinguish between admin and user
            const adminsData = data.filter(item => item.role === 'ADMIN');
            const usersData = data.filter(item => item.role === 'USER');

            setAdmins(adminsData);
            setUsers(usersData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const handleDelete = async (id) => {
      
          
                await axios.delete(`http://192.168.0.78:8080/delete/${id}`)
                
                .then(() => {
                    fetchAdminsAndUsers();  });
            
        
    };

    const handleUpdate = async (id) => {
      const username=prompt("Enter new username:")
      const email=prompt("Enter new email:")
      const role=prompt("Enter Role:")

      if(username&&email&&role){
        await axios.put(`http://192.168.0.78:8080/update/${id}`,{username,email,role})
        
        .then(response => {
                setUsers(users.map(user=>(user.id===id ?response.data:user)))
        });
    };
    
   
};

const logoutButton = async () => {
    try {
     const response= await axios.post('http://192.168.0.78:8080/logout', {}, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      });
  } catch (error) {
      console.error("Error logging out:", error);
  } finally {
      localStorage.removeItem('token1');
      navigate('/');
  }
  };
const handleFileChange = (event) => {
    setFile(event.target.files[0]);
};

const handleFileUpload =async (e) => {
    if (!file) {
        alert('Please select a file first.');
        return;
    }

    const formData = new FormData();
    formData.append("file", file);
try{
   const response=await axios.post('http://192.168.0.78:8080/upload-file', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    
   alert(response.data);
   setShowDownloadButton(true);
   setFile(null); // Clear the file state
   if (fileInputRef.current) {
    fileInputRef.current.value = null; // Clear the file input field
}
}catch(errorMessage){
    if(errorMessage.response){
        alert(`${errorMessage.response.data}`)
        setErrorMessage(errorMessage.response.data)
        setFile(null); // Clear the file state
                if (fileInputRef.current) {
                    fileInputRef.current.value = null; // Clear the file input field
                }
    }
};


};
const downloadFileFormat = () => {
    // Trigger the download of the rejected filesetFile(null);
    window.location.href = 'http://192.168.0.78:8080/downloadFileFormat';
};



const handleDownload = () => {
    // Trigger the download of the rejected file
    window.location.href = 'http://192.168.0.78:8080/downloadRejectedFile';
    setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = null;
        }
};
    return (
        <div className="admin-container">
             <div className="user-info">
                <button type='button' className='logoutbutton1' onClick={logoutButton}>Logout</button>
            </div>
            <div className="button-container">
              <button
                className="bulk-registration-button"
                onClick={() => setShowBulkRegistration(!showBulkRegistration)}
            >
                 {showBulkRegistration ? "Back to Admin Table" : "Bulk Registration"}
            </button>
            <button className="downloadButton" onClick={handleDownloadPdf}>PDF <MdOutlineFileDownload /></button>
            <button className="downloadButton" onClick={handleDownloadExcel}>Excel <MdOutlineFileDownload /></button>
            </div>
            {showBulkRegistration ? (
                <div className="bulk-registration-container">
                    <input type="file" accept=".csv"
                     onChange={handleFileChange}
                     ref={fileInputRef} />
                    <br/><button className="downloadButton" onClick={handleFileUpload}>Upload File</button>
                    <br/> <button className="downloadButton" onClick={downloadFileFormat}>Download File Format</button>
                    {showDownloadButton && (
                        <button className="downloadButton" onClick={handleDownload}>Download Rejected File</button>
                    )}
                </div>
              

            ) : (
                <div className="tables-container">
           
           
            <div className="admin-table-container">
                        <h2>Admin Table</h2>
                        <div className="table-container">
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {admins.map(admin => (
                                        <tr key={admin.id}>
                                            <td>{admin.id}</td>
                                            <td>{admin.username}</td>
                                            <td>{admin.email}</td>
                                            <td>{admin.role}</td>
                                            <td>
                                                <FaEdit className='icon' onClick={() => handleUpdate(admin.id, 'admins')} />
                                                <MdDelete className='deleteicon' onClick={() => handleDelete(admin.id, 'admins')} />
                                            </td>
                                        </tr>
                                    ))}
                </tbody>
            </table></div>
            </div>
            <div className="user-table-container">
            <br/>
                        <h2>User Table</h2>
                        <div className="table-container">
                            <table className="user-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td>
                                            <td>
                                                <FaEdit className='icon' onClick={() => handleUpdate(user.id, 'users')} />
                                                <MdDelete className='deleteicon' onClick={() => handleDelete(user.id, 'users')} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
            )}
        </div> 
                );
 
};

export default Admin;