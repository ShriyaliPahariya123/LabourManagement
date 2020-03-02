import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import {BaseUrl,postData,postDataAndImage,getData} from '../FetchServices';
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
        columns: [ { title: 'Feedback ID', field: 'userFeedbackId' ,editable:'never' }, 
           { title: 'User ID', field: 'userId' ,editable:'never' },
           { title: 'Email', field: 'userEmail' ,editable:'never' },
            { title: 'Date', field: 'date' },
            { title: 'Feedback', field: 'userFeedback' },
          ]

    })  
  const [state, setState] = React.useState({
     data: []});
  const [getFile,setFile]=React.useState('') 
   
  const readAllRecords=async()=>{
    var list=await getData('user/displayuserfeedback') 
    setState({data:list})
    }
 useEffect(()=>{
  readAllRecords()

 },[]) 
 



  const View=()=>{
  return(
<MaterialTable
      title="USER FEEDBACK"
      columns={stateCol.columns}
      data={state.data}
    />

  )}

  return (
      <div> {View()} </div>
    
  );
}
