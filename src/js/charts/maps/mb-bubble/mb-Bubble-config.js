const MapConfig = require("./../MapConfig");

/**
 * ### Configuration of an XY chart
 * @name xy_config
 */

/**
* display
* @static
* @memberof xy_config
* @property {Nem|number} labelRectSize - Size of the legend label rectangle
* @property {Nem|number} labelXMargin - Horiz distance btwn labels
* @property {Nem|number} labelTextMargin - Horiz distance btwn label rect and text
* @property {Nem|number} labelRowHeight - Vert distance btwn rows of labels
* items with colors the appropriate indexed CSS class
* @property {Nem|number} afterTitle - Distance btwn top of title and top of legend or chart
* @property {Nem|number} afterLegend - Distance btwn top of legend and top of chart
* @property {Nem|number} blockerRectOffset - Distance btwn text of axis and its background blocker
* @property {Nem|number} columnPaddingCoefficient - Distance relative to
* width that column charts should be from edge of the chart
* @property {Nem|number} minPaddingOuter - Minimum distance between the
* outside of a chart and a graphical element
* @property {Nem|number} bottomPaddingWithoutFooter - Bottom padding if footer is not drawn
* @property {object} aspectRatio
* @property {number|fraction} aspectRatio.wide
* @property {number|fraction} aspectRatio.longSpot
* @property {number|fraction} aspectRatio.smallSpot
* @property {object} margin - Distances btwn outer chart elements and container
* @property {object} padding - Distances btwn inner chart elements and container
*/



const display = {
  labelRectSize: "0.6em",
  labelXMargin: "0.6em",
  labelTextMargin: "0.3em",
  labelRowHeight: "1.2em",
  afterTitle: "1.4em",
  blockerRectOffset: "0.3em",
  columnPaddingCoefficient: 0.3,
  minPaddingOuter: "1em",
  bottomPaddingWithoutFooter: "3em",
	aspectRatio: {
		wide: (10.5 / 16)
	},
  margin: {
    top: "0.9em",
    right: "0.8em",
    bottom: "0.8em",
    left: "0.8em",
    cliptop: "1em",
    maptop: "0.9em",
    maptopMultiple: "-0.75em",
    subtitle: "1.5em",
    keyXOffset: "6.1em",
    legendsOneRow: "0.9em",
    legendsTwoRow: "17.1em",
    mobile: {
    	extraMapMarginTop: '0.25em'
    }
  },
  padding: {
    top: 0,
    right: 0,
    bottom: '3em',
    left: 0
  }
};

/**
* @name xy_defaultProps
* @static
* @memberof xy_config
*/
const defaultProps = {
  /**
   * @name chartProps
   * @property {object} scale - Default settings for date and primary scales
   * @property {array} data
   * @property {object} input
   * @property {object[]} chartSettings - Default settings for a given series (column) of data
   * @property {object} extraPadding - Additional padding. This is a dynamic
   * value and is mostly changed within the component itself
   * @property {object} _annotations - Additional informative graphical elements
   * @property {object} _annotations.labels - If labels are dragged, their
   * position settings are saved here
   * @property {object[]} _annotations.labels.values - Array of settings for
   * dragged labels
   * @property {object} mobile - Mobile-specific override settings
   * @static
   * @memberof xy_defaultProps
   */
  chartProps: {

		visualType: "map",
    data: [],
    input: {},
	  stylings: {
      stroke:'#efefef',
      radiusVal: 25,
      legendMove: {
        top:0,
        left:0
      },
      showLegendTicks: false,
      legendText: 'Write the legend text for here. Then drag.'
	  },
    chartSettings: [
      {
        colorIndex: 0,
        scale: {
          ticks: 5,
          colors: 4,
          precision: 1,
          prefix: "",
          suffix: "",
          type: "quantize"
      	}
      },
    ],
    extraPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
		_annotations: {
			logo: {
			}
		},
    mobile: {}
  },
  /**
   * @name metadata
   * @property {string} chartType
   * @property {string} size
   * @static
   * @memberof xy_defaultProps
   */
  metadata: {
    chartType: 'mapbubble',
    title: "Bubble Map Title",
    subtitle: "Subtitle",
    source: "Source for map",
    credit: "",
    size: "auto"
  }
};

const map_config = new MapConfig({
  displayName: "Bubble",
  parser: require("./Bubble-parse"),
  calculateDimensions: require("./mb-bubble-dimensions"),
  display: display,
  defaultProps: defaultProps
});

module.exports = map_config;