var ctx = document.getElementById('graph-brazil');

            var mydoughnutChart = new Chart(ctx, {
                type: 'doughnut',
                data: data,
                options: {
                    title: {
                        display: true,
                        text: 'Brasil',
                        fontSize: 24
                    }
                }
            });
            