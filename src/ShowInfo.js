import React from "react";
import PropTypes from "prop-types";

export default class ShowInfo extends React.Component {
    static propTypes = {
        hanviet: PropTypes.string,
        nghia: PropTypes.string,
        doc: PropTypes.string,
        resultBl: PropTypes.string
    };
    render() {
        // var hanviet;
        // var nghia;
        // var doc;
        // this.props.vocaData.map(vocaData => (
        //     hanviet = vocaData.hanviet,
        //     nghia = vocaData.nghia,
        //     doc = vocaData.doc
        // ))
        return (
        <div class="card-body">
            {
                (this.props.resultBl==="hienthi") ? "" : ((this.props.resultBl==="dung") ? <div class="alert alert-success" role="alert">CORRECT!</div> : <div class="alert alert-warning" role="alert">INCORRECT!</div>)
            }
          <h1 class="card-title pricing-card-title">
            {this.props.hanviet}
          </h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>{this.props.nghia}</li>
            <br/>
            <li>{this.props.doc}</li>
          </ul>
        </div>        
        );
      }
    
}