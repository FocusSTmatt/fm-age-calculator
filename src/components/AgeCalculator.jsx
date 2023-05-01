import React from "react";
import IconArrow from "../assets/images/icon-arrow.svg"
import CalculateAge from "./CalculateAge";

class AgeCalculator extends React.Component{
  constructor(props){ 
    super(props);
    this.state = {
      day : '',
      month : '',
      year :  "",
      age: "",
      isClicked: false,
 
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
  }
 
  handleDayChange(e){
    this.setState({
      day: e.target.value 
    });
  }
 
  handleMonthChange(e){
    this.setState({
      month: e.target.value 
    });
  }
 
  handleYearChange(e){
    this.setState({
      year: e.target.value 
    });
  }
 
  handleSubmit(e){
    e.preventDefault();
    
    const day = this.state.day,
        month = this.state.month,
        year = this.state.year;
    
    let age =  CalculateAge(`${month} ${day} ${year}`);
   
      this.setState({
      age: age,
      isClicked: true,
    });
  }
 
  render(){
    return <div className='outer-ctn'>
      <form onSubmit = {this.handleSubmit}>
        <div className = "container">
         <div className='input-ctn'>
           <label htmlFor="day" style={{color: this.state.day > 31 ? "red" : "var(--smokeGrey)" }}>DAY</label>
           <input name="day" type="number" onChange={this.handleDayChange} required></input>
           <p className={this.state.day > 31 || this.state.day < 1 ? "block" : "hidden" }>{this.state.isClicked ? "Must be a valid day" : ""}</p>
          </div>
          <div className='input-ctn'>
           <label htmlFor="month">MONTH</label>
           <input name="month" onChange={this.handleMonthChange}></input>
           <p className={this.state.month > 12 ? "block" : "hidden" }>Must be a valid month</p>
          </div>
          <div className='input-ctn'>
           <label htmlFor="year">YEAR</label>
           <input name="year" onChange={this.handleYearChange}></input>
          </div>
        </div>
      <div className='button-ctn'>
           <div className='accent-line'></div>
           <button title="submit" type="submit"><img alt="" src={IconArrow}/></button>
           <div id="line-to-remove" className='accent-line'></div>
         </div>
      </form>
         <div className='results-ctn'>
          {this.state.isClicked 
            ? this.state.age 
            :  <div>
                <h1>-- <span>years</span></h1>
                <h1>-- <span>days</span></h1>
                <h1>-- <span>months</span></h1>
              </div>}
         </div>
    </div>;
  }
 }
 


export default AgeCalculator
