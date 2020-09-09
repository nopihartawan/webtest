import React from 'react';
import { Segment, Header, Button, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

function Home() {
   return (
    
       <Segment color='green'>
           <Header as='h1' color='green' textAlign='center'>Home</Header>
           <Header as='h3' textAlign='center'>
               <Icon name='check circle' color='blue'/>
               Welcome
           </Header>
           <Button as={Link} to="/Register" color='blue' fluid>
               <Icon name='log out'/>
               Logout
           </Button>
       </Segment>
   );
}

export default Home;