/* tipo barra*/
const contenedorBarChar = document.querySelector("#bar-chart").getContext("2d")

const barChar = new Chart( contenedorBarChar, {
    type: "bar",
    data: {
        labels: [ 
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado",
            "Domingo",           
        ],
        datasets: [
            {
                label: "Numero de usuarios por dia",
                data: [20,40,10,100,50,75,200],
                borderWidth: 3,
                borderColor: "red",
                backgroundColor: ["green","#dae","#123","#ba1","#dac","yellow","orange"],


            },
            
        ]
    },

})


/*grafico de donas */
const containerDoughnutChart = document.querySelector("#doughnut-chart").getContext("2d")

const dataForChart = {
    
    labels: [
        "Computadoras",
        "Celulares",
        "Refrigeradoras",
        "Parlantes"
    ],
    datasets: [
        {
            label: "PRODUCTOS ELECTRONICOS",
            data: [100,230,520,267],
            backgroundColor: ["red","yellow","green","orange"]
        },
    
    ],
}

const config = {
    type: "doughnut",
    data: dataForChart,
}

const donutChart = new Chart(containerDoughnutChart,config)


/*grafico de lineas*/

const containerLinealChart = document.querySelector("#lineal-chart").getContext("2d")

const configLine = {
    type: "line",
    data: dataForChart,
}

const linealChart = new Chart(containerLinealChart,configLine)

/*grafico bubbles */
const containerBubbleChart = document.querySelector("#bubble-chart").getContext("2d")

/*accedo a la parte data de dataForchart y la cambio, 
para que funcione este grafico que necesita esos datos*/
dataForChart.datasets[0].data = [
    {
        x: 20,
        y: 30,
        r: 15,

    },
    {
        x: 40,
        y: 10,
        r: 10,

    },
]

const configBubble = {
    type: "bubble",
    data: dataForChart,
}

const bubbleChart = new Chart(containerBubbleChart,configBubble)

/*grafico polar-chart*/
const containerPolarChart = document.querySelector("#polar-chart").getContext("2d")

dataForChart.datasets[0].data = [300,149,321,242]

const configPolar = {
    type: "polarArea",
    data: dataForChart,
}

const polarChart = new Chart(containerPolarChart,configPolar)

/*grafico radar chart*/

const containerRadarChart = document.querySelector("#radar-chart").getContext("2d")

const configRadar = {
    type: "radar",
    data: dataForChart,
}

const radarChart = new Chart(containerRadarChart,configRadar)

/*grafico scatter chart */

const containerScatterChart = document.querySelector("#scatter-chart").getContext("2d")

dataForChart.datasets[0].data = [
    {
        x: -10,
        y: 0,
    },
    {
        x: 0,
        y: 10,
    },
    {
        x: 0.5,
        y: 5.5,
    },
]

const configScatter = {
    type: "scatter",
    data: dataForChart,
}

const scatterChart = new Chart(containerScatterChart,configScatter)
