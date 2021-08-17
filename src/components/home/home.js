import * as React from 'react';
import {ActivityIndicator, Dimensions, ScrollView} from "react-native";
import {BarChart, ContributionGraph, LineChart} from "react-native-chart-kit";
import  "../../../App.css";
import HeatMap from '@uiw/react-heat-map';

const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientFromOpacity:1,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(0, 0, 0, 0.8)`,
    strokeWidth: 2,
    barPercentage: 1,
    useShadowColorFromDataset: false
};


export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lineChart: null,
            barChart: null,
            heatMap: null,
            screenWidth: Dimensions.get("window").width - 30,
            loaded:false
        }

        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        this.getData();
        window.addEventListener('resize', this.handleResize)
    }

    handleResize() {
        this.setState({
            loaded: false,
            screenWidth: Dimensions.get("window").width - 30
        }, function (){
            setTimeout(() =>{
                this.setState({
                    loaded: true
                });
            },10)
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    getData() {
        setTimeout(() => {
            this.setState({
                lineChart : {
                    labels: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus"],
                    datasets: [
                        {
                            data: [150000, 225000, 175000, 150000, 250000, 100000, 90000, 300000],
                            color: (opacity = 1) => `rgba(1, 86, 154, 1)`, // optional
                            strokeWidth: 2 // optional
                        }
                    ],
                    legend: ["Havi nettó rendelés állomány - 2021"] // optional
                },
                barChart : {
                    labels: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus"],
                    datasets: [
                        {
                            data: [20, 10, 30, 10, 20, 15, 10, 5],
                            color: (opacity = 1) => `rgba(1, 86, 154, 1)`, // optional
                            strokeWidth: 2 // optional
                        }
                    ],
                    legend: ["Havi rendelések száma - 2021"] // optional
                },

                heatMap : [
                    { date: '2021/01/11', count: 2 },
                    { date: '2021/01/12', count: 20 },
                    { date: '2021/01/13', count: 10 },
                    ...[...Array(16)].map((_, idx) => ({ date: `2021/02/${idx}`, count: idx, content: '' })),
                    ...[...Array(25)].map((_, idx) => ({ date: `2021/03/${idx}`, count: idx, content: '' })),
                    ...[...Array(25)].map((_, idx) => ({ date: `2021/05/${idx}`, count: idx, content: '' })),
                    ...[...Array(10)].map((_, idx) => ({ date: `2021/07/${idx}`, count: idx, content: '' })),
                ]
            }, () => {
                this.setState({loaded: true})
            })
        },600);
    }

    render() {
        return (
            this.state.loaded ?
                <ScrollView >
                    <h3 className="chart-label">Nettó Forgalom - 2021</h3>
                    <LineChart
                        data={this.state.lineChart}
                        width={this.state.screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        bezier
                    />
                    <br/>
                    <h3 className="chart-label">Nettó Rendelés mennyiség - 2021</h3>
                    <BarChart
                        data={this.state.barChart}
                        width={this.state.screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        verticalLabelRotation={30}
                    />
                    <br/>
                    <h3 className="chart-label">Rendelés Heatmap - 2021</h3>
                    <div className={"bg-white"}>
                        <HeatMap value={this.state.heatMap}  width={this.state.screenWidth} startDate={new Date('2021/01/01')} endDate={new Date('2021/08/01')}/>
                    </div>

                </ScrollView>
           : <ActivityIndicator size="large" color="#01569AFF" />
        )
    }
}