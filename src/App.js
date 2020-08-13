import React, { PureComponent } from "react";
import './assets/pricing.css';
import randomVoca from "./randomVoca";
import ShowInfo from "./ShowInfo";

export default class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      vocaRandom: randomVoca("Kanji"),
      hanviet: null,
      nghia: "Nhấn nút Bó Tay hoặc trả lời đúng đáp án",
      doc: null,
      result: "",
      resultBl: "hienthi",
      ngonNgu: "Kanji",
      ngonNguColor: "1"
    };
    this.handleClick = this.handleClick.bind(this);
    this.reloadClick = this.reloadClick.bind(this);
    this.ktkqClick = this.ktkqClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.selectNnClick = this.selectNnClick.bind(this);
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

  reloadClick() {
    var ngonNgu = this.state.ngonNgu
    this.setState(state => ({
      vocaRandom: randomVoca(ngonNgu),
      hanviet: null,
      doc: null,
      nghia: "Nhấn nút Bó Tay hoặc trả lời đúng đáp án",
      result: "",
      resultBl: "hienthi"
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
      var docB = doc
      if ((docB != "" && doc.toLowerCase()===(this.state.result.toLowerCase()))
        || hanvietA.toLowerCase().trim() === this.state.result.toLowerCase().trim()) {
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
  };

  selectNnClick(event) {
    var selectNgonngu = event.target.id;
    var ngonNgu = "";
    var ngonNguColor = "1"
    if (selectNgonngu==="cateKanji") {
      ngonNgu = "Kanji";
      ngonNguColor = "1";
      this.setState(state => ({
        vocaRandom: randomVoca(ngonNgu)
      }));
    } else if(selectNgonngu==="cateHiragana"){
      ngonNgu = "Hiragana";
      ngonNguColor = "2";
      this.setState(state => ({
        vocaRandom: randomVoca(ngonNgu)
      }));
    } else if(selectNgonngu==="cateKatakana"){
      ngonNgu = "Katakana";
      ngonNguColor = "3";
      this.setState(state => ({
        vocaRandom: randomVoca(ngonNgu)
      }));
    }
    //  else if(selectNgonngu==="cateRomaiji"){
    //   ngonNgu = "Romaiji";
    //   ngonNguColor = "4"
    // }
    this.setState(state => ({
      ngonNgu: ngonNgu, 
      ngonNguColor: ngonNguColor,
      hanviet: null,
      doc: null,
      nghia: "Nhấn nút Bó Tay hoặc trả lời đúng đáp án",
      result: "",
      resultBl: "hienthi"
    }));
  }

  render() {
    var Chucai;
    this.state.vocaRandom.map(vocaRandom => (
      Chucai = vocaRandom.chucai
    ))
    return (
      <div>
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 class="my-0 mr-md-auto font-weight-normal">Learn Japanese Vocabulary</h5>
          <nav class="my-2 my-md-0 mr-md-3">
            {/* <a class="p-2 text-dark cateSelect" id="cateHome" href="#">Home</a> */}
            <a class={(this.state.ngonNguColor==="1" ? "p-2 text-dark cateSelect" : "p-2 text-dark")} id="cateKanji" onClick={this.selectNnClick}>Kanji</a>
            <a class={(this.state.ngonNguColor==="2" ? "p-2 text-dark cateSelect" : "p-2 text-dark")} id="cateHiragana" onClick={this.selectNnClick}>Hiragana</a>
            <a class={(this.state.ngonNguColor==="3" ? "p-2 text-dark cateSelect" : "p-2 text-dark")} id="cateKatakana" onClick={this.selectNnClick}>Katakana</a>
            {/* <a class={(this.state.ngonNguColor==="4" ? "p-2 text-dark cateSelect" : "p-2 text-dark")} id="cateRomaiji" onClick={this.selectNnClick}>Romaiji</a> */}
          </nav>
        </div>
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center caption-japanese">
          <h1 class="display-4">JAPANESE</h1>
          <h3>{this.state.ngonNgu}</h3>
          <p class="lead"></p>
        </div>

        <div class="container">
          <div class="card-deck mb-3 text-center">
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Vocabulary</h4>
              </div>
              <div class="card-body">
              <h1 class="card-title pricing-card-title vocaText">{Chucai}</h1>
                <div class="input-group mb-3">
                  <input type="text" class="form-control inputKq" placeholder="..." aria-label="Username"
                    aria-describedby="basic-addon1" value={this.state.result} onChange={this.handleChange}/>
                </div>
                <button type="button" class="btn btn-lg btn-block btn-primary btnKtkq" onClick={this.ktkqClick}>Kiểm tra kết quả</button>
                <button type="button" class="btn btn-lg btn-block btn-warning btnBt" onClick={this.handleClick}>Bó tay</button>
                <button type="button" class="btn btn-lg btn-block btn-info btnBt" onClick={this.reloadClick}>Từ khác</button>
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
          <footer class="pt-4 my-md-5 pt-md-5 border-top">
            <div class="row">
              <div class="col-12 col-md">
                <img class="mb-2" src="../assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"/>
                <small class="d-block mb-3 text-muted">&copy; copyright 2020</small>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
