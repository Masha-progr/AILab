const blue = '#2d92d0';
const lightBlue = '#69b0d8';
const gray = '#bbcbdb';
const purple = '#44a9e8';
const green = '#1a4d7a';
const red = '#d0d0d0';

new Chart(document.getElementById('chartFrequency'), {
    type: 'bar',
    data: {
        labels: ['Ежедневно', 'Несколько раз в неделю', 'Редко', 'Никогда'],
        datasets: [{
            label: '% студентов',
            data: [44, 32, 16, 8],
            backgroundColor: [blue, lightBlue, gray, '#d0d7e0'],
            borderRadius: 6,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true, max: 50, ticks: { stepSize: 10, callback: v => v + '%' } }
        }
    }
});

new Chart(document.getElementById('chartPurposes'), {
    type: 'bar',
    data: {
        labels: ['Тексты', 'Объяснение тем', 'Код', 'Генерация идей', 'Перевод'],
        datasets: [{
            label: '% студентов',
            data: [76, 60, 52, 48, 44],
            backgroundColor: ['#1b6b9c', '#2f7eb0', '#4a90b9', '#6ba3c9', '#95bcd9'],
            borderRadius: 6,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true, max: 80, ticks: { stepSize: 20, callback: v => v + '%' } }
        }
    }
});

new Chart(document.getElementById('chartVerification'), {
    type: 'doughnut',
    data: {
        labels: ['Всегда (28%)', 'Иногда (52%)', 'Никогда (20%)'],
        datasets: [{
            data: [28, 52, 20],
            backgroundColor: [green, lightBlue, gray],
            borderWidth: 0,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } }
        },
        cutout: '65%',
    }
});

new Chart(document.getElementById('chartCheating'), {
    type: 'doughnut',
    data: {
        labels: ['Нет (44%)', 'Зависит от ситуации (40%)', 'Да (16%)'],
        datasets: [{
            data: [44, 40, 16],
            backgroundColor: [green, lightBlue, red],
            borderWidth: 0,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } }
        },
        cutout: '65%',
    }
});

new Chart(document.getElementById('chartImpact'), {
    type: 'bar',
    data: {
        labels: ['Стало легче', 'Не изменилось', 'Смешанные чувства', 'Стало сложнее'],
        datasets: [{
            label: '% студентов',
            data: [56, 24, 16, 4],
            backgroundColor: [green, lightBlue, purple, red],
            borderRadius: 6,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true, max: 60, ticks: { stepSize: 20, callback: v => v + '%' } }
        }
    }
});