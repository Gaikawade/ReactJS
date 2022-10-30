import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

//?Functional Component
/*So when there is any presentational or view layer changes is there which means there is no logic as such in that component and just to show something then you can use this function component.*/
const FunctionalComponent = () => {
  return <h1>Hello World....Functional Component</h1>
}

//?Class Component
/*When there is a need of event handling and all the complex things that are happening in the UI then you can use the class component*/
class ClassComponent extends React.Component{
  // constructor(){
  //   //*Not Mandatory
  // }
  render(){
    return <h1>Hello World....Class Component</h1>
  }
}

//?Functional Component with props
const FunctionalComponentProps = (props) => {
  return <p>{props.title} props</p>
}

//?Class Component with props
class ClassComponentProps extends React.Component {
  render(){
    return <p>{this.props.title} props</p>
  }
}

const CurrentTime = () => {
  return <h3>
    {+new Date()}
    <ClassComponent/> {/*line 27 component is known as child component of line 26*/}
  </h3>
}

root.render(<React.StrictMode>
    <FunctionalComponent/> {/*Component*/}
    <ClassComponent/>
  </React.StrictMode>
);


setInterval(() => {
  root.render(
    <React.StrictMode>
      <FunctionalComponent/>
      <CurrentTime/> {/*line 41 and 42 components are known as sbilings components*/}
      <FunctionalComponentProps title = 'Message from function'/> {/*sending props from function call to functional component declaration*/}
      <ClassComponentProps title = 'Message from class'/>
    </React.StrictMode>
  );
}, 1000);