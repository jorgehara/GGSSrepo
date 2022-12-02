import React from 'react'

class PruebaText extends React.Component {
    constructor() {
        super()
        this.state = {
            charcount : 20,
            maxlen: 20
        }
    }

        countHandler = (e) => {
            var lencount = e.target.value.lenght;
            var max_Len=this.state.maxlen;
            var result = max_Len - lencount;
            this.setState({
                charcount : result  
            })
            if (result <=5  ? 'red' : null)
            {
                document.getElementById('abc').style.color = 'red';
            }
            else{
                document.getElementById('abc').style.color = 'blue';

            }
        }
        render() {
            return(
                <div>
                    <center>
                        <h1>dfdsdfsdfsdf</h1>
                        <h1>dfdsdfsdfsdf</h1>
                    <br />
                    <textarea  rows="10" maxLength="20" onChange={this.countHandler}>
                    </textarea> 
                    <hr />
                    <h1 id='abc' style={{color:"blue"}}>Count : {parseInt(this.state.charcount)}</h1>
                    </center>
                </div>
            )
        }
    }
    export default PruebaText