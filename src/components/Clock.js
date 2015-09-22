var React = require('react');
var moment = require('moment');
var Radium = require('radium');

var Clock = React.createClass({
  render: function(){
    return (
      <div style={styles.base}>
      {this.props.children}
        {moment().format('MMM Do YYYY, h:mm a')}
      </div>
    )
  }
});

var styles = {
  base: {
    fontFamily: 'Verdana',
    fontSize: '1.3em',
    color: 'slategray',
    margin: '0 0 0 80%',
    backgroundColor: 'seashell',
    padding: '1% 0 1% 2.5%',
    borderRadius: 14,
  },
};

module.exports = Radium(Clock);