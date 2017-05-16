import React from "react";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import AntenatalServicesReport from "./AntenatalServicesReport";
import AdultAndElderlyServicesReport from "./AdultAndElderlyServicesReport";
import ChildHealthServicesReport from "./ChildHealthServicesReport";
import ChildrenAndAdolescentServicesReport from "./ChildrenAndAdolescentServicesReport";
import PostNatalServicesReport from "./PostNatalServicesReport";
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
            selectedMonthText: "",
            selectedQuarterText: "",
            currentYear: thisYear,
            yearList: yearList,
            displayMonthSelector: "none",
            displayQuarterSelector: "none",
            displayYearSelector: "none",
            reportParam: {},

        };

        this.divStyle = {
            float: "left",
            margin: 10,
            width: "32.25%",
            height: 200

        };

        this.reportContainerStyle = {
            marginLeft: 10,
            marginTop: 30,
            width: "100%",
        };

        this.paperStyle = {
            padding: 10,
            height: "100%",
            overflowY: "auto"
        };
    }

    handleReportChange = (event, index, value) => {
        this.setState({
            selectedReport: value,
            reportParam: {}
        })
    };

    handlePeriodTypeChange = (event, index, value) => {
        let object = {};
        object.selectedPeriodType = value;
        object.selectedMonth = "";
        object.selectedQuarter = "";
        object.selectedQuarterText = "";
        object.selectedMonthText = "";
        object.selectedYear = "";
        object.reportParam = {};
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
        this.setState(object);

    };

    handleMonthChange = (event, index, value) => {
        let object = {};
        object.selectedMonth = value;
        object.selectedMonthText = event.target.innerHTML;
        object.reportParam = {};
        this.setState(object);
    };

    handleQuarterChange = (event, index, value) => {
        let object = {};
        object.selectedQuarter = value;
        object.selectedQuarterText = event.target.innerHTML;
        object.reportParam = {};
        this.setState(object);
    };

    handleYearChange = (event, index, value) => {
        let object = {};
        object.selectedYear = value;
        object.reportParam = {};
        this.setState(object);
    };

    handleGetReport = () => {
        let selectedOu = $("#ouTree").jstree("get_selected", true)[0]
        if (selectedOu === undefined) {
            alert("Please select organisation unit");
            return;
        }
        let report = this.state.selectedReport;
        let ouId = selectedOu.id;
        let ouName = selectedOu.text;
        let pe;
        let peText;
        switch (this.state.selectedPeriodType) {
            case "monthly":
                pe = this.state.selectedYear + this.state.selectedMonth;
                peText = this.state.selectedMonthText + " - " + this.state.selectedYear;
                break;
            case "quarterly":
                pe = this.state.selectedYear + this.state.selectedQuarter;
                peText = this.state.selectedQuarterText + " - " + this.state.selectedYear;
                break;
            case "yearly":
                pe = this.state.selectedYear;
                peText = this.state.selectedYear;
                break;
        }
        if (report === "") {
            alert("Please select report");
            return;
        }
        if (pe === "" || pe === undefined) {
            alert("Please select period");
            return;
        }
        let object = {};
        object.showReport = true;
        object.reportParam = {
            report: report,
            ouId: ouId,
            ouName: ouName,
            pe: pe,
            peText: peText
        };
        this.setState(object);
    };

    renderReport = () => {
        switch (this.state.selectedReport) {
            case "as":
                return <AntenatalServicesReport param={this.state.reportParam}/>;
            case "aaes":
                return <AdultAndElderlyServicesReport param={this.state.reportParam}/>;
            case "chs":
                return <ChildHealthServicesReport param={this.state.reportParam}/>;
            case "cas":
                return <ChildrenAndAdolescentServicesReport param={this.state.reportParam}/>;
            case "pn":
                return <PostNatalServicesReport param={this.state.reportParam}/>;
        }
    };

    handlePrintReport = () => {
        let mywindow = window.open('', 'PRINT');

        mywindow.document.write('<html><head>');
        mywindow.document.write('</head><body >');
        mywindow.document.write(`</body>${$("#printable").html()}</html>`);

        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/

        mywindow.print();
        mywindow.close();

        return true;
    };

    render() {
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
                        </SelectField><br/>
                        <RaisedButton label="GET REPORT" primary={true} onClick={this.handleGetReport}
                                      style={{width: 150}}/><br/>
                        <RaisedButton label="PRINT REPORT" backgroundColor="#47d147" style={{marginTop: 10, width: 150}}
                                      onClick={this.handlePrintReport}/>
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
                <div style={this.reportContainerStyle} id="printable">
                    {this.renderReport()}
                </div>
            </div>
        )
    }
}