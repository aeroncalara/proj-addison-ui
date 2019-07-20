import React, {Component} from 'react';
import Navbar from './Navbar'
import './Dashboard.css';
import {Doughnut} from 'react-chartjs-2';
import Chart from './Chart';


class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            charData:{
                labels: ['employees', 'total','sefewf','wefwefwef'], 
                datasets:[{
                    label: 'Population',
                    data: [
                        85,
                        25,
                        23456,
                        23456
                    ],
                background:[
                    'rgb(255,182,193)',
                    'rgb(107, 170, 225)'
                ]
                }]
            }
        }
    }
    render(){
        return(
            <div>
            <Navbar></Navbar>
           
            </div> 
        )
    }
}
export default Dashboard;