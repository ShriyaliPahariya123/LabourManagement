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
        columns: [  { title: 'Labour ID', field: 'labourId' ,editable:'never' },
            { title: 'Subcategory Name', field: 'subcategoryName' },
            { title: 'Category Name', field: 'categoryName' },
          ]

    })  
  const [state, setState] = React.useState({
     data: []});
  const [getFile,setFile]=React.useState('') 
   
  const readAllRecords=async()=>{
    var list=await getData('labour/displaylaboursub2')  
    setState({data:list})
    }
 useEffect(()=>{
  readAllRecords()

 },[]) 
 

   const handleDelete=async(oldData)=>{
    let body={'labourId':oldData.labourId}
    
  let result=await postData('labour/deleteRecordsub',body) 
  if(result.RESULT)
  alert('Record Deleted')
  else
  alert('Fail to Delete Record')
  readAllRecords()
  
  }




  const View=()=>{
  return(
<MaterialTable
      title="LABOUR PROFESSION"
      columns={stateCol.columns}
      data={state.data}
      editable={{
       
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

  )}

  return (
      <div> {View()} </div>
    
  );
}
