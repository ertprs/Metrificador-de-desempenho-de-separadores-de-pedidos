import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title } from 'native-base';
import Tab1 from './funcionalidadesTelaLogado/add';
import Tab2 from './funcionalidadesTelaLogado/edit';
import Tab3 from './funcionalidadesTelaLogado/graficos';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header     style={{backgroundColor:'#009387'}}      hasTabs>
        <Left/>
          <Body>
            <Title  style={{color:'white', textAlign:'center'}}>Famart - MES </Title>
          </Body>
          <Right />
        </Header>

        <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
          <Tab    tabStyle={{backgroundColor:'#009387'}} 
          activeTabStyle={{backgroundColor:'#009387'}} 
          textStyle={{color:'white'}} 
          activeTextStyle={{color: 'white'}}  
          heading="Adicionar">          
            <Tab1 />
          </Tab>
          
          <Tab  tabStyle={{backgroundColor:'#009387'}}  
          activeTabStyle={{backgroundColor:'#009387'}} 
          textStyle={{color:'white'}} 
          activeTextStyle={{color: 'white'}}  
          heading="Editar">          
            <Tab2 />
          </Tab>


          <Tab  tabStyle={{backgroundColor:'#009387'}}  
          activeTabStyle={{backgroundColor:'#009387'}} 
          textStyle={{color:'white'}} 
          activeTextStyle={{color: 'white'}}   
          heading="Graficos">      
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}