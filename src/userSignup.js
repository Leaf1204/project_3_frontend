//http://localhost:3000/signup


import React from "react";

//I think Signup needs to be capitalized otherwise it won't compile
const Signup = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props);

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/"); //Push back to display page
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };



                      //TESTING
/////////////////////////////////////////////////////////////////////
const [user, setUser] = React.useState([]);
//Empty User
const emptyUser = {
  username: "",
  password: "",
  zipCode: 0
};

/////////////////////////////////////////////////////////////////////





  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value= "Create Username"
        onChange={handleChange}
      />
      <input
        type="number"
        name="zipCode"
        value= "Enter your zipCode"
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value="Create Password"
        onChange={handleChange}
      />
      <input type="submit" value={props.label} />
    </form>
  );
};

export default Signup;