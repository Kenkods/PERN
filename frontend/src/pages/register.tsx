import { useState } from 'react';
import axios from 'axios';

export const Register :React.FC=()=>{
const [form, setform]= useState({
  email : '',
  username : '',
  password : '',
  confirm_password: '',
});

const change= (e: React.ChangeEvent<HTMLInputElement>)=>{
  setform({...form, [e.target.name]: e.target.value});
};

const submit = async (e:React.FormEvent)=>{

  e.preventDefault();

  if(form.password!==form.confirm_password){
    alert('Password Mismatch!');
    return;
  }



  try{
    const res= await axios.post('http://localhost:3000/api/register',{
      email:form.email,
      username:form.username,
      password:form.password,

    });
     alert(res.data.message);
  }
  catch(err: any){
    alert(err.response?.data.message || "Register Failed");

  }


};

return (
  <form onSubmit={submit}>
      <input type='email' placeholder='Email' name='email' value={form.email} onChange={change}></input>
      <input type='username' placeholder='Username' name='username' value={form.username} onChange={change}></input>
      <input type='password' placeholder='Password' name='password' value={form.password} onChange={change}></input>
      <input type='password' placeholder='Confirm Password' name='confirm_password' value={form.confirm_password} onChange={change}></input>

  </form>
);

}

