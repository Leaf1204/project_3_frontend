//BC: I think I can do both sign up and log in in the same form if I switch the label name

import React from "react";

const authForm = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.outreach);

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/"); //Push back to display page
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <label>Password</label>
      <input
        type="text"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <input type="submit" value={props.label} />
    </form>
  );
};

export default authForm;
