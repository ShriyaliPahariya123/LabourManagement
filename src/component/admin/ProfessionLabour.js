import React,{useEffect} from 'react'
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Avatar from '@material-ui/core/Avatar'
import {BaseUrl,postData,postDataAndImage,getData} from '../FetchServices';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {green,blue,orange} from '@material-ui/core/colors';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel'; 
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
// for date pickers
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:blue[500]
    },
    secondary: {
      main:orange[500]
    },
    type:"light"
  },
  status: {
    danger: 'orange',
  },

});




const useStyles=makeStyles(theme=>({
    paper:{padding:'30px',marginTop:'20px'},
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        padding: theme.spacing(4),
  
      },
      dense: {
          marginTop: theme.spacing(2),
        },
        button: {
          marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        background : '#3f51b5',
        width:'300px'
        },
        button1: {
          marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(3),
        background : '#3f51b5',
        },
        input:{
          display:'none',
          marginTop:theme.spacing(1)
        },
        rightIcon: {
          marginLeft: theme.spacing(1),
        },
        bigAvatar: {
          margin: 10,
          width: 60,
          height: 60,
        },
        root: {
            flexGrow: 1,
            
          },
          child:{
              padding: 4,
          },
          formControl: {
          minWidth: 300,
        },
          
}));


function AddLabour(props){
const classes=useStyles();
const [labelWidth, setLabelWidth] = React.useState(0);
const [getSList,setSList]=React.useState([]);
const [getPList,setPList]=React.useState([]);
const inputLabel = React.useRef(null);
const [categoryId,setcategoryId]=React.useState('');
const [subcategoryId,setsubcategoryId]=React.useState('');
const[Message,setMessage]=React.useState('')
const[getSClist,setSCList]=React.useState([])
const [getlist,setList]=React.useState([])  
const[labourId,setlabourId]=React.useState('')

const addNewRecord=async()=>{
  let formData=new FormData()
  formData.append('categoryId',categoryId)
  formData.append('subcategoryId',subcategoryId)
  formData.append('labourId',labourId)
  const config={headers:{'content-type':'multipart/form-data'}}
  const result=await postDataAndImage('labour/addproffesion',formData,config)
  if(result)
  {
   setMessage('Record Submitted...')
   setcategoryId('')
   setsubcategoryId('')
  }
  else
  {setMessage("Fail to Submit Record..")}
  }



// subcategory
const readAllSCRecords=async()=>{
let body={'categoryId':categoryId}
var list=await postData('subcategory/displayByCategoryId',body)
setSCList(list)
}
const menuSCList=()=>{
return getSClist.map((item,index)=>{
 
 return( <MenuItem value={item.subcategoryId}>{item.subcategoryName}</MenuItem>)
 
})
 
 }  


// calling on page
useEffect(()=>{
readAllRecords() 
setLabelWidth(inputLabel.current.offsetWidth);
},[])

// category
const readAllRecords=async()=>{
    var list=await getData('category/displayallcategory') 
    setList(list)   
    }
    
const menuList=()=>{
  return getlist.map((item,index)=>{
   
   return( <MenuItem value={item.categoryId}>{item.categoryName}</MenuItem>)
   
  })
   
   }
   const onCategoryChange=(event)=>{
    setcategoryId(event.target.value)
    setSCList([])
    readAllSCRecords(event.target.value)
  }  


  const clearMessage=async()=>{
    setMessage('')
}
  
return(
  <ThemeProvider theme={theme}>
    
    <Container maxWidth='xs'>
<Paper className={classes.paper}>
<Typography> <center><h2>PROFESSIONAL DETAILS</h2></center></Typography>
<Grid container spacing={3}>

<Grid xs={11}>
        <TextField
        id="outlined-dense"
        label="Id"
        className={clsx(classes.TextField,classes.dense)}
        margin="dense"
        value={labourId}
        variant="outlined"
        fullWidth
        onChange={(event)=>setlabourId(event.target.value)}
        />
</Grid>



<Grid item xs={12}>
				<FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
         Category Id
        </InputLabel>
        <Select
          value={categoryId}
          onClick={clearMessage}
          onChange={(event)=>onCategoryChange(event)}
          input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
        >
          {menuList()}
		   </Select>
      </FormControl>
</Grid>

        <Grid item xs={12}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
         Sub Categories
        </InputLabel>
        <Select
          value={subcategoryId}
          onClick={clearMessage}
          onChange={(event)=>setsubcategoryId(event.target.value)}
          input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
        >
          {menuSCList()}
         </Select>
        </FormControl>          
          
        </Grid>




    <Grid item xs={12}>
      <Button variant="contained" color="primary" onClick={addNewRecord} className={classes.button} fullWidth>
                      Submit
      </Button>
    </Grid>
</Grid>
</Paper>
<Typography>
      {Message}
</Typography>
</Container>
<br/><br/>
<div>
<Typography variant="subtitle1">NOTE:-For Multiple Subcategory Select the category and subcategory details again and submit.</Typography>
</div>
</ThemeProvider>
)
}
export default AddLabour;