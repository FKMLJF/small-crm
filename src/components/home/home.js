import * as React from 'react';
import {ActivityIndicator, Dimensions} from "react-native";
import {LineChart} from "react-native-chart-kit";
import  "../../../App.css";

const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientFromOpacity:1,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(0, 0, 0, 1)`,
    strokeWidth: 1,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
};


export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lineChart: null,
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
                }
            }, () => {
                this.setState({loaded: true})
            })
        },600);
    }

    render() {
        return (
            this.state.loaded ?
                <div>
                    <h3 className="p-0 my-1">Forgalom - 2021</h3>
                    <LineChart
                        data={this.state.lineChart}
                        width={this.state.screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        bezier
                    />
                </div>
           : <ActivityIndicator size="large" color="#01569AFF" />
        )
    }
}