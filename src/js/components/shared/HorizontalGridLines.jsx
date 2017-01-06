var React = require("react");
var PropTypes = React.PropTypes;
var map = require("lodash/map");
var cx = require("classnames");

var VerticalGridLines = React.createClass({

	propTypes: {
		tickValues: PropTypes.array,
		orient: PropTypes.string,
		dimensions: PropTypes.object,
		yScale: PropTypes.func
	},

	_getRangeExtent: function(scale) {
		if (scale.rangeExtent) {
			return scale.rangeExtent();
		} else {
			return scale.range();
		}
	},

	_getTransformY: function(yScale, tickValue) {
		if (yScale.bandwidth) {
			return yScale(tickValue) + yScale.bandwidth() / 2;
		} else {
			return yScale(tickValue);
		}
	},

	_generateTicks: function(props) {
		var getRange = this._getRangeExtent;
		var getTransformY = this._getTransformY;

		return map(props.tickValues, function(tickValue, i) {
			var scalePos = getTransformY(props.yScale, tickValue);
			var x1 = !isNaN(props.x1) ? props.x1 : props.translate[0] * -1;
			var className = cx("tick", { zero: (tickValue === 0) });
			return (
				<line
					key={i}
					className={className}
					y1={scalePos}
					y2={scalePos}
					x1={x1}
					x2={props.x2 || getRange(props.xScale)[1]}
				/>
			)
		});
	},

	render: function() {
		return (
			<g className="grid-lines horizontal-grid-lines">
				{this._generateTicks(this.props)}
			</g>
		);
	}

});

module.exports = VerticalGridLines;
