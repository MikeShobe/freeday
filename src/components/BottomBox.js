var React = require('react');
var Radium = require('radium');

var BottomBox = React.createClass({//Bottom of the page div for additional information/options.
	render: function(){
		return (
      <div style={styles.base}>
      {this.props.children}
        //(Contains any additional info/functionality)
      </div>
		)
	}
});

var styles = {
  base: {
    background: 'lightsteelblue',
    padding: '2em',
    borderRadius: 8,
  },
};

module.exports = Radium(BottomBox);