const initDifficultBtn = () => {
    const diffButtons = document.querySelectorAll(".difficult__values-buttons")
    for (const diffButton of diffButtons) {
        diffButton.addEventListener('click', (event) => {
            event.stopPropagation();
            console.log('Нажата');
        })
    }

}

initDifficultBtn();


initStartBtn = () => {
    const startButtons = document.querySelectorAll('.start-button')

    for (const startButton of startButtons) {
        startButton.addEventListener('click', (event) => {
            event.stopPropagation();

            console.log('Start');
        });

    }
}

initStartBtn();