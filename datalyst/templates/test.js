$(document).ready(function() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['BCA', 'B.Com Computer', 'BA English', 'B.Com F&T', 'BBA'],
        datasets: [{
          label: 'No of Students',
          data: [12, 19, 3, 5, 2],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
            title: {
              display: true,
              text: 'Number of Students',
            }
          }
      },
      
    });


    const ctx2 = document.getElementById('myChart2');

    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['BCA', 'B.Com Computer', 'BA English', 'B.Com F&T', 'BBA'],
        datasets: [{
          label: 'Seat Available',
          data: [12, 19, 3, 5, 2],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
});