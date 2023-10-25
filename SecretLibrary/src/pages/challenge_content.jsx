import React, { Component } from 'react';
import axios from 'axios';

export default class ChallengeContent extends Component {
    constructor(props){
       super(props);

       this.state = {
            challengeId: this.props.match.params.slug,
            promptList: []
       }
    }

    getPromptsFromId(){
      axios.get('http://localhost:8000/prompts')
    }

   //  Para coger los params del slug: {props.match.params.slug}

   render(){
      const {challenges_id, challenges_name, challenges_description} = this.props.item;
       return (
          <div>{this.challengeId}</div>
       );
   }
}