const React = require("react-native");

const { StyleSheet } = React;

export default {

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
  backgroundColor:'#cae4db'
},
logoText: {
  fontSize: 40,
  fontWeight: "800",
  marginTop: 150,
  marginBottom: 30,
  textAlign: 'center',
  color: '#184d47'
},
loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 3,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,
  textAlign:'center'

},
loginButton: {
  backgroundColor: '#00917c',
  borderRadius: 5,
  height: 45,
  marginTop: 10,
  width:200,
  marginLeft:'43%'
},
signupButton: {

  backgroundColor: '#00917c',
  borderRadius: 5,
  height: 45,
  marginTop: 50,
  width:200,
  marginLeft:'43%'
},

forgotPass: {
  marginTop: 10,
  marginLeft:'80%'
},
};
