import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Picker,Textarea, Icon,Button, Text } from 'native-base';
export default class FloatingLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label> Numero do Pedido</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Data</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>local</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>info</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>cnpj</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>expedição</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>itens</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>dia</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>hora</Label>
              <Input />
            </Item>


            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
               
                
                
              >
                <Picker.Item label="João" value="key0" />
                <Picker.Item label="pedro" value="key1" />
                <Picker.Item label="Algusto" value="key2" />
                <Picker.Item label="Eita" value="key3" />
                <Picker.Item label="Rá" value="key4" />
              </Picker>
              </Item>

              <Item success>
            <Input placeholder='Texto sucesso'/>
            <Icon name='checkmark-circle' />
          </Item>

          <Textarea rowSpan={5} bordered placeholder="Observaçoes" />
          <Button primary><Text> Salvar </Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}