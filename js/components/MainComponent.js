import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

import config from "../model/config.json";

import OrgUnitSelector from "./OrgUnitSelector";

export default class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        let thisYear = new Date().getFullYear();
        let yearList = [];
        for (let i = 0; i <= 5; i++) {
            yearList.push(thisYear - i);
        }

        this.state = {
            selectedReport: "",
            selectedPeriodType: "",
            selectedYear: "",
            selectedMonth: "",
            selectedQuarter: "",
            currentYear: thisYear,
            yearList: yearList,
            displayMonthSelector: "none",
            displayQuarterSelector: "none",
            displayYearSelector: "none",

        };

        this.divStyle = {
            float: "left",
            margin: 10,
            width: "32%",
            height: 250

        };

        this.paperStyle = {
            padding: 10,
            height: "100%",
            overflowY: "auto"
        };
    }

    handleReportChange = (event, index, value) => {
        let object = this.state;
        object.selectedReport = value;
        this.setState({object});
    };

    handlePeriodTypeChange = (event, index, value) => {
        let object = this.state;
        object.selectedPeriodType = value;
        object.selectedMonth = "";
        object.selectedQuarter = "";
        object.selectedYear = "";
        if (value === "monthly") {
            object.displayQuarterSelector = "none";
            object.displayMonthSelector = "inline-block";
            object.displayYearSelector = "inline-block";

        } else if (value === "quarterly") {
            object.displayQuarterSelector = "inline-block";
            object.displayMonthSelector = "none";
            object.displayYearSelector = "inline-block";

        } else {
            object.displayQuarterSelector = "none";
            object.displayMonthSelector = "none";
            object.displayYearSelector = "inline-block";

        }
        this.setState({object});
    };

    handleMonthChange = (event, index, value) => {
        let object = this.state;
        object.selectedMonth = value;
        this.setState({object});
    };

    handleQuarterChange = (event, index, value) => {
        let object = this.state;
        object.selectedQuarter = value;
        this.setState({object});
    };

    handleYearChange = (event, index, value) => {
        let object = this.state;
        object.selectedYear = value;
        this.setState({object});
    };


    render() {
        console.log(this.state);
        return (
            <div>
                <div style={this.divStyle}>
                    <Paper zDepth={1} style={this.paperStyle}>
                        <SelectField autoWidth={true} style={{width: 350}} onChange={this.handleReportChange}
                                     value={this.state.selectedReport}
                                     floatingLabelText="Please select report">
                            {
                                config.reports.map(report => {
                                    return (
                                        <MenuItem key={report.code} value={report.code} primaryText={report.name}/>);
                                })
                            }
                        </SelectField>
                    </Paper>
                </div>
                <div style={this.divStyle}>
                    <Paper zDepth={1} style={this.paperStyle}>
                        Please select organisation unit:
                        <OrgUnitSelector/>
                    </Paper>
                </div>
                <div style={this.divStyle}>
                    <Paper zDepth={1} style={this.paperStyle}>
                        Please select period:<br/>
                        <SelectField autoWidth={true} onChange={this.handlePeriodTypeChange}
                                     value={this.state.selectedPeriodType}
                                     floatingLabelText="Select period type">
                            <MenuItem key="m" value="monthly" primaryText="Monthly"/>
                            <MenuItem key="q" value="quarterly" primaryText="Quarterly"/>
                            <MenuItem key="y" value="yearly" primaryText="Yearly"/>
                        </SelectField><br/>
                        <SelectField autoWidth={true}
                                     value={this.state.selectedMonth}
                                     onChange={this.handleMonthChange}
                                     floatingLabelText="Select month"
                                     style={{display: this.state.displayMonthSelector}}>
                            <MenuItem key="01" value="01" primaryText="January"/>
                            <MenuItem key="02" value="02" primaryText="February"/>
                            <MenuItem key="03" value="03" primaryText="March"/>
                            <MenuItem key="04" value="04" primaryText="April"/>
                            <MenuItem key="05" value="05" primaryText="May"/>
                            <MenuItem key="06" value="06" primaryText="June"/>
                            <MenuItem key="07" value="07" primaryText="July"/>
                            <MenuItem key="08" value="08" primaryText="August"/>
                            <MenuItem key="09" value="09" primaryText="September"/>
                            <MenuItem key="10" value="10" primaryText="October"/>
                            <MenuItem key="11" value="11" primaryText="November"/>
                            <MenuItem key="12" value="12" primaryText="December"/>
                        </SelectField>
                        <SelectField autoWidth={true}
                                     value={this.state.selectedQuarter}
                                     onChange={this.handleQuarterChange}
                                     floatingLabelText="Select quarter"
                                     style={{display: this.state.displayQuarterSelector}}>
                            <MenuItem key="Q1" value="Q1" primaryText="Quarter 1"/>
                            <MenuItem key="Q2" value="Q2" primaryText="Quarter 2"/>
                            <MenuItem key="Q3" value="Q3" primaryText="Quarter 3"/>
                            <MenuItem key="Q4" value="Q4" primaryText="Quarter 4"/>
                        </SelectField>
                        <SelectField autoWidth={true}
                                     value={this.state.selectedYear}
                                     onChange={this.handleYearChange}
                                     floatingLabelText="Select year"
                                     style={{display: this.state.displayYearSelector}}>
                            {
                                this.state.yearList.map(year => {
                                    return (<MenuItem key={year} value={year} primaryText={year}/>)
                                })
                            }
                        </SelectField>
                    </Paper>
                </div>
            </div>
        )
    }
}