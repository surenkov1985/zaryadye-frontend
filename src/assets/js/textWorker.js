self.onmessage = function(event) {

    console.log(333);
    const { rows, className } = event.data;
    const processedRows = [];

    for (let j = 0; j < rows.length; j++) {
        const text = rows[j].split(" ");
        let rowContent = "";

        for (let i = 0; i < text.length; i++) {
            const word = i === text.length - 1
                ? `<span class="title-anim-content">${text[i]}</span>`
                : `<span class="title-anim-content">${text[i]}&nbsp;</span>`;

            rowContent += `<span class="title-anim-container">${word}</span>`;
        }

        processedRows.push(rowContent + "<br>");
    }

    // Отправляем обработанные данные обратно в основной поток
    self.postMessage({ processedRows, className });
};