import React from 'react'
import Projects from './Projects';
import Skills from './Skills';
import Achievements from './Achievements';
import Profile from './Profile';
import Qualification from './Qualification';
import Carreer from './Carrerobj';
import Strength from './Strengths';



class Child extends React.Component{

  render(){
  return <div>
<body>

     <div class="container">

    <Profile></Profile>
    <Carreer></Carreer>
    <Skills></Skills>
    <Qualification></Qualification>
    <Projects></Projects>
    <Achievements></Achievements>
    <Strength></Strength>



     </div>
</body>
          </div>
  }
  }
  
export default Child;