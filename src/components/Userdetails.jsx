/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import "../assets/Styles/details.css";
import { Link, useParams } from "react-router-dom";

const Userdetails = () => {
  let [dels, setdels] = useState(null);
  let ids = useParams();
  let delid = ids.id;

  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/${delid}`)
      .then((ele) => {
        setdels(ele.data)
      });
  }, []);
  if (dels === null) {
    return <p>Sabar karooo..........</p>;
  }
  let {
    firstname,
    lastname,
    birthDate,
    email,
    phone,
    website,
    company = {},
    address = {},
  } = dels;


  return (
    <>
      <div className="delcontainer">
        <div className="details">
          <table>
            <tr>
              <th>firstname</th>
              <td>{firstname}</td>
            </tr>
            <tr>
              <th>lastname</th>
              <td>{lastname}</td>
            </tr>
            <tr>
              <th>birthDate</th>
              <td>{birthDate}</td>
            </tr>
            <tr>
              <th>email</th>
              <td>{email}</td>
            </tr>
            <tr>
              <th>phone</th>
              <td>{phone}</td>
            </tr>
            <tr>
              <th>website</th>
              <td>{website}</td>
            </tr>
            <tr>
              <th>company</th>
              <td>
                <tr>{company.name}</tr>
                <tr>{company.bs}</tr>
              </td>
            </tr>
            <tr>
              <th>address</th>
              <td>
                <tr>{address.street}</tr>
                <tr>{address.city}</tr>
                <tr>{address.zipcode}</tr>
              </td>
            </tr>
            <tr>
              <th></th>
              <td></td>
            </tr>
          </table>
          <Link to='/adminportal/users' style={{display:'block',textAlign:'center',fontSize:'20px',color:'white'}}>LOGOUT</Link>
        </div>
      </div>
    </>
  );
};

export default Userdetails;
