import React from 'react'

let search
let messageOne
let messageTwo

class Weather extends React.Component {
    componentDidMount() {
        search = document.querySelector('input')
        messageOne = document.querySelector('#message-1')
        messageTwo = document.querySelector('#message-2')
    }
    onSubmit(e) {
        e.preventDefault()

        const location = search.value

        messageOne.textContent = 'Loading...'
        messageTwo.textContent = ''

        fetch(`https://ja-forecast-api.herokuapp.com/weather?address=${location}`)
            .then(res => {
                res.json()
                    .then(data => {
                        if (data.error) {
                            messageOne.textContent = data.error
                        } else {
                            messageOne.textContent = data.location
                            messageTwo.textContent = data.forecast
                        }
                    })
            })

        search.value = ''
    }
    render() {
        return (
            <div className="main-content">
                <p>Use this site to get your weather!</p>

                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Location"></input>
                    <button>Search</button>
                </form>

                <p id="message-1"></p>
                <p id="message-2"></p>
            </div>
        )
    }
}

export default Weather