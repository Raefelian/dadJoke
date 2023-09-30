const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')

const addJokes = async () => {
    const jokeText = await getJokes()
    const li = document.createElement('li')

    li.append(jokeText)
    jokes.append(li)
}


const getJokes = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return (res.data.joke)
    } catch (error) {
        return 'No Jokes Availeable!'
    }
}

button.addEventListener('click', addJokes);