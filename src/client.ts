       let socket = new WebSocket("ws://localhost:8080");
        let x = document.getElementById('send') as HTMLElement
        x.addEventListener('click', () => {
            socket.send('Witaj')
        })

