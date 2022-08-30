import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Student() {
    const paperStyle={padding:'50px 20px', width:1000,margin:"20px auto"}
    const[firstName,setfirstName]=useState('')
    const[lastName,setlastName]=useState('')
    const[email,setEmail]=useState('')
    const[age,setAge]=useState('')
    const[major,setMajor]=useState('')
    const[password,setPassword]=useState('')
    const[wantResource,setWantResource]=useState('false')
    const[students,setStudents]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const student={firstName,lastName,email,age,major,password,wantResource}
    console.log(student)
    fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)
  }).then(()=>{
    console.log("New Student added")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/student/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setStudents(result);
  }
)
},[])
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"Black"}}><u>Student info</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Student First Name" variant="outlined" fullWidth 
      value={firstName}
      onChange={(e)=>setfirstName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Last Name" variant="outlined" fullWidth 
      value={lastName}
      onChange={(e)=>setlastName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Password" variant="outlined" fullWidth 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Email" variant="outlined" fullWidth //*
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Age" variant="outlined" fullWidth 
      value={age}
      onChange={(e)=>setAge(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Major" variant="outlined" fullWidth 
      value={major}
      onChange={(e)=>setMajor(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form>
   
    </Paper>
    <h1>Students</h1>

    <Paper elevation={3} style={paperStyle}>

      {students.map(student=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
         Id:{student.id}<br/>
         First Name:{student.firstName}<br/>
         Last Name:{student.lastName}<br/>
         Password:{student.password}<br/>
         Email:{student.email}<br/>
         Age:{student.age}<br/>
         Major:{student.major}<br/>


        </Paper>
      ))
}


    </Paper>



    </Container>
  );
}
