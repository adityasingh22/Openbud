import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { SearchTerm } from "../../actions/index";
import Button from 'material-ui/Button';
import SearchBar from "material-ui-search-bar";
import "../../CSS/Navbar.css"

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    this.props.SearchTerm(this.state.terms);
    this.setState({ terms: "" });
    this.props.history.push("/projects");
  }

  render() {
    const style = {
      display: "flex",
      flex:"1",
      margin:" 3vh 0vh"
    };
    return (
      <div>
        <div className="block" style={style}>
          <h3 className="space-left-right">OpenBud</h3>
          <form onSubmit={this.handleSubmit} style={{width:"50%"}}>
            {/*<input
              name="terms"
              value={this.state.terms}
              type="text"
              onChange={e => {
                this.setState({ [e.target.name]: e.target.value });
              }}
              style={{
                width: "100%",
                height: "3vh",
                padding: "1vh",
                fontSize: "2vh"
              }}
            />*/}
            <SearchBar
            onChange={e => {
              this.setState({ terms: e });
            }}
            onRequestSearch={e => this.handleSubmit(e)}
            name="terms"
            value={this.state.terms}
            
            style={{
              margin: "0 auto",
              maxWidth: 700,
              height: "6vh"
            }}
            
          />
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log(state.term);
    return {
      interterms: state.term
    };
  }
  
  const MapDispatchToProps = dispatch => ({
    SearchTerm: term => {
      dispatch(SearchTerm(term));
    }
  });


export default withRouter(connect(mapStateToProps, MapDispatchToProps)(Navbar));