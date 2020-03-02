import React, { useEffect } from 'react';
import MaterialTable from 'material-table';

import {BaseUrl,postData,postDataAndImage,getData} from '../FetchServices';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({
        link: {
          display: 'flex',
        },
        icon: {
          marginRight: theme.spacing(0.5),
          width: 20,
          height: 20,
        },
}));


export default function DisplayAllProduct() {
    const classes = useStyles();
    const [stateCol, setStateCol] = React.useState({
        columns: [
            { title: 'Category ID', field: 'categoryId' ,editable:'never'},
            { title: 'Category Name', field: 'categoryName' },
          ]

    })  
  const [state, setState] = React.useState({
     data: []});
  const [getFile,setFile]=React.useState('') 
   
  const readAllRecords=async()=>{
    var list=await getData('category/displayallcategory') 
    setState({data:list})
    }
 useEffect(()=>{
  readAllRecords()

 },[]) 
 
     
  const handleEdit=async(newData)=>{

    let body={'categoryId':newData.categoryId,
              'categoryName':newData.categoryName,

    }
    let result=await postData('category/editData',body) 
    if(result.RESULT)
    alert('Record Updated')
    else
    alert('Fail to Update Record')
   
  
    readAllRecords()
  
   }

   const handleDelete=async(oldData)=>{
    let body={'categoryId':oldData.categoryId}
    
  let result=await postData('category/deleteRecord',body) 
  if(result.RESULT)
  alert('Record Deleted')
  else
  alert('Fail to Delete Record')
  readAllRecords()
  
  }




  const View=()=>{
  return(<div>
  <Breadcrumbs aria-label="breadcrumb">
  <Link color="inherit" href="/Dashboard"  className={classes.link}>
    <HomeIcon className={classes.icon} />
    Dashboard
  </Link>
  <Typography color="textPrimary" className={classes.link}>
    <GrainIcon className={classes.icon} />
    Display Category
  </Typography>
</Breadcrumbs><br/>
<MaterialTable
      title="ALL CATEGORY"
      columns={stateCol.columns}
      data={state.data}
      editable={{
       
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });handleEdit(newData)
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });handleDelete(oldData)
            }, 600);
          }),
      }}
    />
    </div>
  )}

  return (
      <div> {View()} </div>
    
  );
}
