import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ChallengeContent from './challenge_content';

export default class ChallengesList extends Component {
    constructor(){
       super();

       this.state = {
            title: 'hello',
            data: []
       }

       this.getChallenges = this.getChallenges.bind(this);
    }

    getChallenges(){
      axios.get('http://localhost:8000/challenges')
      .then(response => {
         console.log(response);
         this.setState({
            data: response.data
        })
      })
      .catch(error => {
         console.log(error)
      })

    }

    challenges() {
      return this.state.data.map(item => {
         return <div key={item.challenges_id}>
            <Link to={`/challenges/${item.challenges_id}`}><div className='challenge_title'>{item.challenges_name}</div></Link>
            <div className='challenge_description'>{item.challenges_description}</div> 
         </div>
         // return <ChallengeContent key={item.challenges_id} item={item} />
      })
    }

    componentDidMount(){
      this.getChallenges()
    }
   render(){
       return (
          <div>
            {/* <div><a href={this.state.data.}>{this.state.data.challenges_name}</a></div>
            <p></p> */}
            {this.challenges()}
          </div>
       );
   }
}