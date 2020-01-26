import React from 'react';

class Profile extends React.Component{
render(){
    return <div>
        <div class="box profile">
             <div class="holder">
                <img src='image.jpg' alt="Samanth Kumar"/>
            </div>
            <div class="holder">
                <section class="name">
                    <h1>SAMANTH KUMAR</h1>
                    <h3>Full Stack Developer</h3>
                </section>

                <section class="details">
                    <h5><span>Mobile no :</span>8197420742</h5>
                    <h5><span>Email : </span>samanthkumarsg@gmail.com</h5>
                    <h5><span>LinkedIn :</span> www.linkedin.com/in/samanth-kumar-41ba93134</h5>
                    <h5><span>Github :</span> https://github.com/samanthkumarsg</h5>
                </section>
            </div>
         </div>
    </div>
}
}
export default Profile;