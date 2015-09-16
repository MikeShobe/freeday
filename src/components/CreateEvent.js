var React = require('react');
var Modal = require('react-modal');
var ImageUpload = require('./ImageUpload');
var Radium = require('radium');

var appElement = document.getElementById('main');

Modal.setAppElement(appElement);
Modal.injectCSS();

var CreateEvent = React.createClass({
    getInitialState: function(){
      return { modalIsOpen: false, value: "Event description will go here." }; 
    },     

    openModal: function() {
      
      this.setState({modalIsOpen: true});
    },

    closeModal: function() {
      this.setState({modalIsOpen: false});
    },

    handleChange: function(event){
      this.setState({value: event.target.value});
    },

    render: function(){
      return (
        <div>
          <button type="default-primary" onClick={this.openModal} style={[
        styles.base,
        this.props.block && styles.block
        ]}>
      {this.props.children}Create Event</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal} 
          >
          <button onClick={this.closeModal}>Close</button>
          <br></br>
          <br></br>
          <form>
            <h4>Event Name: </h4>
            <input type ='text' placeholder='Event Name'/>
              <button onClick={this.handleChange}>Submit</button>
            <input type ='text' placeholder='Event Address'/>
              <button onClick={this.handleChange}>Submit</button>
                <br></br>
                <h4>Event Time: </h4>
                <input type="datetime-local" name="eventtime"/>
                <br></br>
                <input type ='radio' name='Age Limit'/> Must be 21 or older?
                <br></br>

                <form>
                <input type="number" name="attendees" min="1" max="25"/> Maximum Attendance
                </form>

              <br></br>
              <input type ='text' placeholder='Event Description'/>
                <button onClick={this.handleChange}>Submit</button>
          </form>
            <br></br>
            <br></br>
            <form>
              <div>{this.state.value}</div>
            </form>
              
              <ImageUpload/>
              <input type='file'/>

          </Modal>
        </div>
      );
    }
});

var styles = {
  base: {
    background: 'steelblue',
    borderRadius: 100,
    color: 'black',
    padding: '4em',
    float: 'right',
    overflow: 'auto',
    margin: '-2em 1em 0 0',

    ':hover': {
      backgroundColor: 'powderblue'
    },

    ':focus': {
      backgroundColor: 'steelblue'
    },

    ':active': {
      backgroundColor: 'midnightblue'
    },
  },

  block: {
    display: 'block',

    ':hover': {
      boxShadow: '0 3px 0 rgba(0,0,0,0.2)'
    }
  },
};


module.exports = Radium(CreateEvent);