import './App.css'
import React from 'react'
import './index.css'

const url = 'https://cdni.iconscout.com/illustration/premium/thumb/running-for-work-4301661-3575333.png'

class NameForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value : '',
      password: Number
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSumbut = this.handleSumbut.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
  }
    handleChange (event){
      this.setState({value:event.target.value})
    }
    handleChange2(event){
      this.setState({password:event.target.value})
    }

    handleSumbut(event){
      alert('Name:' +  ' ' + this.state.value +   ' '  + 'Password:' + this.state.password)
      event.preventDefault()
    }

  render(){
    return(
      <div className='form'
        style={{
        background : `url(${url}) no-repeat center/cover`,
        height: '437px',
        width: '550px',
        marginLeft: '283px'
      }}>
        <form
        onSubmit={this.handleSumbut}>
        <label
        className='form__label'>
          Name:
          <input className='input'
          type='text'
          value={this.state.value}
          onChange = {this.handleChange}
          />
        </label>
        <label>
          Password:
          <input className='input'
          type='text'
          value={this.state.password}
          onChange = {this.handleChange2}
          />
        </label>
        <input className='input1'
        type='submit'
        value='Submit'/>
      </form>
      </div>
    )
  }
}
export default NameForm