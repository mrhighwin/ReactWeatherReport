import _ from 'lodash';
import React, {Component} from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
	return _.round(_.sum(data)/data.length);
}


export default class Chart extends Component{

	render() {
		return (
			<div>
			<Sparklines height={50} width={150} data={this.props.data}>
				<SparklinesLine color = {this.props.color} />
				<SparklinesReferenceLine type = 'avg' /> 
			</Sparklines>	
			<div>{average(this.props.data)} {this.props.units}</div>
			</div>
		);
	}
}