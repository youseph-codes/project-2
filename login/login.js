import React from 'react';

class Login extends React.Component {

    handleChange = (e) => {

    }

    handleSubmit = (e) => {
        
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                    <input type='password' name='password' placeholder='password...' required onChange={this.handleChange}/>
                    <button onSubmit={this.handleSubmit}>Log in</button>
                </form>
            </div>
        )
    }
}