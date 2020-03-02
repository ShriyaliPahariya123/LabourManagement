import React,{useEffect} from 'react';
import clsx from 'clsx';
import { Container, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper' 
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Button from '@material-ui/core/Button'
import {BaseUrl,postData,postDataAndImage,getData} from '../FetchServices';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel'; 
import Select from '@material-ui/core/Select';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { async } from 'q';

const useStyles = makeStyles(theme => ({
    
    paper:{padding:'20px',marginTop:'20px'},
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    formControl: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      margin: theme.spacing(1),
      minWidth: 340,
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
    group: {
        margin: theme.spacing(1, 0),
      },
      bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
      },
      input: {
        display: 'none',
      },
      button: {
        marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      background : '#3f51b5',
      },
      link: {
        display: 'flex',
      },
      icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
      },
  }));


  function AddSubcategory(props){
      const classes = useStyles();
      const [categoryId,setcategoryId]=React.useState('');
      const [subcategoryName,setsubcategoryName]=React.useState('');
      const [message,setMessage]=React.useState('');
      const inputLabel = React.useRef(null);
      const [labelWidth, setLabelWidth] = React.useState(0);
      const [getSList,setSList]=React.useState([]);
      const [getPList,setPList]=React.useState([]);


     const readcategoryList=async()=>{
          var list= await getData('category/displayallcategory')
          setSList(list)   
      }

     useEffect(()=>{
         readcategoryList()
         setLabelWidth(inputLabel.current.offsetWidth);
     },[]);

     const categoryList=()=>{
         return getSList.map((item,index)=>{
             return(<MenuItem value={item.categoryId}>{item.categoryName}</MenuItem>)
         })
     }


    const addnewrecord=async()=>{
        // use body for sending data to node
         
    const body={
      
    'categoryId':categoryId,
    'subcategoryName':subcategoryName,
    
}
const result=await postData('subcategory/addnewrecord',body) 
if(result)
{
  setcategoryId('')
  setsubcategoryName('')
  setMessage('Record Submitted.....')
}
else{
  setMessage('Not Submitted..........')
}

    }

    const oncategoryChange=(event)=>{
        setcategoryId(event.target.value)
    }


    const clearMessage=async()=>{
        setMessage('')
    }
    

     return (<div>
      <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/Dashboard"  className={classes.link}>
        <HomeIcon className={classes.icon} />
        Dashboard
      </Link>
      <Typography color="textPrimary" className={classes.link}>
        <GrainIcon className={classes.icon} />
        Add Subcategory
      </Typography>
    </Breadcrumbs>
         <Container maxWidth='xs'>
            
             <Paper className={classes.paper}>
               <Typography><center><h2>ADD SUBCATEGORY</h2></center></Typography>
                 <Grid container spacing={1}>

                   {/* school dropdown */}
                     <Grid item xs={12}>
                     <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                       Category
                      </InputLabel>
                         <Select
                          value={categoryId}
                          onClick={clearMessage}
                          onChange={(event)=>oncategoryChange(event)}
                           input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
                           >
                         { categoryList()}
                          </Select>
                     </FormControl> 

                     </Grid>



                      {/* entering the subcategory*/}
                      <Grid item xs={12}>
                      <TextField
                      id="outlined-dense"
                      label="Subcategory Name"
                      className={clsx(classes.textField, classes.dense)}
                      margin="dense"
                      value={subcategoryName}
                      variant="outlined"
                     onChange={(event)=>setsubcategoryName(event.target.value)}
                     fullWidth
                     onClick={clearMessage}
                      /> 
                      </Grid>

                      <Grid item xs={12}>
                      <Button variant="contained" color="primary" onClick={addnewrecord} className={classes.button} fullWidth>
                      Submit
                      </Button>
                     </Grid>
                     <Typography>
                      {message}
                     </Typography>


                     </Grid>


                      </Paper>

         </Container></div>
     )

     //end

  }
   export default AddSubcategory;