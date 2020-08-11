import React, { PureComponent } from "react";
import './assets/pricing.css';
import randomVoca from "./randomVoca";
import ShowInfo from "./ShowInfo";

export default class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      vocaRandom: randomVoca(),
      hanviet: null,
      nghia: "Nhấn nút Bó Tay hoặc trả lời đúng đáp án",
      doc: null,
      result: "",
      resultBl: "hienthi"
    };
    this.handleClick = this.handleClick.bind(this);
    this.ktkqClick = this.ktkqClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    var hanvietA;
    var nghiaA;
    var docA;
    this.state.vocaRandom.map(vocaRandom => (
      // eslint-disable-next-line
        (hanvietA = vocaRandom.hanviet),
        (nghiaA = vocaRandom.nghia),
        (docA = vocaRandom.doc)
    ))
    this.setState(state => ({
      hanviet: hanvietA, nghia: nghiaA, doc: docA, resultBl:"hienthi"
    }));
  };

  handleChange(event) {
    var resultA = event.target.value;
    this.setState(state => ({
      result: resultA
    }));
  }

  ktkqClick() {
    var hanvietA;
    var nghiaA;
    var docA;
    // eslint-disable-next-line
    this.state.vocaRandom.map(vocaRandom => (
      // eslint-disable-next-line
        (hanvietA = vocaRandom.hanviet),
        (nghiaA = vocaRandom.nghia),
        (docA = vocaRandom.doc)
    ))
    // eslint-disable-next-line
    const doc_array = docA.split(', ');
    var ck=true;
    // eslint-disable-next-line
    doc_array.filter(doc => {
      if (doc.toLowerCase()===(this.state.result.toLowerCase())) {
        this.setState(state => ({
          hanviet: hanvietA, nghia: nghiaA, doc: docA, resultBl: "dung"
        }));
        ck=false;
      }
    })

    if (ck) {
      this.setState(state => ({
        hanviet: "", nghia: "", doc: "", resultBl: "sai"
      }));
    }
    // if (docA.toLowerCase()===(this.state.result.toLowerCase())) {
    //   this.setState(state => ({
    //     hanviet: hanvietA, nghia: nghiaA, doc: docA, resultBl: "dung"
    //   }));
    // } else {
    //   this.setState(state => ({
    //     hanviet: "", nghia: "", doc: "", resultBl: "sai"
    //   }));
    // }

  };

  render() {
    var Kanji;
    this.state.vocaRandom.map(vocaRandom => (
        Kanji = vocaRandom.kanji
    ))
    return (
      <div class="card-deck mb-3 text-center">
      <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Vocabulary</h4>
        </div>
        <div class="card-body">
    <h1 class="card-title pricing-card-title vocaText">{Kanji}</h1>
          <div class="input-group mb-3">
            <input type="text" class="form-control inputKq" placeholder="..." aria-label="Username"
              aria-describedby="basic-addon1" value={this.state.result} onChange={this.handleChange}/>
          </div>
          <button type="button" class="btn btn-lg btn-block btn-primary btnKtkq" onClick={this.ktkqClick}>Kiểm tra kết quả</button>
          <button type="button" class="btn btn-lg btn-block btn-warning btnBt" onClick={this.handleClick}>Bó tay</button>
          <button type="button" class="btn btn-lg btn-block btn-info btnBt" onClick={() => window.location.reload(false)}>Từ khác</button>
        </div>
      </div>
      <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Information</h4>
        </div>
        <div class="card-body">
          <ShowInfo hanviet={this.state.hanviet} nghia={this.state.nghia} doc={this.state.doc} resultBl={this.state.resultBl}/>
        </div>
      </div>
    </div>
    );
  }
}
