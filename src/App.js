import React, {Component} from 'react';
import '@progress/kendo-theme-bootstrap/dist/all.css';
import './App.css';
import { Card, CardHeader, CardTitle, CardBody, CardActions, CardImage, CardSubtitle, Avatar } from '@progress/kendo-react-layout';
import { DropDownList } from '@progress/kendo-react-dropdowns';
const textField = 'name';
const keyField = 'id';
const defaultItem = { [textField]: 'Select playlist...', [keyField]: null };
class App extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      value: null,
    };
  }
 
  componentDidMount() {
    
    const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    //const apiUrl = 'https://192.168.1.5:44330/api/Playlist';
    fetch(apiUrl)
    .then((response) => response.json())
      .then(
        (res) => {
          const items = [];
                res.forEach((element, index) => {
                    const { id, name } = element;
                    const item = { [keyField]: id, [textField]: name };
                    items.push(item);
                    
                });
          this.setState({
            isLoaded: true,
            data: items
          });
          
        },
        
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  handleChange = (event) => {
    this.setState({
        value: event.target.value
    });
}
  render(){
    const { error, isLoaded, items } = this.state;
 
     if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return(
    <div style={{ display: 'flex', justifyContent: 'space-evenly',margin:50}} >
    {/* <div className='k-card-list' style={{ width: 500 }}>
       
        <Card style={{ width: 500 }} type='primary'>
            <CardBody>
                <CardTitle>FS1 Primary & Secondary</CardTitle>
               
                <div style={{ marginTop:30,}}>
                <span>Client</span> &nbsp;&nbsp;
                <span >
                  <DropDownList 
                  title="Select Playlist"
                  data ={this.state.data}
                  dataItemKey = {keyField} 
                  textField ={textField}
                  value ={this.state.value}
                  onChange ={this.handleChange}
                  defaultItem={defaultItem}
                defaultValue ={this.state.value}

                  />
                </span>
                </div>
                
            </CardBody>
            &nbsp;
            &nbsp;
            <CardActions>
                <span className="k-button k-flat k-primary">Play</span>
                <span className="k-button k-flat k-primary">Stop</span>
            </CardActions>
        </Card>
    </div> */}
    <div className='k-card-list' style={{ display: 'flex', justifyContent: 'space-evenly',margin:10}}>
    <Card style={{ width: 430 }} type='primary'>
            <CardBody>
                <CardTitle>FS1 Primary & Secondary</CardTitle>
               
                <div style={{ marginTop:30,}}>
                <span>Client</span> &nbsp;&nbsp;
                <span >&nbsp;&nbsp;&nbsp;
                  <DropDownList 
                  title="Select Playlist"
                  data ={this.state.data}
                  dataItemKey = {keyField} 
                  textField ={textField}
                  value ={this.state.value}
                  onChange ={this.handleChange}
                  defaultItem={defaultItem}
                defaultValue ={this.state.value}
                  />
                </span> 
                <span className="k-button k-flat k-primary">Play</span>&nbsp;&nbsp;
                <span className="k-button k-flat k-primary">Stop</span>
                </div>
                
            </CardBody>
            
        </Card>
        <Card style={{ width: 430 }} type='primary'>
            <CardBody>
                <CardTitle>FBC2 Primary & Secondary</CardTitle>
               
                <div style={{ marginTop:30,}}>
                <span>Client</span> &nbsp;&nbsp;
                <span >&nbsp;&nbsp;&nbsp;
                  <DropDownList 
                  title="Select Playlist"
                  data ={this.state.data}
                  dataItemKey = {keyField} 
                  textField ={textField}
                  value ={this.state.value}
                  onChange ={this.handleChange}
                  defaultItem={defaultItem}
                defaultValue ={this.state.value}
                  />
                </span> 
                <span className="k-button k-flat k-primary">Play</span>&nbsp;&nbsp;
                <span className="k-button k-flat k-primary">Stop</span>
                </div>
                
            </CardBody>
        </Card>
                </div>
                <div className='k-card-list'style={{ display: 'flex', justifyContent: 'space-evenly',margin:10}}>
                <Card style={{ width: 430 }} type='primary'>
            <CardBody>
                <CardTitle>FBC3 Primary & Secondary</CardTitle>
               
                <div style={{ marginTop:30,}}>
                <span>Client</span> &nbsp;&nbsp;
                <span >&nbsp;&nbsp;
                  <DropDownList 
                  title="Select Playlist"
                  data ={this.state.data}
                  dataItemKey = {keyField} 
                  textField ={textField}
                  value ={this.state.value}
                  onChange ={this.handleChange}
                  defaultItem={defaultItem}
                defaultValue ={this.state.value}
                  />
                </span> 
                <span className="k-button k-flat k-primary">Play</span>&nbsp;&nbsp;
                <span className="k-button k-flat k-primary">Stop</span>
                </div>
                
            </CardBody>
        </Card>
        <Card style={{ width: 430 }} type='primary'>
            <CardBody>
                <CardTitle>FBC4 Primary & Secondary</CardTitle>
               
                <div style={{ marginTop:30,}}>
                <span>Client</span> &nbsp;&nbsp;
                <span >&nbsp;&nbsp;
                  <DropDownList 
                  title="Select Playlist"
                  data ={this.state.data}
                  dataItemKey = {keyField} 
                  textField ={textField}
                  value ={this.state.value}
                  onChange ={this.handleChange}
                  defaultItem={defaultItem}
                defaultValue ={this.state.value}
                  />
                </span> 
                <span className="k-button k-flat k-primary">Play</span>&nbsp;&nbsp;
                <span className="k-button k-flat k-primary">Stop</span>
                </div>
                
            </CardBody>
        </Card>
                </div>
                <div className='k-card-list' style={{ display: 'flex', justifyContent: 'space-evenly',margin:10}}>
                <Card style={{ width: 430 }} type='primary'>
            <CardBody>
                <CardTitle>FBC5 Primary & Secondary</CardTitle>
               
                <div style={{ marginTop:30,}}>
                <span>Client</span> &nbsp;&nbsp;
                <span >&nbsp;&nbsp;
                  <DropDownList 
                  title="Select Playlist"
                  data ={this.state.data}
                  dataItemKey = {keyField} 
                  textField ={textField}
                  value ={this.state.value}
                  onChange ={this.handleChange}
                  defaultItem={defaultItem}
                defaultValue ={this.state.value}
                  />
                </span> 
                <span className="k-button k-flat k-primary">Play</span>&nbsp;&nbsp;
                <span className="k-button k-flat k-primary">Stop</span>
                </div>
                
            </CardBody>
        </Card>
        <Card style={{ width: 430 }} type='primary'>
            <CardBody>
                <CardTitle>FBC6 Primary & Secondary</CardTitle>
               
                <div style={{ marginTop:30,}}>
                <span>Client</span> &nbsp;&nbsp;
                <span >&nbsp;&nbsp;
                  <DropDownList 
                  title="Select Playlist"
                  data ={this.state.data}
                  dataItemKey = {keyField} 
                  textField ={textField}
                  value ={this.state.value}
                  onChange ={this.handleChange}
                  defaultItem={defaultItem}
                defaultValue ={this.state.value}
                  />
                </span> 
                <span className="k-button k-flat k-primary">Play</span>&nbsp;&nbsp;
                <span className="k-button k-flat k-primary">Stop</span>
                </div>
                
            </CardBody>
        </Card>
                </div>
   
  </div>
    
  );
}
}
}


export default App;

