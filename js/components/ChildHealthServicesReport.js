import React from "react";
import Fetch from "../model/Fetch";
import config from "../model/config.json";

export default class ChildHealthServicesReport extends React.Component {
    constructor(props) {
        super(props);
        this.css = `table{border-collapse:collapse;width:99%}table,td{padding:0!important;text-align:center;border:1px solid #BDBDBD}table tr:nth-child(1){color:#fff;font-weight:700;text-align:center;font-size:20px;background-color:#66BB6A}table tr:nth-child(2),table tr:nth-child(3),table tr:nth-child(4){text-align:center;font-weight:700;background-color:#FFD54F}table tr:nth-child(4) td{text-align:center;width:4.5%}table tr:nth-child(n+5) td:nth-child(1),table tr:nth-child(n+5) td:nth-child(2){text-align:left;background-color:#B2EBF2}.title{font-weight:700}input{width:70%!important}`
        this.fetch = new Fetch();
    }

    loadData = () => {
        $("td[id*=val]").each((index, element) => {
            $(element).html("");
        });

        if (this.props.param.hasOwnProperty("ouId") === false) {
            return;
        }

        this.api = `${config.baseUrl}/api/analytics.json?dimension=dx:p5wtBAglby7;KvNy7IF39g8;rSUstUqlQGk;PSRULTICdts;XxuBMiv2yda;HqtI3sZwixV;ZazShG9IhoZ;p8wmAGAMSps;mqdT9DEOSK2;QPHos3JifrS;Als1xfV6wtB;wabwJ8qisMa;KdygeTBFO0B;yZDM0u9Fyqr;kAfIuVTAYAN;yyVr0LxyCR1;qSNKz5tVCVk;gWvxgxbKT43;nSjgZhnJxCs;xSOBz1aIhwf;n3i1dEBEZ2I;RLvEPU6MEH9;NzF1UUFK88A;ZpGpAISkXhr;ieuLNWzmebG;WfeBkgYTBzK;wgFY9o8EMiU;nUtgp3vxnZI;p5g2V3x0lnV;Sone1zgfkb4;iJ5cX1niL4o;ukCqGz9Ko9t;Dm2DVJgxVb8;lU4s1qJVddp;gaWO0LDH8Uf;EhLma6ONct0;ZlBohdzsdOA;VFAU3qR1aUQ;V84Th18nv5B;Hjv1mMDWCfP;EgW1KQhJjwJ;QlpLqW8a6m6;DGfGkLniHqX;kJgArTqRqhi;j61qkQirWcK&dimension=co&filter=pe:${this.props.param.pe}&filter=ou:${this.props.param.ouId}`;
        this.fetch.getReportData(this.api)
            .then(json => {
                console.log(json);
                json.rows.forEach(row => {
                    let de = row[0];
                    let co = row[1];
                    let value = parseInt(row[2]);
                    $(`#${de}-${co}-val`).html(value);
                });
            });
    };

    render() {
        this.loadData();
        return (
            <div>
                <style>{this.css}</style>
                <table>
                    <tbody>
                    <tr>
                        <td colSpan="18">CHILD HEALTH SERVICE<br/>{this.props.param.ouName}<br/>{this.props.param.peText}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" rowSpan="3">SERVICE</td>
                    </tr>
                    <tr>
                        <td colSpan="2">At or &lt; 6 wks.</td>
                        <td colSpan="2">&gt; 6 wks - &lt; 1 yr</td>
                        <td colSpan="2">1 Yr</td>
                        <td colSpan="2">2 Yrs</td>
                        <td colSpan="2">3Yrs</td>
                        <td colSpan="2">4 Yrs</td>
                        <td colSpan="2">Unkn.</td>
                        <td colSpan="2">TOTAL</td>
                    </tr>
                    <tr>
                        <td>M</td>
                        <td>F</td>
                        <td>M</td>
                        <td>F</td>
                        <td>M</td>
                        <td>F</td>
                        <td>M</td>
                        <td>F</td>
                        <td>M</td>
                        <td>F</td>
                        <td>M</td>
                        <td>F</td>
                        <td>M</td>
                        <td>F</td>
                        <td>M</td>
                        <td>F</td>
                    </tr>
                    <tr>
                        <td className="title">5.1</td>
                        <td>(a) 1st Clinic Visit this year</td>
                        <td id="ZazShG9IhoZ-WvAOHVRWa9i-val"></td>
                        <td id="ZazShG9IhoZ-rb3o0mNdpP1-val"></td>
                        <td id="ZazShG9IhoZ-jtWWIUDocN2-val"></td>
                        <td id="ZazShG9IhoZ-YUnMH4DTVR4-val"></td>
                        <td id="ZazShG9IhoZ-PU8a0NPAzVe-val"></td>
                        <td id="ZazShG9IhoZ-oM4ey1cwpNA-val"></td>
                        <td id="ZazShG9IhoZ-WnrReHFwr1M-val"></td>
                        <td id="ZazShG9IhoZ-y010rBTrvro-val"></td>
                        <td id="ZazShG9IhoZ-u7H9Wr2gIbZ-val"></td>
                        <td id="ZazShG9IhoZ-VHWCFFYJNGD-val"></td>
                        <td id="ZazShG9IhoZ-Il1VVD3QC7N-val"></td>
                        <td id="ZazShG9IhoZ-AmCZVSsjn9k-val"></td>
                        <td id="ZazShG9IhoZ-l3zvVwrAkRb-val"></td>
                        <td id="ZazShG9IhoZ-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(b) Return Clinic visits this year</td>
                        <td id="Hjv1mMDWCfP-WvAOHVRWa9i-val"></td>
                        <td id="Hjv1mMDWCfP-rb3o0mNdpP1-val"></td>
                        <td id="Hjv1mMDWCfP-jtWWIUDocN2-val"></td>
                        <td id="Hjv1mMDWCfP-YUnMH4DTVR4-val"></td>
                        <td id="Hjv1mMDWCfP-PU8a0NPAzVe-val"></td>
                        <td id="Hjv1mMDWCfP-oM4ey1cwpNA-val"></td>
                        <td id="Hjv1mMDWCfP-WnrReHFwr1M-val"></td>
                        <td id="Hjv1mMDWCfP-y010rBTrvro-val"></td>
                        <td id="Hjv1mMDWCfP-u7H9Wr2gIbZ-val"></td>
                        <td id="Hjv1mMDWCfP-VHWCFFYJNGD-val"></td>
                        <td id="Hjv1mMDWCfP-Il1VVD3QC7N-val"></td>
                        <td id="Hjv1mMDWCfP-AmCZVSsjn9k-val"></td>
                        <td id="Hjv1mMDWCfP-l3zvVwrAkRb-val"></td>
                        <td id="Hjv1mMDWCfP-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(c) Total Clinic Visits</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">5.2</td>
                        <td>High risk first identified this year</td>
                        <td id="ieuLNWzmebG-WvAOHVRWa9i-val"></td>
                        <td id="ieuLNWzmebG-rb3o0mNdpP1-val"></td>
                        <td id="ieuLNWzmebG-jtWWIUDocN2-val"></td>
                        <td id="ieuLNWzmebG-YUnMH4DTVR4-val"></td>
                        <td id="ieuLNWzmebG-PU8a0NPAzVe-val"></td>
                        <td id="ieuLNWzmebG-oM4ey1cwpNA-val"></td>
                        <td id="ieuLNWzmebG-WnrReHFwr1M-val"></td>
                        <td id="ieuLNWzmebG-y010rBTrvro-val"></td>
                        <td id="ieuLNWzmebG-u7H9Wr2gIbZ-val"></td>
                        <td id="ieuLNWzmebG-VHWCFFYJNGD-val"></td>
                        <td id="ieuLNWzmebG-Il1VVD3QC7N-val"></td>
                        <td id="ieuLNWzmebG-AmCZVSsjn9k-val"></td>
                        <td id="ieuLNWzmebG-l3zvVwrAkRb-val"></td>
                        <td id="ieuLNWzmebG-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">5.3</td>
                        <td className="title">Breast-Feeding</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(a)Infants seen at 0-6 months</td>
                        <td id="mqdT9DEOSK2-WvAOHVRWa9i-val"></td>
                        <td id="mqdT9DEOSK2-rb3o0mNdpP1-val"></td>
                        <td id="mqdT9DEOSK2-jtWWIUDocN2-val"></td>
                        <td id="mqdT9DEOSK2-YUnMH4DTVR4-val"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(b) Of those seen at (a) infants solely breast-fed</td>
                        <td id="QPHos3JifrS-WvAOHVRWa9i-val"></td>
                        <td id="QPHos3JifrS-rb3o0mNdpP1-val"></td>
                        <td id="QPHos3JifrS-jtWWIUDocN2-val"></td>
                        <td id="QPHos3JifrS-YUnMH4DTVR4-val"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">5.4</td>
                        <td className="title">HB Screening</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(a)Number screened first time during 1st year</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td id="gWvxgxbKT43-PU8a0NPAzVe-val"></td>
                        <td id="gWvxgxbKT43-oM4ey1cwpNA-val"></td>
                        <td id="gWvxgxbKT43-WnrReHFwr1M-val"></td>
                        <td id="gWvxgxbKT43-y010rBTrvro-val"></td>
                        <td id="gWvxgxbKT43-u7H9Wr2gIbZ-val"></td>
                        <td id="gWvxgxbKT43-VHWCFFYJNGD-val"></td>
                        <td id="gWvxgxbKT43-Il1VVD3QC7N-val"></td>
                        <td id="gWvxgxbKT43-AmCZVSsjn9k-val"></td>
                        <td id="gWvxgxbKT43-l3zvVwrAkRb-val"></td>
                        <td id="gWvxgxbKT43-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(b)Of those with abnormal result 1st time this age (&lt; 7.5g)</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td id="n3i1dEBEZ2I-PU8a0NPAzVe-val"></td>
                        <td id="n3i1dEBEZ2I-oM4ey1cwpNA-val"></td>
                        <td id="n3i1dEBEZ2I-WnrReHFwr1M-val"></td>
                        <td id="n3i1dEBEZ2I-y010rBTrvro-val"></td>
                        <td id="n3i1dEBEZ2I-u7H9Wr2gIbZ-val"></td>
                        <td id="n3i1dEBEZ2I-VHWCFFYJNGD-val"></td>
                        <td id="n3i1dEBEZ2I-Il1VVD3QC7N-val"></td>
                        <td id="n3i1dEBEZ2I-AmCZVSsjn9k-val"></td>
                        <td id="n3i1dEBEZ2I-l3zvVwrAkRb-val"></td>
                        <td id="n3i1dEBEZ2I-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(c)Of those with abnormal result 1st time this age (7.5 - 8.9g)</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td id="nSjgZhnJxCs-PU8a0NPAzVe-val"></td>
                        <td id="nSjgZhnJxCs-oM4ey1cwpNA-val"></td>
                        <td id="nSjgZhnJxCs-WnrReHFwr1M-val"></td>
                        <td id="nSjgZhnJxCs-y010rBTrvro-val"></td>
                        <td id="nSjgZhnJxCs-u7H9Wr2gIbZ-val"></td>
                        <td id="nSjgZhnJxCs-VHWCFFYJNGD-val"></td>
                        <td id="nSjgZhnJxCs-Il1VVD3QC7N-val"></td>
                        <td id="nSjgZhnJxCs-AmCZVSsjn9k-val"></td>
                        <td id="nSjgZhnJxCs-l3zvVwrAkRb-val"></td>
                        <td id="nSjgZhnJxCs-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(d)Of those with abnormal result 1st time this age (9-10.9g)</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td id="xSOBz1aIhwf-PU8a0NPAzVe-val"></td>
                        <td id="xSOBz1aIhwf-oM4ey1cwpNA-val"></td>
                        <td id="xSOBz1aIhwf-WnrReHFwr1M-val"></td>
                        <td id="xSOBz1aIhwf-y010rBTrvro-val"></td>
                        <td id="xSOBz1aIhwf-u7H9Wr2gIbZ-val"></td>
                        <td id="xSOBz1aIhwf-VHWCFFYJNGD-val"></td>
                        <td id="xSOBz1aIhwf-Il1VVD3QC7N-val"></td>
                        <td id="xSOBz1aIhwf-AmCZVSsjn9k-val"></td>
                        <td id="xSOBz1aIhwf-l3zvVwrAkRb-val"></td>
                        <td id="xSOBz1aIhwf-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(e)Of those with normal result 1st time this age (&gt;11g)</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td id="RLvEPU6MEH9-PU8a0NPAzVe-val"></td>
                        <td id="RLvEPU6MEH9-oM4ey1cwpNA-val"></td>
                        <td id="RLvEPU6MEH9-WnrReHFwr1M-val"></td>
                        <td id="RLvEPU6MEH9-y010rBTrvro-val"></td>
                        <td id="RLvEPU6MEH9-u7H9Wr2gIbZ-val"></td>
                        <td id="RLvEPU6MEH9-VHWCFFYJNGD-val"></td>
                        <td id="RLvEPU6MEH9-Il1VVD3QC7N-val"></td>
                        <td id="RLvEPU6MEH9-AmCZVSsjn9k-val"></td>
                        <td id="RLvEPU6MEH9-l3zvVwrAkRb-val"></td>
                        <td id="RLvEPU6MEH9-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(f)Those given iron supplement</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td id="NzF1UUFK88A-PU8a0NPAzVe-val"></td>
                        <td id="NzF1UUFK88A-oM4ey1cwpNA-val"></td>
                        <td id="NzF1UUFK88A-WnrReHFwr1M-val"></td>
                        <td id="NzF1UUFK88A-y010rBTrvro-val"></td>
                        <td id="NzF1UUFK88A-u7H9Wr2gIbZ-val"></td>
                        <td id="NzF1UUFK88A-VHWCFFYJNGD-val"></td>
                        <td id="NzF1UUFK88A-Il1VVD3QC7N-val"></td>
                        <td id="NzF1UUFK88A-AmCZVSsjn9k-val"></td>
                        <td id="NzF1UUFK88A-l3zvVwrAkRb-val"></td>
                        <td id="NzF1UUFK88A-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(g) Those referred for treatment</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td id="ZpGpAISkXhr-PU8a0NPAzVe-val"></td>
                        <td id="ZpGpAISkXhr-oM4ey1cwpNA-val"></td>
                        <td id="ZpGpAISkXhr-WnrReHFwr1M-val"></td>
                        <td id="ZpGpAISkXhr-y010rBTrvro-val"></td>
                        <td id="ZpGpAISkXhr-u7H9Wr2gIbZ-val"></td>
                        <td id="ZpGpAISkXhr-VHWCFFYJNGD-val"></td>
                        <td id="ZpGpAISkXhr-Il1VVD3QC7N-val"></td>
                        <td id="ZpGpAISkXhr-AmCZVSsjn9k-val"></td>
                        <td id="ZpGpAISkXhr-l3zvVwrAkRb-val"></td>
                        <td id="ZpGpAISkXhr-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">5.5</td>
                        <td className="title">First abnormal weight for length/height measurement</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(a)Moderate/Mild</td>
                        <td id="PSRULTICdts-WvAOHVRWa9i-val"></td>
                        <td id="PSRULTICdts-rb3o0mNdpP1-val"></td>
                        <td id="PSRULTICdts-jtWWIUDocN2-val"></td>
                        <td id="PSRULTICdts-YUnMH4DTVR4-val"></td>
                        <td id="PSRULTICdts-PU8a0NPAzVe-val"></td>
                        <td id="PSRULTICdts-oM4ey1cwpNA-val"></td>
                        <td id="PSRULTICdts-WnrReHFwr1M-val"></td>
                        <td id="PSRULTICdts-y010rBTrvro-val"></td>
                        <td id="PSRULTICdts-u7H9Wr2gIbZ-val"></td>
                        <td id="PSRULTICdts-VHWCFFYJNGD-val"></td>
                        <td id="PSRULTICdts-Il1VVD3QC7N-val"></td>
                        <td id="PSRULTICdts-AmCZVSsjn9k-val"></td>
                        <td id="PSRULTICdts-l3zvVwrAkRb-val"></td>
                        <td id="PSRULTICdts-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(b) Severe</td>
                        <td id="HqtI3sZwixV-WvAOHVRWa9i-val"></td>
                        <td id="HqtI3sZwixV-rb3o0mNdpP1-val"></td>
                        <td id="HqtI3sZwixV-jtWWIUDocN2-val"></td>
                        <td id="HqtI3sZwixV-YUnMH4DTVR4-val"></td>
                        <td id="HqtI3sZwixV-PU8a0NPAzVe-val"></td>
                        <td id="HqtI3sZwixV-oM4ey1cwpNA-val"></td>
                        <td id="HqtI3sZwixV-WnrReHFwr1M-val"></td>
                        <td id="HqtI3sZwixV-y010rBTrvro-val"></td>
                        <td id="HqtI3sZwixV-u7H9Wr2gIbZ-val"></td>
                        <td id="HqtI3sZwixV-VHWCFFYJNGD-val"></td>
                        <td id="HqtI3sZwixV-Il1VVD3QC7N-val"></td>
                        <td id="HqtI3sZwixV-AmCZVSsjn9k-val"></td>
                        <td id="HqtI3sZwixV-l3zvVwrAkRb-val"></td>
                        <td id="HqtI3sZwixV-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(c)Overweight</td>
                        <td id="XxuBMiv2yda-WvAOHVRWa9i-val"></td>
                        <td id="XxuBMiv2yda-rb3o0mNdpP1-val"></td>
                        <td id="XxuBMiv2yda-jtWWIUDocN2-val"></td>
                        <td id="XxuBMiv2yda-YUnMH4DTVR4-val"></td>
                        <td id="XxuBMiv2yda-PU8a0NPAzVe-val"></td>
                        <td id="XxuBMiv2yda-oM4ey1cwpNA-val"></td>
                        <td id="XxuBMiv2yda-WnrReHFwr1M-val"></td>
                        <td id="XxuBMiv2yda-y010rBTrvro-val"></td>
                        <td id="XxuBMiv2yda-u7H9Wr2gIbZ-val"></td>
                        <td id="XxuBMiv2yda-VHWCFFYJNGD-val"></td>
                        <td id="XxuBMiv2yda-Il1VVD3QC7N-val"></td>
                        <td id="XxuBMiv2yda-AmCZVSsjn9k-val"></td>
                        <td id="XxuBMiv2yda-l3zvVwrAkRb-val"></td>
                        <td id="XxuBMiv2yda-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">5.6</td>
                        <td className="title">First abnormal length/height-for-age measurement</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(a) Normal</td>
                        <td id="KvNy7IF39g8-WvAOHVRWa9i-val"></td>
                        <td id="KvNy7IF39g8-rb3o0mNdpP1-val"></td>
                        <td id="KvNy7IF39g8-jtWWIUDocN2-val"></td>
                        <td id="KvNy7IF39g8-YUnMH4DTVR4-val"></td>
                        <td id="KvNy7IF39g8-PU8a0NPAzVe-val"></td>
                        <td id="KvNy7IF39g8-oM4ey1cwpNA-val"></td>
                        <td id="KvNy7IF39g8-WnrReHFwr1M-val"></td>
                        <td id="KvNy7IF39g8-y010rBTrvro-val"></td>
                        <td id="KvNy7IF39g8-u7H9Wr2gIbZ-val"></td>
                        <td id="KvNy7IF39g8-VHWCFFYJNGD-val"></td>
                        <td id="KvNy7IF39g8-Il1VVD3QC7N-val"></td>
                        <td id="KvNy7IF39g8-AmCZVSsjn9k-val"></td>
                        <td id="KvNy7IF39g8-l3zvVwrAkRb-val"></td>
                        <td id="KvNy7IF39g8-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(b)Abnormal</td>
                        <td id="p5wtBAglby7-WvAOHVRWa9i-val"></td>
                        <td id="p5wtBAglby7-rb3o0mNdpP1-val"></td>
                        <td id="p5wtBAglby7-jtWWIUDocN2-val"></td>
                        <td id="p5wtBAglby7-YUnMH4DTVR4-val"></td>
                        <td id="p5wtBAglby7-PU8a0NPAzVe-val"></td>
                        <td id="p5wtBAglby7-oM4ey1cwpNA-val"></td>
                        <td id="p5wtBAglby7-WnrReHFwr1M-val"></td>
                        <td id="p5wtBAglby7-y010rBTrvro-val"></td>
                        <td id="p5wtBAglby7-u7H9Wr2gIbZ-val"></td>
                        <td id="p5wtBAglby7-VHWCFFYJNGD-val"></td>
                        <td id="p5wtBAglby7-Il1VVD3QC7N-val"></td>
                        <td id="p5wtBAglby7-AmCZVSsjn9k-val"></td>
                        <td id="p5wtBAglby7-l3zvVwrAkRb-val"></td>
                        <td id="p5wtBAglby7-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(c) Stunted</td>
                        <td id="rSUstUqlQGk-WvAOHVRWa9i-val"></td>
                        <td id="rSUstUqlQGk-rb3o0mNdpP1-val"></td>
                        <td id="rSUstUqlQGk-jtWWIUDocN2-val"></td>
                        <td id="rSUstUqlQGk-YUnMH4DTVR4-val"></td>
                        <td id="rSUstUqlQGk-PU8a0NPAzVe-val"></td>
                        <td id="rSUstUqlQGk-oM4ey1cwpNA-val"></td>
                        <td id="rSUstUqlQGk-WnrReHFwr1M-val"></td>
                        <td id="rSUstUqlQGk-y010rBTrvro-val"></td>
                        <td id="rSUstUqlQGk-u7H9Wr2gIbZ-val"></td>
                        <td id="rSUstUqlQGk-VHWCFFYJNGD-val"></td>
                        <td id="rSUstUqlQGk-Il1VVD3QC7N-val"></td>
                        <td id="rSUstUqlQGk-AmCZVSsjn9k-val"></td>
                        <td id="rSUstUqlQGk-l3zvVwrAkRb-val"></td>
                        <td id="rSUstUqlQGk-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">5.7</td>
                        <td className="title">Physical &amp; Psychosocial Assessment</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(a) No. Assessed</td>
                        <td id="EhLma6ONct0-WvAOHVRWa9i-val"></td>
                        <td id="EhLma6ONct0-rb3o0mNdpP1-val"></td>
                        <td id="EhLma6ONct0-jtWWIUDocN2-val"></td>
                        <td id="EhLma6ONct0-YUnMH4DTVR4-val"></td>
                        <td id="EhLma6ONct0-PU8a0NPAzVe-val"></td>
                        <td id="EhLma6ONct0-oM4ey1cwpNA-val"></td>
                        <td id="EhLma6ONct0-WnrReHFwr1M-val"></td>
                        <td id="EhLma6ONct0-y010rBTrvro-val"></td>
                        <td id="EhLma6ONct0-u7H9Wr2gIbZ-val"></td>
                        <td id="EhLma6ONct0-VHWCFFYJNGD-val"></td>
                        <td id="EhLma6ONct0-Il1VVD3QC7N-val"></td>
                        <td id="EhLma6ONct0-AmCZVSsjn9k-val"></td>
                        <td id="EhLma6ONct0-l3zvVwrAkRb-val"></td>
                        <td id="EhLma6ONct0-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(b) No. with abnormal findings</td>
                        <td id="VFAU3qR1aUQ-WvAOHVRWa9i-val"></td>
                        <td id="VFAU3qR1aUQ-rb3o0mNdpP1-val"></td>
                        <td id="VFAU3qR1aUQ-jtWWIUDocN2-val"></td>
                        <td id="VFAU3qR1aUQ-YUnMH4DTVR4-val"></td>
                        <td id="VFAU3qR1aUQ-PU8a0NPAzVe-val"></td>
                        <td id="VFAU3qR1aUQ-oM4ey1cwpNA-val"></td>
                        <td id="VFAU3qR1aUQ-WnrReHFwr1M-val"></td>
                        <td id="VFAU3qR1aUQ-y010rBTrvro-val"></td>
                        <td id="VFAU3qR1aUQ-u7H9Wr2gIbZ-val"></td>
                        <td id="VFAU3qR1aUQ-VHWCFFYJNGD-val"></td>
                        <td id="VFAU3qR1aUQ-Il1VVD3QC7N-val"></td>
                        <td id="VFAU3qR1aUQ-AmCZVSsjn9k-val"></td>
                        <td id="VFAU3qR1aUQ-l3zvVwrAkRb-val"></td>
                        <td id="VFAU3qR1aUQ-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(c) No. Referred</td>
                        <td id="ZlBohdzsdOA-WvAOHVRWa9i-val"></td>
                        <td id="ZlBohdzsdOA-rb3o0mNdpP1-val"></td>
                        <td id="ZlBohdzsdOA-jtWWIUDocN2-val"></td>
                        <td id="ZlBohdzsdOA-YUnMH4DTVR4-val"></td>
                        <td id="ZlBohdzsdOA-PU8a0NPAzVe-val"></td>
                        <td id="ZlBohdzsdOA-oM4ey1cwpNA-val"></td>
                        <td id="ZlBohdzsdOA-WnrReHFwr1M-val"></td>
                        <td id="ZlBohdzsdOA-y010rBTrvro-val"></td>
                        <td id="ZlBohdzsdOA-u7H9Wr2gIbZ-val"></td>
                        <td id="ZlBohdzsdOA-VHWCFFYJNGD-val"></td>
                        <td id="ZlBohdzsdOA-Il1VVD3QC7N-val"></td>
                        <td id="ZlBohdzsdOA-AmCZVSsjn9k-val"></td>
                        <td id="ZlBohdzsdOA-l3zvVwrAkRb-val"></td>
                        <td id="ZlBohdzsdOA-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(d) No. with confirmed problems</td>
                        <td id="V84Th18nv5B-WvAOHVRWa9i-val"></td>
                        <td id="V84Th18nv5B-rb3o0mNdpP1-val"></td>
                        <td id="V84Th18nv5B-jtWWIUDocN2-val"></td>
                        <td id="V84Th18nv5B-YUnMH4DTVR4-val"></td>
                        <td id="V84Th18nv5B-PU8a0NPAzVe-val"></td>
                        <td id="V84Th18nv5B-oM4ey1cwpNA-val"></td>
                        <td id="V84Th18nv5B-WnrReHFwr1M-val"></td>
                        <td id="V84Th18nv5B-y010rBTrvro-val"></td>
                        <td id="V84Th18nv5B-u7H9Wr2gIbZ-val"></td>
                        <td id="V84Th18nv5B-VHWCFFYJNGD-val"></td>
                        <td id="V84Th18nv5B-Il1VVD3QC7N-val"></td>
                        <td id="V84Th18nv5B-AmCZVSsjn9k-val"></td>
                        <td id="V84Th18nv5B-l3zvVwrAkRb-val"></td>
                        <td id="V84Th18nv5B-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">5.8</td>
                        <td className="title">Other conditions</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(a) Diarrhoeal diseases</td>
                        <td id="nUtgp3vxnZI-WvAOHVRWa9i-val"></td>
                        <td id="nUtgp3vxnZI-rb3o0mNdpP1-val"></td>
                        <td id="nUtgp3vxnZI-jtWWIUDocN2-val"></td>
                        <td id="nUtgp3vxnZI-YUnMH4DTVR4-val"></td>
                        <td id="nUtgp3vxnZI-PU8a0NPAzVe-val"></td>
                        <td id="nUtgp3vxnZI-oM4ey1cwpNA-val"></td>
                        <td id="nUtgp3vxnZI-WnrReHFwr1M-val"></td>
                        <td id="nUtgp3vxnZI-y010rBTrvro-val"></td>
                        <td id="nUtgp3vxnZI-u7H9Wr2gIbZ-val"></td>
                        <td id="nUtgp3vxnZI-VHWCFFYJNGD-val"></td>
                        <td id="nUtgp3vxnZI-Il1VVD3QC7N-val"></td>
                        <td id="nUtgp3vxnZI-AmCZVSsjn9k-val"></td>
                        <td id="nUtgp3vxnZI-l3zvVwrAkRb-val"></td>
                        <td id="nUtgp3vxnZI-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(b) Acute respiratory infection</td>
                        <td id="WfeBkgYTBzK-WvAOHVRWa9i-val"></td>
                        <td id="WfeBkgYTBzK-rb3o0mNdpP1-val"></td>
                        <td id="WfeBkgYTBzK-jtWWIUDocN2-val"></td>
                        <td id="WfeBkgYTBzK-YUnMH4DTVR4-val"></td>
                        <td id="WfeBkgYTBzK-PU8a0NPAzVe-val"></td>
                        <td id="WfeBkgYTBzK-oM4ey1cwpNA-val"></td>
                        <td id="WfeBkgYTBzK-WnrReHFwr1M-val"></td>
                        <td id="WfeBkgYTBzK-y010rBTrvro-val"></td>
                        <td id="WfeBkgYTBzK-u7H9Wr2gIbZ-val"></td>
                        <td id="WfeBkgYTBzK-VHWCFFYJNGD-val"></td>
                        <td id="WfeBkgYTBzK-Il1VVD3QC7N-val"></td>
                        <td id="WfeBkgYTBzK-AmCZVSsjn9k-val"></td>
                        <td id="WfeBkgYTBzK-l3zvVwrAkRb-val"></td>
                        <td id="WfeBkgYTBzK-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(c) Asthma</td>
                        <td id="wgFY9o8EMiU-WvAOHVRWa9i-val"></td>
                        <td id="wgFY9o8EMiU-rb3o0mNdpP1-val"></td>
                        <td id="wgFY9o8EMiU-jtWWIUDocN2-val"></td>
                        <td id="wgFY9o8EMiU-YUnMH4DTVR4-val"></td>
                        <td id="wgFY9o8EMiU-PU8a0NPAzVe-val"></td>
                        <td id="wgFY9o8EMiU-oM4ey1cwpNA-val"></td>
                        <td id="wgFY9o8EMiU-WnrReHFwr1M-val"></td>
                        <td id="wgFY9o8EMiU-y010rBTrvro-val"></td>
                        <td id="wgFY9o8EMiU-u7H9Wr2gIbZ-val"></td>
                        <td id="wgFY9o8EMiU-VHWCFFYJNGD-val"></td>
                        <td id="wgFY9o8EMiU-Il1VVD3QC7N-val"></td>
                        <td id="wgFY9o8EMiU-AmCZVSsjn9k-val"></td>
                        <td id="wgFY9o8EMiU-l3zvVwrAkRb-val"></td>
                        <td id="wgFY9o8EMiU-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(d) Sickle Cell</td>
                        <td id="lU4s1qJVddp-WvAOHVRWa9i-val"></td>
                        <td id="lU4s1qJVddp-rb3o0mNdpP1-val"></td>
                        <td id="lU4s1qJVddp-jtWWIUDocN2-val"></td>
                        <td id="lU4s1qJVddp-YUnMH4DTVR4-val"></td>
                        <td id="lU4s1qJVddp-PU8a0NPAzVe-val"></td>
                        <td id="lU4s1qJVddp-oM4ey1cwpNA-val"></td>
                        <td id="lU4s1qJVddp-WnrReHFwr1M-val"></td>
                        <td id="lU4s1qJVddp-y010rBTrvro-val"></td>
                        <td id="lU4s1qJVddp-u7H9Wr2gIbZ-val"></td>
                        <td id="lU4s1qJVddp-VHWCFFYJNGD-val"></td>
                        <td id="lU4s1qJVddp-Il1VVD3QC7N-val"></td>
                        <td id="lU4s1qJVddp-AmCZVSsjn9k-val"></td>
                        <td id="lU4s1qJVddp-l3zvVwrAkRb-val"></td>
                        <td id="lU4s1qJVddp-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(e) Worm infestation</td>
                        <td id="gaWO0LDH8Uf-WvAOHVRWa9i-val"></td>
                        <td id="gaWO0LDH8Uf-rb3o0mNdpP1-val"></td>
                        <td id="gaWO0LDH8Uf-jtWWIUDocN2-val"></td>
                        <td id="gaWO0LDH8Uf-YUnMH4DTVR4-val"></td>
                        <td id="gaWO0LDH8Uf-PU8a0NPAzVe-val"></td>
                        <td id="gaWO0LDH8Uf-oM4ey1cwpNA-val"></td>
                        <td id="gaWO0LDH8Uf-WnrReHFwr1M-val"></td>
                        <td id="gaWO0LDH8Uf-y010rBTrvro-val"></td>
                        <td id="gaWO0LDH8Uf-u7H9Wr2gIbZ-val"></td>
                        <td id="gaWO0LDH8Uf-VHWCFFYJNGD-val"></td>
                        <td id="gaWO0LDH8Uf-Il1VVD3QC7N-val"></td>
                        <td id="gaWO0LDH8Uf-AmCZVSsjn9k-val"></td>
                        <td id="gaWO0LDH8Uf-l3zvVwrAkRb-val"></td>
                        <td id="gaWO0LDH8Uf-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(f) Measles</td>
                        <td id="p5g2V3x0lnV-WvAOHVRWa9i-val"></td>
                        <td id="p5g2V3x0lnV-rb3o0mNdpP1-val"></td>
                        <td id="p5g2V3x0lnV-jtWWIUDocN2-val"></td>
                        <td id="p5g2V3x0lnV-YUnMH4DTVR4-val"></td>
                        <td id="p5g2V3x0lnV-PU8a0NPAzVe-val"></td>
                        <td id="p5g2V3x0lnV-oM4ey1cwpNA-val"></td>
                        <td id="p5g2V3x0lnV-WnrReHFwr1M-val"></td>
                        <td id="p5g2V3x0lnV-y010rBTrvro-val"></td>
                        <td id="p5g2V3x0lnV-u7H9Wr2gIbZ-val"></td>
                        <td id="p5g2V3x0lnV-VHWCFFYJNGD-val"></td>
                        <td id="p5g2V3x0lnV-Il1VVD3QC7N-val"></td>
                        <td id="p5g2V3x0lnV-AmCZVSsjn9k-val"></td>
                        <td id="p5g2V3x0lnV-l3zvVwrAkRb-val"></td>
                        <td id="p5g2V3x0lnV-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(g) Mumps</td>
                        <td id="Sone1zgfkb4-WvAOHVRWa9i-val"></td>
                        <td id="Sone1zgfkb4-rb3o0mNdpP1-val"></td>
                        <td id="Sone1zgfkb4-jtWWIUDocN2-val"></td>
                        <td id="Sone1zgfkb4-YUnMH4DTVR4-val"></td>
                        <td id="Sone1zgfkb4-PU8a0NPAzVe-val"></td>
                        <td id="Sone1zgfkb4-oM4ey1cwpNA-val"></td>
                        <td id="Sone1zgfkb4-WnrReHFwr1M-val"></td>
                        <td id="Sone1zgfkb4-y010rBTrvro-val"></td>
                        <td id="Sone1zgfkb4-u7H9Wr2gIbZ-val"></td>
                        <td id="Sone1zgfkb4-VHWCFFYJNGD-val"></td>
                        <td id="Sone1zgfkb4-Il1VVD3QC7N-val"></td>
                        <td id="Sone1zgfkb4-AmCZVSsjn9k-val"></td>
                        <td id="Sone1zgfkb4-l3zvVwrAkRb-val"></td>
                        <td id="Sone1zgfkb4-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(h) Scabies</td>
                        <td id="Dm2DVJgxVb8-WvAOHVRWa9i-val"></td>
                        <td id="Dm2DVJgxVb8-rb3o0mNdpP1-val"></td>
                        <td id="Dm2DVJgxVb8-jtWWIUDocN2-val"></td>
                        <td id="Dm2DVJgxVb8-YUnMH4DTVR4-val"></td>
                        <td id="Dm2DVJgxVb8-PU8a0NPAzVe-val"></td>
                        <td id="Dm2DVJgxVb8-oM4ey1cwpNA-val"></td>
                        <td id="Dm2DVJgxVb8-WnrReHFwr1M-val"></td>
                        <td id="Dm2DVJgxVb8-y010rBTrvro-val"></td>
                        <td id="Dm2DVJgxVb8-u7H9Wr2gIbZ-val"></td>
                        <td id="Dm2DVJgxVb8-VHWCFFYJNGD-val"></td>
                        <td id="Dm2DVJgxVb8-Il1VVD3QC7N-val"></td>
                        <td id="Dm2DVJgxVb8-AmCZVSsjn9k-val"></td>
                        <td id="Dm2DVJgxVb8-l3zvVwrAkRb-val"></td>
                        <td id="Dm2DVJgxVb8-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(i)Other skin condition</td>
                        <td id="ukCqGz9Ko9t-WvAOHVRWa9i-val"></td>
                        <td id="ukCqGz9Ko9t-rb3o0mNdpP1-val"></td>
                        <td id="ukCqGz9Ko9t-jtWWIUDocN2-val"></td>
                        <td id="ukCqGz9Ko9t-YUnMH4DTVR4-val"></td>
                        <td id="ukCqGz9Ko9t-PU8a0NPAzVe-val"></td>
                        <td id="ukCqGz9Ko9t-oM4ey1cwpNA-val"></td>
                        <td id="ukCqGz9Ko9t-WnrReHFwr1M-val"></td>
                        <td id="ukCqGz9Ko9t-y010rBTrvro-val"></td>
                        <td id="ukCqGz9Ko9t-u7H9Wr2gIbZ-val"></td>
                        <td id="ukCqGz9Ko9t-VHWCFFYJNGD-val"></td>
                        <td id="ukCqGz9Ko9t-Il1VVD3QC7N-val"></td>
                        <td id="ukCqGz9Ko9t-AmCZVSsjn9k-val"></td>
                        <td id="ukCqGz9Ko9t-l3zvVwrAkRb-val"></td>
                        <td id="ukCqGz9Ko9t-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(j) Other</td>
                        <td id="iJ5cX1niL4o-WvAOHVRWa9i-val"></td>
                        <td id="iJ5cX1niL4o-rb3o0mNdpP1-val"></td>
                        <td id="iJ5cX1niL4o-jtWWIUDocN2-val"></td>
                        <td id="iJ5cX1niL4o-YUnMH4DTVR4-val"></td>
                        <td id="iJ5cX1niL4o-PU8a0NPAzVe-val"></td>
                        <td id="iJ5cX1niL4o-oM4ey1cwpNA-val"></td>
                        <td id="iJ5cX1niL4o-WnrReHFwr1M-val"></td>
                        <td id="iJ5cX1niL4o-y010rBTrvro-val"></td>
                        <td id="iJ5cX1niL4o-u7H9Wr2gIbZ-val"></td>
                        <td id="iJ5cX1niL4o-VHWCFFYJNGD-val"></td>
                        <td id="iJ5cX1niL4o-Il1VVD3QC7N-val"></td>
                        <td id="iJ5cX1niL4o-AmCZVSsjn9k-val"></td>
                        <td id="iJ5cX1niL4o-l3zvVwrAkRb-val"></td>
                        <td id="iJ5cX1niL4o-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">5.9</td>
                        <td className="title">Dressings</td>
                        <td id="qSNKz5tVCVk-WvAOHVRWa9i-val"></td>
                        <td id="qSNKz5tVCVk-rb3o0mNdpP1-val"></td>
                        <td id="qSNKz5tVCVk-jtWWIUDocN2-val"></td>
                        <td id="qSNKz5tVCVk-YUnMH4DTVR4-val"></td>
                        <td id="qSNKz5tVCVk-PU8a0NPAzVe-val"></td>
                        <td id="qSNKz5tVCVk-oM4ey1cwpNA-val"></td>
                        <td id="qSNKz5tVCVk-WnrReHFwr1M-val"></td>
                        <td id="qSNKz5tVCVk-y010rBTrvro-val"></td>
                        <td id="qSNKz5tVCVk-u7H9Wr2gIbZ-val"></td>
                        <td id="qSNKz5tVCVk-VHWCFFYJNGD-val"></td>
                        <td id="qSNKz5tVCVk-Il1VVD3QC7N-val"></td>
                        <td id="qSNKz5tVCVk-AmCZVSsjn9k-val"></td>
                        <td id="qSNKz5tVCVk-l3zvVwrAkRb-val"></td>
                        <td id="qSNKz5tVCVk-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">5.10</td>
                        <td className="title">Dental Service</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Children examined 1st time this year</td>
                        <td id="KdygeTBFO0B-WvAOHVRWa9i-val"></td>
                        <td id="KdygeTBFO0B-rb3o0mNdpP1-val"></td>
                        <td id="KdygeTBFO0B-jtWWIUDocN2-val"></td>
                        <td id="KdygeTBFO0B-YUnMH4DTVR4-val"></td>
                        <td id="KdygeTBFO0B-PU8a0NPAzVe-val"></td>
                        <td id="KdygeTBFO0B-oM4ey1cwpNA-val"></td>
                        <td id="KdygeTBFO0B-WnrReHFwr1M-val"></td>
                        <td id="KdygeTBFO0B-y010rBTrvro-val"></td>
                        <td id="KdygeTBFO0B-u7H9Wr2gIbZ-val"></td>
                        <td id="KdygeTBFO0B-VHWCFFYJNGD-val"></td>
                        <td id="KdygeTBFO0B-Il1VVD3QC7N-val"></td>
                        <td id="KdygeTBFO0B-AmCZVSsjn9k-val"></td>
                        <td id="KdygeTBFO0B-l3zvVwrAkRb-val"></td>
                        <td id="KdygeTBFO0B-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Of those with problem detected 1st time this year</td>
                        <td id="kAfIuVTAYAN-WvAOHVRWa9i-val"></td>
                        <td id="kAfIuVTAYAN-rb3o0mNdpP1-val"></td>
                        <td id="kAfIuVTAYAN-jtWWIUDocN2-val"></td>
                        <td id="kAfIuVTAYAN-YUnMH4DTVR4-val"></td>
                        <td id="kAfIuVTAYAN-PU8a0NPAzVe-val"></td>
                        <td id="kAfIuVTAYAN-oM4ey1cwpNA-val"></td>
                        <td id="kAfIuVTAYAN-WnrReHFwr1M-val"></td>
                        <td id="kAfIuVTAYAN-y010rBTrvro-val"></td>
                        <td id="kAfIuVTAYAN-u7H9Wr2gIbZ-val"></td>
                        <td id="kAfIuVTAYAN-VHWCFFYJNGD-val"></td>
                        <td id="kAfIuVTAYAN-Il1VVD3QC7N-val"></td>
                        <td id="kAfIuVTAYAN-AmCZVSsjn9k-val"></td>
                        <td id="kAfIuVTAYAN-l3zvVwrAkRb-val"></td>
                        <td id="kAfIuVTAYAN-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Of those treated first time this year</td>
                        <td id="yZDM0u9Fyqr-WvAOHVRWa9i-val"></td>
                        <td id="yZDM0u9Fyqr-rb3o0mNdpP1-val"></td>
                        <td id="yZDM0u9Fyqr-jtWWIUDocN2-val"></td>
                        <td id="yZDM0u9Fyqr-YUnMH4DTVR4-val"></td>
                        <td id="yZDM0u9Fyqr-PU8a0NPAzVe-val"></td>
                        <td id="yZDM0u9Fyqr-oM4ey1cwpNA-val"></td>
                        <td id="yZDM0u9Fyqr-WnrReHFwr1M-val"></td>
                        <td id="yZDM0u9Fyqr-y010rBTrvro-val"></td>
                        <td id="yZDM0u9Fyqr-u7H9Wr2gIbZ-val"></td>
                        <td id="yZDM0u9Fyqr-VHWCFFYJNGD-val"></td>
                        <td id="yZDM0u9Fyqr-Il1VVD3QC7N-val"></td>
                        <td id="yZDM0u9Fyqr-AmCZVSsjn9k-val"></td>
                        <td id="yZDM0u9Fyqr-l3zvVwrAkRb-val"></td>
                        <td id="yZDM0u9Fyqr-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">5.11</td>
                        <td className="title">School Health Services</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total number of school entrants in School in area*</td>
                        <td id="j61qkQirWcK-WvAOHVRWa9i-val"></td>
                        <td id="j61qkQirWcK-rb3o0mNdpP1-val"></td>
                        <td id="j61qkQirWcK-jtWWIUDocN2-val"></td>
                        <td id="j61qkQirWcK-YUnMH4DTVR4-val"></td>
                        <td id="j61qkQirWcK-PU8a0NPAzVe-val"></td>
                        <td id="j61qkQirWcK-oM4ey1cwpNA-val"></td>
                        <td id="j61qkQirWcK-WnrReHFwr1M-val"></td>
                        <td id="j61qkQirWcK-y010rBTrvro-val"></td>
                        <td id="j61qkQirWcK-u7H9Wr2gIbZ-val"></td>
                        <td id="j61qkQirWcK-VHWCFFYJNGD-val"></td>
                        <td id="j61qkQirWcK-Il1VVD3QC7N-val"></td>
                        <td id="j61qkQirWcK-AmCZVSsjn9k-val"></td>
                        <td id="j61qkQirWcK-l3zvVwrAkRb-val"></td>
                        <td id="j61qkQirWcK-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>School entrants visited in schools first time this school year</td>
                        <td id="kJgArTqRqhi-WvAOHVRWa9i-val"></td>
                        <td id="kJgArTqRqhi-rb3o0mNdpP1-val"></td>
                        <td id="kJgArTqRqhi-jtWWIUDocN2-val"></td>
                        <td id="kJgArTqRqhi-YUnMH4DTVR4-val"></td>
                        <td id="kJgArTqRqhi-PU8a0NPAzVe-val"></td>
                        <td id="kJgArTqRqhi-oM4ey1cwpNA-val"></td>
                        <td id="kJgArTqRqhi-WnrReHFwr1M-val"></td>
                        <td id="kJgArTqRqhi-y010rBTrvro-val"></td>
                        <td id="kJgArTqRqhi-u7H9Wr2gIbZ-val"></td>
                        <td id="kJgArTqRqhi-VHWCFFYJNGD-val"></td>
                        <td id="kJgArTqRqhi-Il1VVD3QC7N-val"></td>
                        <td id="kJgArTqRqhi-AmCZVSsjn9k-val"></td>
                        <td id="kJgArTqRqhi-l3zvVwrAkRb-val"></td>
                        <td id="kJgArTqRqhi-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>School entrants checked first time for immunization status</td>
                        <td id="DGfGkLniHqX-WvAOHVRWa9i-val"></td>
                        <td id="DGfGkLniHqX-rb3o0mNdpP1-val"></td>
                        <td id="DGfGkLniHqX-jtWWIUDocN2-val"></td>
                        <td id="DGfGkLniHqX-YUnMH4DTVR4-val"></td>
                        <td id="DGfGkLniHqX-PU8a0NPAzVe-val"></td>
                        <td id="DGfGkLniHqX-oM4ey1cwpNA-val"></td>
                        <td id="DGfGkLniHqX-WnrReHFwr1M-val"></td>
                        <td id="DGfGkLniHqX-y010rBTrvro-val"></td>
                        <td id="DGfGkLniHqX-u7H9Wr2gIbZ-val"></td>
                        <td id="DGfGkLniHqX-VHWCFFYJNGD-val"></td>
                        <td id="DGfGkLniHqX-Il1VVD3QC7N-val"></td>
                        <td id="DGfGkLniHqX-AmCZVSsjn9k-val"></td>
                        <td id="DGfGkLniHqX-l3zvVwrAkRb-val"></td>
                        <td id="DGfGkLniHqX-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Of those with complete immunization prior to school entrance</td>
                        <td id="QlpLqW8a6m6-WvAOHVRWa9i-val"></td>
                        <td id="QlpLqW8a6m6-rb3o0mNdpP1-val"></td>
                        <td id="QlpLqW8a6m6-jtWWIUDocN2-val"></td>
                        <td id="QlpLqW8a6m6-YUnMH4DTVR4-val"></td>
                        <td id="QlpLqW8a6m6-PU8a0NPAzVe-val"></td>
                        <td id="QlpLqW8a6m6-oM4ey1cwpNA-val"></td>
                        <td id="QlpLqW8a6m6-WnrReHFwr1M-val"></td>
                        <td id="QlpLqW8a6m6-y010rBTrvro-val"></td>
                        <td id="QlpLqW8a6m6-u7H9Wr2gIbZ-val"></td>
                        <td id="QlpLqW8a6m6-VHWCFFYJNGD-val"></td>
                        <td id="QlpLqW8a6m6-Il1VVD3QC7N-val"></td>
                        <td id="QlpLqW8a6m6-AmCZVSsjn9k-val"></td>
                        <td id="QlpLqW8a6m6-l3zvVwrAkRb-val"></td>
                        <td id="QlpLqW8a6m6-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5.12</td>
                        <td>Children referred to Hospital or other specialist</td>
                        <td id="Als1xfV6wtB-WvAOHVRWa9i-val"></td>
                        <td id="Als1xfV6wtB-rb3o0mNdpP1-val"></td>
                        <td id="Als1xfV6wtB-jtWWIUDocN2-val"></td>
                        <td id="Als1xfV6wtB-YUnMH4DTVR4-val"></td>
                        <td id="Als1xfV6wtB-PU8a0NPAzVe-val"></td>
                        <td id="Als1xfV6wtB-oM4ey1cwpNA-val"></td>
                        <td id="Als1xfV6wtB-WnrReHFwr1M-val"></td>
                        <td id="Als1xfV6wtB-y010rBTrvro-val"></td>
                        <td id="Als1xfV6wtB-u7H9Wr2gIbZ-val"></td>
                        <td id="Als1xfV6wtB-VHWCFFYJNGD-val"></td>
                        <td id="Als1xfV6wtB-Il1VVD3QC7N-val"></td>
                        <td id="Als1xfV6wtB-AmCZVSsjn9k-val"></td>
                        <td id="Als1xfV6wtB-l3zvVwrAkRb-val"></td>
                        <td id="Als1xfV6wtB-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">5.13</td>
                        <td className="title">Home visits:</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(a) 1st visit this year</td>
                        <td id="p8wmAGAMSps-WvAOHVRWa9i-val"></td>
                        <td id="p8wmAGAMSps-rb3o0mNdpP1-val"></td>
                        <td id="p8wmAGAMSps-jtWWIUDocN2-val"></td>
                        <td id="p8wmAGAMSps-YUnMH4DTVR4-val"></td>
                        <td id="p8wmAGAMSps-PU8a0NPAzVe-val"></td>
                        <td id="p8wmAGAMSps-oM4ey1cwpNA-val"></td>
                        <td id="p8wmAGAMSps-WnrReHFwr1M-val"></td>
                        <td id="p8wmAGAMSps-y010rBTrvro-val"></td>
                        <td id="p8wmAGAMSps-u7H9Wr2gIbZ-val"></td>
                        <td id="p8wmAGAMSps-VHWCFFYJNGD-val"></td>
                        <td id="p8wmAGAMSps-Il1VVD3QC7N-val"></td>
                        <td id="p8wmAGAMSps-AmCZVSsjn9k-val"></td>
                        <td id="p8wmAGAMSps-l3zvVwrAkRb-val"></td>
                        <td id="p8wmAGAMSps-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(b)Return visits</td>
                        <td id="EgW1KQhJjwJ-WvAOHVRWa9i-val"></td>
                        <td id="EgW1KQhJjwJ-rb3o0mNdpP1-val"></td>
                        <td id="EgW1KQhJjwJ-jtWWIUDocN2-val"></td>
                        <td id="EgW1KQhJjwJ-YUnMH4DTVR4-val"></td>
                        <td id="EgW1KQhJjwJ-PU8a0NPAzVe-val"></td>
                        <td id="EgW1KQhJjwJ-oM4ey1cwpNA-val"></td>
                        <td id="EgW1KQhJjwJ-WnrReHFwr1M-val"></td>
                        <td id="EgW1KQhJjwJ-y010rBTrvro-val"></td>
                        <td id="EgW1KQhJjwJ-u7H9Wr2gIbZ-val"></td>
                        <td id="EgW1KQhJjwJ-VHWCFFYJNGD-val"></td>
                        <td id="EgW1KQhJjwJ-Il1VVD3QC7N-val"></td>
                        <td id="EgW1KQhJjwJ-AmCZVSsjn9k-val"></td>
                        <td id="EgW1KQhJjwJ-l3zvVwrAkRb-val"></td>
                        <td id="EgW1KQhJjwJ-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(c) Total home visits</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total visit home &amp; clinic</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">5.14</td>
                        <td className="title">Dermatology Services</td>
                        <td id="yyVr0LxyCR1-WvAOHVRWa9i-val"></td>
                        <td id="yyVr0LxyCR1-rb3o0mNdpP1-val"></td>
                        <td id="yyVr0LxyCR1-jtWWIUDocN2-val"></td>
                        <td id="yyVr0LxyCR1-YUnMH4DTVR4-val"></td>
                        <td id="yyVr0LxyCR1-PU8a0NPAzVe-val"></td>
                        <td id="yyVr0LxyCR1-oM4ey1cwpNA-val"></td>
                        <td id="yyVr0LxyCR1-WnrReHFwr1M-val"></td>
                        <td id="yyVr0LxyCR1-y010rBTrvro-val"></td>
                        <td id="yyVr0LxyCR1-u7H9Wr2gIbZ-val"></td>
                        <td id="yyVr0LxyCR1-VHWCFFYJNGD-val"></td>
                        <td id="yyVr0LxyCR1-Il1VVD3QC7N-val"></td>
                        <td id="yyVr0LxyCR1-AmCZVSsjn9k-val"></td>
                        <td id="yyVr0LxyCR1-l3zvVwrAkRb-val"></td>
                        <td id="yyVr0LxyCR1-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5.15</td>
                        <td>Child Health Clinic Sessions</td>
                        <td id="wabwJ8qisMa-WvAOHVRWa9i-val"></td>
                        <td id="wabwJ8qisMa-rb3o0mNdpP1-val"></td>
                        <td id="wabwJ8qisMa-jtWWIUDocN2-val"></td>
                        <td id="wabwJ8qisMa-YUnMH4DTVR4-val"></td>
                        <td id="wabwJ8qisMa-PU8a0NPAzVe-val"></td>
                        <td id="wabwJ8qisMa-oM4ey1cwpNA-val"></td>
                        <td id="wabwJ8qisMa-WnrReHFwr1M-val"></td>
                        <td id="wabwJ8qisMa-y010rBTrvro-val"></td>
                        <td id="wabwJ8qisMa-u7H9Wr2gIbZ-val"></td>
                        <td id="wabwJ8qisMa-VHWCFFYJNGD-val"></td>
                        <td id="wabwJ8qisMa-Il1VVD3QC7N-val"></td>
                        <td id="wabwJ8qisMa-AmCZVSsjn9k-val"></td>
                        <td id="wabwJ8qisMa-l3zvVwrAkRb-val"></td>
                        <td id="wabwJ8qisMa-gchs0fH3Ppq-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>)
    }
}

