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
            { title: 'Name', field: 'labourName'},
            { title: 'PhoneNo.', field: 'labourPhoneNo' },
            { title: 'AnotherNo.', field: 'labourAnotherPhone' },
            { title: 'Age', field: 'labourAge' },
            { title: 'Gender', field: 'labourGender' },
            { title: 'Adhar', field: 'labourAdhar' },
            { title: 'Work Experience', field: 'labourWorkExperience' },
            { title: 'Address', field: 'labourAddress' },
            { title: 'City', field: 'labourCity' },
            { title: 'Country', field: 'labourCountry' },
            { title: 'Pincode', field: 'labourPincode' },
            { title: 'DOB', field: 'labourdob' },
            {
              field: 'labourPhoto',
              title: 'Image',
              render: rowData => <img src={`${BaseUrl}/images/${rowData.labourPhoto}`} style={{height:50,width: 50, borderRadius: '50%'}}/>
            },
            { title: 'Password', field: 'labourPassword' },
          ]

    })  
  const [state, setState] = React.useState({
     data: []});
  const [getFile,setFile]=React.useState('') 
   
  const readAllRecords=async()=>{
    var list=await getData('labour/displaylabour') 
    setState({data:list})
    }
 useEffect(()=>{
  readAllRecords()

 },[]) 
 
     
  const handleEdit=async(newData)=>{

    let body={'labourId':newData.labourId,
              'labourName':newData.labourName,
              'labourPhoneNo':newData.labourPhoneNo,
              'labourAge':newData.labourAge,
              'labourGender':newData.labourGender,
              'labourAdhar':newData.labourAdhar,
              'labourWorkExperiece':newData.labourWorkExperience,
              'labourAddress':newData.labourAddress,
              'labourCity':newData.labourCity,
              'labourCountry':newData.labourCountry,
              'labourPincode':newData.labourPincode,
              'labourdob':newData.labourdob,
              'labourAnotherPhone':newData.labourAnotherPhone,

    }
    let result=await postData('labour/editData',body) 
    if(result.RESULT)
    alert('Record Updated')
    else
    alert('Fail to Update Record')
   
  
    readAllRecords()
  
   }

   const handleDelete=async(oldData)=>{
    let body={'labourId':oldData.labourId}
    
  let result=await postData('labour/deleteRecord',body) 
  if(result.RESULT)
  alert('Record Deleted')
  else
  alert('Fail to Delete Record')
  readAllRecords()
  
  }




  const View=()=>{
  return(
<MaterialTable
      title="ALL LABOUR"
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

  )}

  return (
      <div> {View()} </div>
    
  );
}
