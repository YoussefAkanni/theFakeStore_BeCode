import React from "react";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
        name: {
          firstname: firstname,
          lastname: lastname,
        },
        address: {
          city: city,
          street: street,
          number: number,
          zipcode: zipcode,
        },
        phone: phone,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));

    // const resetInfo = () => {};
    setEmail("");
    setFirstname("");
    setLastname("");
    setNumber("");
    setPassword("");
    setPhone("");
    setUsername("");
    setZipcode("");
    setStreet("");
    setCity("");
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="box">
            <div>
              <p>Email</p>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </div>
            <div>
              <p>Username</p>
              <input
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
              />
            </div>
            <div>
              <p>Password</p>
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </div>
            <div>
              <p>Firstname</p>
              <input
                required
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
              />
            </div>
            <div>
              <p>Lastname</p>
              <input
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                type="text"
              />
            </div>
            <div>
              <p>Phone</p>
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
              />
            </div>
          </div>
          <div className="adresse">
            <div>
              <p>City</p>
              <input
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
              />
            </div>
            <div>
              <p>Street</p>
              <input
                required
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                type="text"
              />
              <p>number</p>
              <input
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="text"
              />
            </div>
            <div>
              <p>Zipcode</p>
              <input
                required
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                type="text"
              />
            </div>
          </div>
        </div>
        <button>create account</button>
      </form>
    </div>
  );
};

export default Register;
