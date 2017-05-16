import React from "react";
import Fetch from "../model/Fetch";
import config from "../model/config.json";

export default class AdultAndElderlyServicesReport extends React.Component {
    constructor(props) {
        super(props);
        this.css = `table{border-collapse:collapse;width:99%}table,td{padding:0!important;text-align:center;border:1px solid #BDBDBD}table tr:nth-child(1){color:#fff;font-weight:700;text-align:center;font-size:20px;background-color:#66BB6A}table tr:nth-child(2),table tr:nth-child(3){text-align:center;font-weight:700;background-color:#FFD54F}table tr:nth-child(3) td{text-align:center;width:3%}table tr:nth-child(n+4) td:nth-child(1),table tr:nth-child(n+4) td:nth-child(2){text-align:left;background-color:#B2EBF2}.title{font-weight:700}input{width:70%!important}`;
        this.fetch = new Fetch();
    }

    loadData = () => {
        $("td[id*=val]").each((index, element) => {
            $(element).html("");
        });

        if (this.props.param.hasOwnProperty("ouId") === false) {
            return;
        }

        this.api = `${config.baseUrl}/api/analytics.json?dimension=dx:zqbIKiYNn34;WV2kwuPiBpb;pFM2zFDC8jL;FGTwcqQdOtx;VOANrNBbe7B;JrM24pszPP5;WfeuqGop9QL;MVbBUEMPIM4;dj7rSmWr9V9;LtyMahWgMEq;BGKsCWcp3g1;y4gqJ3vVYzS;oNSlfBL46pi;aejgxHXRlsI;DT1t7BwWa1E;gUsE8WEhSZS;rwBA50wlOGg;JkqA7jRpY7n;ALf15Z5Ph4r;MwZ9BEJ847q;qSPxFD1BS9t;OMyj6s0tvP5;dzS2nJXf5Ky;LeyLjX1joBb;DmlhK3s3SwR;CKQSWVtePBD;AgLXsfGUemw;hkJtzwqY25K;DuY7D6b6p1Q;r856SQ1996m;vi9Cm2ILqXw;hOazk6aRnWC;OkS0yqV7KG9;BD6knTESyEi;iLVPuUXghlE;fk0qU1WDmJj;iM6R2Qcnvaj;UjvTu2iyWOE;OFYDWcGq84R;hl04aeAllRC;nTOCtNBP4jS;r02ylstU2EU;Ysh5ItxODrw;oArXL7CAwTR&dimension=co&filter=pe:${this.props.param.pe}&filter=ou:${this.props.param.ouId}`;
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
                        <td colSpan="26">SERVICES FOR ADULTS AND ELDERLY<br/>{this.props.param.ouName}<br/>{this.props.param.peText}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" rowSpan="2">SERVICE</td>
                        <td colSpan="2">20-24</td>
                        <td colSpan="2">25-29</td>
                        <td colSpan="2">30-34</td>
                        <td colSpan="2">35-39</td>
                        <td colSpan="2">40-44</td>
                        <td colSpan="2">45-49</td>
                        <td colSpan="2">50-54</td>
                        <td colSpan="2">55-59</td>
                        <td colSpan="2">60-64</td>
                        <td colSpan="2">65+</td>
                        <td colSpan="2">Not Known</td>
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
                        <td className="title">7.1</td>
                        <td className="title">First clinic visit this year</td>
                        <td id="OkS0yqV7KG9-PEeRslZLFyQ-val"></td>
                        <td id="OkS0yqV7KG9-SVXVVsrMtFT-val"></td>
                        <td id="OkS0yqV7KG9-QE4cD8Q5eH1-val"></td>
                        <td id="OkS0yqV7KG9-uk1seOqA2kY-val"></td>
                        <td id="OkS0yqV7KG9-j9xBW1OhdPL-val"></td>
                        <td id="OkS0yqV7KG9-H0jVoZjaEQc-val"></td>
                        <td id="OkS0yqV7KG9-rwvk7W12oqJ-val"></td>
                        <td id="OkS0yqV7KG9-dCCHGs2tgzl-val"></td>
                        <td id="OkS0yqV7KG9-qut5WjTBNT3-val"></td>
                        <td id="OkS0yqV7KG9-GRLp8SxoHM5-val"></td>
                        <td id="OkS0yqV7KG9-jjGiYe6GtY1-val"></td>
                        <td id="OkS0yqV7KG9-NqLRdsWplFK-val"></td>
                        <td id="OkS0yqV7KG9-yC7jMym8ru6-val"></td>
                        <td id="OkS0yqV7KG9-qATls8jUAlx-val"></td>
                        <td id="OkS0yqV7KG9-VV2rnyQQL5V-val"></td>
                        <td id="OkS0yqV7KG9-zqrvur8vobZ-val"></td>
                        <td id="OkS0yqV7KG9-kxpsiz3cDc3-val"></td>
                        <td id="OkS0yqV7KG9-HNaWlJYHEbU-val"></td>
                        <td id="OkS0yqV7KG9-e6SJ007Vl2n-val"></td>
                        <td id="OkS0yqV7KG9-HBIPIOr5OPF-val"></td>
                        <td id="OkS0yqV7KG9-nkPK7UlaIAK-val"></td>
                        <td id="OkS0yqV7KG9-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">7.2(a)</td>
                        <td className="title">Clients with problems 1st reported/detected this year.</td>
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
                        <td>Diabetes</td>
                        <td id="MwZ9BEJ847q-PEeRslZLFyQ-val"></td>
                        <td id="MwZ9BEJ847q-SVXVVsrMtFT-val"></td>
                        <td id="MwZ9BEJ847q-QE4cD8Q5eH1-val"></td>
                        <td id="MwZ9BEJ847q-uk1seOqA2kY-val"></td>
                        <td id="MwZ9BEJ847q-j9xBW1OhdPL-val"></td>
                        <td id="MwZ9BEJ847q-H0jVoZjaEQc-val"></td>
                        <td id="MwZ9BEJ847q-rwvk7W12oqJ-val"></td>
                        <td id="MwZ9BEJ847q-dCCHGs2tgzl-val"></td>
                        <td id="MwZ9BEJ847q-qut5WjTBNT3-val"></td>
                        <td id="MwZ9BEJ847q-GRLp8SxoHM5-val"></td>
                        <td id="MwZ9BEJ847q-jjGiYe6GtY1-val"></td>
                        <td id="MwZ9BEJ847q-NqLRdsWplFK-val"></td>
                        <td id="MwZ9BEJ847q-yC7jMym8ru6-val"></td>
                        <td id="MwZ9BEJ847q-qATls8jUAlx-val"></td>
                        <td id="MwZ9BEJ847q-VV2rnyQQL5V-val"></td>
                        <td id="MwZ9BEJ847q-zqrvur8vobZ-val"></td>
                        <td id="MwZ9BEJ847q-kxpsiz3cDc3-val"></td>
                        <td id="MwZ9BEJ847q-HNaWlJYHEbU-val"></td>
                        <td id="MwZ9BEJ847q-e6SJ007Vl2n-val"></td>
                        <td id="MwZ9BEJ847q-HBIPIOr5OPF-val"></td>
                        <td id="MwZ9BEJ847q-nkPK7UlaIAK-val"></td>
                        <td id="MwZ9BEJ847q-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Obesity</td>
                        <td id="LeyLjX1joBb-PEeRslZLFyQ-val"></td>
                        <td id="LeyLjX1joBb-SVXVVsrMtFT-val"></td>
                        <td id="LeyLjX1joBb-QE4cD8Q5eH1-val"></td>
                        <td id="LeyLjX1joBb-uk1seOqA2kY-val"></td>
                        <td id="LeyLjX1joBb-j9xBW1OhdPL-val"></td>
                        <td id="LeyLjX1joBb-H0jVoZjaEQc-val"></td>
                        <td id="LeyLjX1joBb-rwvk7W12oqJ-val"></td>
                        <td id="LeyLjX1joBb-dCCHGs2tgzl-val"></td>
                        <td id="LeyLjX1joBb-qut5WjTBNT3-val"></td>
                        <td id="LeyLjX1joBb-GRLp8SxoHM5-val"></td>
                        <td id="LeyLjX1joBb-jjGiYe6GtY1-val"></td>
                        <td id="LeyLjX1joBb-NqLRdsWplFK-val"></td>
                        <td id="LeyLjX1joBb-yC7jMym8ru6-val"></td>
                        <td id="LeyLjX1joBb-qATls8jUAlx-val"></td>
                        <td id="LeyLjX1joBb-VV2rnyQQL5V-val"></td>
                        <td id="LeyLjX1joBb-zqrvur8vobZ-val"></td>
                        <td id="LeyLjX1joBb-kxpsiz3cDc3-val"></td>
                        <td id="LeyLjX1joBb-HNaWlJYHEbU-val"></td>
                        <td id="LeyLjX1joBb-e6SJ007Vl2n-val"></td>
                        <td id="LeyLjX1joBb-HBIPIOr5OPF-val"></td>
                        <td id="LeyLjX1joBb-nkPK7UlaIAK-val"></td>
                        <td id="LeyLjX1joBb-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Hypertension</td>
                        <td id="OMyj6s0tvP5-PEeRslZLFyQ-val"></td>
                        <td id="OMyj6s0tvP5-SVXVVsrMtFT-val"></td>
                        <td id="OMyj6s0tvP5-QE4cD8Q5eH1-val"></td>
                        <td id="OMyj6s0tvP5-uk1seOqA2kY-val"></td>
                        <td id="OMyj6s0tvP5-j9xBW1OhdPL-val"></td>
                        <td id="OMyj6s0tvP5-H0jVoZjaEQc-val"></td>
                        <td id="OMyj6s0tvP5-rwvk7W12oqJ-val"></td>
                        <td id="OMyj6s0tvP5-dCCHGs2tgzl-val"></td>
                        <td id="OMyj6s0tvP5-qut5WjTBNT3-val"></td>
                        <td id="OMyj6s0tvP5-GRLp8SxoHM5-val"></td>
                        <td id="OMyj6s0tvP5-jjGiYe6GtY1-val"></td>
                        <td id="OMyj6s0tvP5-NqLRdsWplFK-val"></td>
                        <td id="OMyj6s0tvP5-yC7jMym8ru6-val"></td>
                        <td id="OMyj6s0tvP5-qATls8jUAlx-val"></td>
                        <td id="OMyj6s0tvP5-VV2rnyQQL5V-val"></td>
                        <td id="OMyj6s0tvP5-zqrvur8vobZ-val"></td>
                        <td id="OMyj6s0tvP5-kxpsiz3cDc3-val"></td>
                        <td id="OMyj6s0tvP5-HNaWlJYHEbU-val"></td>
                        <td id="OMyj6s0tvP5-e6SJ007Vl2n-val"></td>
                        <td id="OMyj6s0tvP5-HBIPIOr5OPF-val"></td>
                        <td id="OMyj6s0tvP5-nkPK7UlaIAK-val"></td>
                        <td id="OMyj6s0tvP5-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>URTI</td>
                        <td id="rwBA50wlOGg-PEeRslZLFyQ-val"></td>
                        <td id="rwBA50wlOGg-SVXVVsrMtFT-val"></td>
                        <td id="rwBA50wlOGg-QE4cD8Q5eH1-val"></td>
                        <td id="rwBA50wlOGg-uk1seOqA2kY-val"></td>
                        <td id="rwBA50wlOGg-j9xBW1OhdPL-val"></td>
                        <td id="rwBA50wlOGg-H0jVoZjaEQc-val"></td>
                        <td id="rwBA50wlOGg-rwvk7W12oqJ-val"></td>
                        <td id="rwBA50wlOGg-dCCHGs2tgzl-val"></td>
                        <td id="rwBA50wlOGg-qut5WjTBNT3-val"></td>
                        <td id="rwBA50wlOGg-GRLp8SxoHM5-val"></td>
                        <td id="rwBA50wlOGg-jjGiYe6GtY1-val"></td>
                        <td id="rwBA50wlOGg-NqLRdsWplFK-val"></td>
                        <td id="rwBA50wlOGg-yC7jMym8ru6-val"></td>
                        <td id="rwBA50wlOGg-qATls8jUAlx-val"></td>
                        <td id="rwBA50wlOGg-VV2rnyQQL5V-val"></td>
                        <td id="rwBA50wlOGg-zqrvur8vobZ-val"></td>
                        <td id="rwBA50wlOGg-kxpsiz3cDc3-val"></td>
                        <td id="rwBA50wlOGg-HNaWlJYHEbU-val"></td>
                        <td id="rwBA50wlOGg-e6SJ007Vl2n-val"></td>
                        <td id="rwBA50wlOGg-HBIPIOr5OPF-val"></td>
                        <td id="rwBA50wlOGg-nkPK7UlaIAK-val"></td>
                        <td id="rwBA50wlOGg-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Urinary Tract Infection</td>
                        <td id="r856SQ1996m-PEeRslZLFyQ-val"></td>
                        <td id="r856SQ1996m-SVXVVsrMtFT-val"></td>
                        <td id="r856SQ1996m-QE4cD8Q5eH1-val"></td>
                        <td id="r856SQ1996m-uk1seOqA2kY-val"></td>
                        <td id="r856SQ1996m-j9xBW1OhdPL-val"></td>
                        <td id="r856SQ1996m-H0jVoZjaEQc-val"></td>
                        <td id="r856SQ1996m-rwvk7W12oqJ-val"></td>
                        <td id="r856SQ1996m-dCCHGs2tgzl-val"></td>
                        <td id="r856SQ1996m-qut5WjTBNT3-val"></td>
                        <td id="r856SQ1996m-GRLp8SxoHM5-val"></td>
                        <td id="r856SQ1996m-jjGiYe6GtY1-val"></td>
                        <td id="r856SQ1996m-NqLRdsWplFK-val"></td>
                        <td id="r856SQ1996m-yC7jMym8ru6-val"></td>
                        <td id="r856SQ1996m-qATls8jUAlx-val"></td>
                        <td id="r856SQ1996m-VV2rnyQQL5V-val"></td>
                        <td id="r856SQ1996m-zqrvur8vobZ-val"></td>
                        <td id="r856SQ1996m-kxpsiz3cDc3-val"></td>
                        <td id="r856SQ1996m-HNaWlJYHEbU-val"></td>
                        <td id="r856SQ1996m-e6SJ007Vl2n-val"></td>
                        <td id="r856SQ1996m-HBIPIOr5OPF-val"></td>
                        <td id="r856SQ1996m-nkPK7UlaIAK-val"></td>
                        <td id="r856SQ1996m-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Eye Infection</td>
                        <td id="qSPxFD1BS9t-PEeRslZLFyQ-val"></td>
                        <td id="qSPxFD1BS9t-SVXVVsrMtFT-val"></td>
                        <td id="qSPxFD1BS9t-QE4cD8Q5eH1-val"></td>
                        <td id="qSPxFD1BS9t-uk1seOqA2kY-val"></td>
                        <td id="qSPxFD1BS9t-j9xBW1OhdPL-val"></td>
                        <td id="qSPxFD1BS9t-H0jVoZjaEQc-val"></td>
                        <td id="qSPxFD1BS9t-rwvk7W12oqJ-val"></td>
                        <td id="qSPxFD1BS9t-dCCHGs2tgzl-val"></td>
                        <td id="qSPxFD1BS9t-qut5WjTBNT3-val"></td>
                        <td id="qSPxFD1BS9t-GRLp8SxoHM5-val"></td>
                        <td id="qSPxFD1BS9t-jjGiYe6GtY1-val"></td>
                        <td id="qSPxFD1BS9t-NqLRdsWplFK-val"></td>
                        <td id="qSPxFD1BS9t-yC7jMym8ru6-val"></td>
                        <td id="qSPxFD1BS9t-qATls8jUAlx-val"></td>
                        <td id="qSPxFD1BS9t-VV2rnyQQL5V-val"></td>
                        <td id="qSPxFD1BS9t-zqrvur8vobZ-val"></td>
                        <td id="qSPxFD1BS9t-kxpsiz3cDc3-val"></td>
                        <td id="qSPxFD1BS9t-HNaWlJYHEbU-val"></td>
                        <td id="qSPxFD1BS9t-e6SJ007Vl2n-val"></td>
                        <td id="qSPxFD1BS9t-HBIPIOr5OPF-val"></td>
                        <td id="qSPxFD1BS9t-nkPK7UlaIAK-val"></td>
                        <td id="qSPxFD1BS9t-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Arthritis</td>
                        <td id="ALf15Z5Ph4r-PEeRslZLFyQ-val"></td>
                        <td id="ALf15Z5Ph4r-SVXVVsrMtFT-val"></td>
                        <td id="ALf15Z5Ph4r-QE4cD8Q5eH1-val"></td>
                        <td id="ALf15Z5Ph4r-uk1seOqA2kY-val"></td>
                        <td id="ALf15Z5Ph4r-j9xBW1OhdPL-val"></td>
                        <td id="ALf15Z5Ph4r-H0jVoZjaEQc-val"></td>
                        <td id="ALf15Z5Ph4r-rwvk7W12oqJ-val"></td>
                        <td id="ALf15Z5Ph4r-dCCHGs2tgzl-val"></td>
                        <td id="ALf15Z5Ph4r-qut5WjTBNT3-val"></td>
                        <td id="ALf15Z5Ph4r-GRLp8SxoHM5-val"></td>
                        <td id="ALf15Z5Ph4r-jjGiYe6GtY1-val"></td>
                        <td id="ALf15Z5Ph4r-NqLRdsWplFK-val"></td>
                        <td id="ALf15Z5Ph4r-yC7jMym8ru6-val"></td>
                        <td id="ALf15Z5Ph4r-qATls8jUAlx-val"></td>
                        <td id="ALf15Z5Ph4r-VV2rnyQQL5V-val"></td>
                        <td id="ALf15Z5Ph4r-zqrvur8vobZ-val"></td>
                        <td id="ALf15Z5Ph4r-kxpsiz3cDc3-val"></td>
                        <td id="ALf15Z5Ph4r-HNaWlJYHEbU-val"></td>
                        <td id="ALf15Z5Ph4r-e6SJ007Vl2n-val"></td>
                        <td id="ALf15Z5Ph4r-HBIPIOr5OPF-val"></td>
                        <td id="ALf15Z5Ph4r-nkPK7UlaIAK-val"></td>
                        <td id="ALf15Z5Ph4r-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Alcoholism</td>
                        <td id="JkqA7jRpY7n-PEeRslZLFyQ-val"></td>
                        <td id="JkqA7jRpY7n-SVXVVsrMtFT-val"></td>
                        <td id="JkqA7jRpY7n-QE4cD8Q5eH1-val"></td>
                        <td id="JkqA7jRpY7n-uk1seOqA2kY-val"></td>
                        <td id="JkqA7jRpY7n-j9xBW1OhdPL-val"></td>
                        <td id="JkqA7jRpY7n-H0jVoZjaEQc-val"></td>
                        <td id="JkqA7jRpY7n-rwvk7W12oqJ-val"></td>
                        <td id="JkqA7jRpY7n-dCCHGs2tgzl-val"></td>
                        <td id="JkqA7jRpY7n-qut5WjTBNT3-val"></td>
                        <td id="JkqA7jRpY7n-GRLp8SxoHM5-val"></td>
                        <td id="JkqA7jRpY7n-jjGiYe6GtY1-val"></td>
                        <td id="JkqA7jRpY7n-NqLRdsWplFK-val"></td>
                        <td id="JkqA7jRpY7n-yC7jMym8ru6-val"></td>
                        <td id="JkqA7jRpY7n-qATls8jUAlx-val"></td>
                        <td id="JkqA7jRpY7n-VV2rnyQQL5V-val"></td>
                        <td id="JkqA7jRpY7n-zqrvur8vobZ-val"></td>
                        <td id="JkqA7jRpY7n-kxpsiz3cDc3-val"></td>
                        <td id="JkqA7jRpY7n-HNaWlJYHEbU-val"></td>
                        <td id="JkqA7jRpY7n-e6SJ007Vl2n-val"></td>
                        <td id="JkqA7jRpY7n-HBIPIOr5OPF-val"></td>
                        <td id="JkqA7jRpY7n-nkPK7UlaIAK-val"></td>
                        <td id="JkqA7jRpY7n-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Other Psychogenic problem</td>
                        <td id="CKQSWVtePBD-PEeRslZLFyQ-val"></td>
                        <td id="CKQSWVtePBD-SVXVVsrMtFT-val"></td>
                        <td id="CKQSWVtePBD-QE4cD8Q5eH1-val"></td>
                        <td id="CKQSWVtePBD-uk1seOqA2kY-val"></td>
                        <td id="CKQSWVtePBD-j9xBW1OhdPL-val"></td>
                        <td id="CKQSWVtePBD-H0jVoZjaEQc-val"></td>
                        <td id="CKQSWVtePBD-rwvk7W12oqJ-val"></td>
                        <td id="CKQSWVtePBD-dCCHGs2tgzl-val"></td>
                        <td id="CKQSWVtePBD-qut5WjTBNT3-val"></td>
                        <td id="CKQSWVtePBD-GRLp8SxoHM5-val"></td>
                        <td id="CKQSWVtePBD-jjGiYe6GtY1-val"></td>
                        <td id="CKQSWVtePBD-NqLRdsWplFK-val"></td>
                        <td id="CKQSWVtePBD-yC7jMym8ru6-val"></td>
                        <td id="CKQSWVtePBD-qATls8jUAlx-val"></td>
                        <td id="CKQSWVtePBD-VV2rnyQQL5V-val"></td>
                        <td id="CKQSWVtePBD-zqrvur8vobZ-val"></td>
                        <td id="CKQSWVtePBD-kxpsiz3cDc3-val"></td>
                        <td id="CKQSWVtePBD-HNaWlJYHEbU-val"></td>
                        <td id="CKQSWVtePBD-e6SJ007Vl2n-val"></td>
                        <td id="CKQSWVtePBD-HBIPIOr5OPF-val"></td>
                        <td id="CKQSWVtePBD-nkPK7UlaIAK-val"></td>
                        <td id="CKQSWVtePBD-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Pelvic Inflammatory disease</td>
                        <td id="AgLXsfGUemw-PEeRslZLFyQ-val"></td>
                        <td id="AgLXsfGUemw-SVXVVsrMtFT-val"></td>
                        <td id="AgLXsfGUemw-QE4cD8Q5eH1-val"></td>
                        <td id="AgLXsfGUemw-uk1seOqA2kY-val"></td>
                        <td id="AgLXsfGUemw-j9xBW1OhdPL-val"></td>
                        <td id="AgLXsfGUemw-H0jVoZjaEQc-val"></td>
                        <td id="AgLXsfGUemw-rwvk7W12oqJ-val"></td>
                        <td id="AgLXsfGUemw-dCCHGs2tgzl-val"></td>
                        <td id="AgLXsfGUemw-qut5WjTBNT3-val"></td>
                        <td id="AgLXsfGUemw-GRLp8SxoHM5-val"></td>
                        <td id="AgLXsfGUemw-jjGiYe6GtY1-val"></td>
                        <td id="AgLXsfGUemw-NqLRdsWplFK-val"></td>
                        <td id="AgLXsfGUemw-yC7jMym8ru6-val"></td>
                        <td id="AgLXsfGUemw-qATls8jUAlx-val"></td>
                        <td id="AgLXsfGUemw-VV2rnyQQL5V-val"></td>
                        <td id="AgLXsfGUemw-zqrvur8vobZ-val"></td>
                        <td id="AgLXsfGUemw-kxpsiz3cDc3-val"></td>
                        <td id="AgLXsfGUemw-HNaWlJYHEbU-val"></td>
                        <td id="AgLXsfGUemw-e6SJ007Vl2n-val"></td>
                        <td id="AgLXsfGUemw-HBIPIOr5OPF-val"></td>
                        <td id="AgLXsfGUemw-nkPK7UlaIAK-val"></td>
                        <td id="AgLXsfGUemw-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Other</td>
                        <td id="DmlhK3s3SwR-PEeRslZLFyQ-val"></td>
                        <td id="DmlhK3s3SwR-SVXVVsrMtFT-val"></td>
                        <td id="DmlhK3s3SwR-QE4cD8Q5eH1-val"></td>
                        <td id="DmlhK3s3SwR-uk1seOqA2kY-val"></td>
                        <td id="DmlhK3s3SwR-j9xBW1OhdPL-val"></td>
                        <td id="DmlhK3s3SwR-H0jVoZjaEQc-val"></td>
                        <td id="DmlhK3s3SwR-rwvk7W12oqJ-val"></td>
                        <td id="DmlhK3s3SwR-dCCHGs2tgzl-val"></td>
                        <td id="DmlhK3s3SwR-qut5WjTBNT3-val"></td>
                        <td id="DmlhK3s3SwR-GRLp8SxoHM5-val"></td>
                        <td id="DmlhK3s3SwR-jjGiYe6GtY1-val"></td>
                        <td id="DmlhK3s3SwR-NqLRdsWplFK-val"></td>
                        <td id="DmlhK3s3SwR-yC7jMym8ru6-val"></td>
                        <td id="DmlhK3s3SwR-qATls8jUAlx-val"></td>
                        <td id="DmlhK3s3SwR-VV2rnyQQL5V-val"></td>
                        <td id="DmlhK3s3SwR-zqrvur8vobZ-val"></td>
                        <td id="DmlhK3s3SwR-kxpsiz3cDc3-val"></td>
                        <td id="DmlhK3s3SwR-HNaWlJYHEbU-val"></td>
                        <td id="DmlhK3s3SwR-e6SJ007Vl2n-val"></td>
                        <td id="DmlhK3s3SwR-HBIPIOr5OPF-val"></td>
                        <td id="DmlhK3s3SwR-nkPK7UlaIAK-val"></td>
                        <td id="DmlhK3s3SwR-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="title">Accidents and Injuries</td>
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
                        <td>Traffic</td>
                        <td id="oArXL7CAwTR-PEeRslZLFyQ-val"></td>
                        <td id="oArXL7CAwTR-SVXVVsrMtFT-val"></td>
                        <td id="oArXL7CAwTR-QE4cD8Q5eH1-val"></td>
                        <td id="oArXL7CAwTR-uk1seOqA2kY-val"></td>
                        <td id="oArXL7CAwTR-j9xBW1OhdPL-val"></td>
                        <td id="oArXL7CAwTR-H0jVoZjaEQc-val"></td>
                        <td id="oArXL7CAwTR-rwvk7W12oqJ-val"></td>
                        <td id="oArXL7CAwTR-dCCHGs2tgzl-val"></td>
                        <td id="oArXL7CAwTR-qut5WjTBNT3-val"></td>
                        <td id="oArXL7CAwTR-GRLp8SxoHM5-val"></td>
                        <td id="oArXL7CAwTR-jjGiYe6GtY1-val"></td>
                        <td id="oArXL7CAwTR-NqLRdsWplFK-val"></td>
                        <td id="oArXL7CAwTR-yC7jMym8ru6-val"></td>
                        <td id="oArXL7CAwTR-qATls8jUAlx-val"></td>
                        <td id="oArXL7CAwTR-VV2rnyQQL5V-val"></td>
                        <td id="oArXL7CAwTR-zqrvur8vobZ-val"></td>
                        <td id="oArXL7CAwTR-kxpsiz3cDc3-val"></td>
                        <td id="oArXL7CAwTR-HNaWlJYHEbU-val"></td>
                        <td id="oArXL7CAwTR-e6SJ007Vl2n-val"></td>
                        <td id="oArXL7CAwTR-HBIPIOr5OPF-val"></td>
                        <td id="oArXL7CAwTR-nkPK7UlaIAK-val"></td>
                        <td id="oArXL7CAwTR-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Home</td>
                        <td id="iLVPuUXghlE-PEeRslZLFyQ-val"></td>
                        <td id="iLVPuUXghlE-SVXVVsrMtFT-val"></td>
                        <td id="iLVPuUXghlE-QE4cD8Q5eH1-val"></td>
                        <td id="iLVPuUXghlE-uk1seOqA2kY-val"></td>
                        <td id="iLVPuUXghlE-j9xBW1OhdPL-val"></td>
                        <td id="iLVPuUXghlE-H0jVoZjaEQc-val"></td>
                        <td id="iLVPuUXghlE-rwvk7W12oqJ-val"></td>
                        <td id="iLVPuUXghlE-dCCHGs2tgzl-val"></td>
                        <td id="iLVPuUXghlE-qut5WjTBNT3-val"></td>
                        <td id="iLVPuUXghlE-GRLp8SxoHM5-val"></td>
                        <td id="iLVPuUXghlE-jjGiYe6GtY1-val"></td>
                        <td id="iLVPuUXghlE-NqLRdsWplFK-val"></td>
                        <td id="iLVPuUXghlE-yC7jMym8ru6-val"></td>
                        <td id="iLVPuUXghlE-qATls8jUAlx-val"></td>
                        <td id="iLVPuUXghlE-VV2rnyQQL5V-val"></td>
                        <td id="iLVPuUXghlE-zqrvur8vobZ-val"></td>
                        <td id="iLVPuUXghlE-kxpsiz3cDc3-val"></td>
                        <td id="iLVPuUXghlE-HNaWlJYHEbU-val"></td>
                        <td id="iLVPuUXghlE-e6SJ007Vl2n-val"></td>
                        <td id="iLVPuUXghlE-HBIPIOr5OPF-val"></td>
                        <td id="iLVPuUXghlE-nkPK7UlaIAK-val"></td>
                        <td id="iLVPuUXghlE-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Other &amp; Unspecified</td>
                        <td id="fk0qU1WDmJj-PEeRslZLFyQ-val"></td>
                        <td id="fk0qU1WDmJj-SVXVVsrMtFT-val"></td>
                        <td id="fk0qU1WDmJj-QE4cD8Q5eH1-val"></td>
                        <td id="fk0qU1WDmJj-uk1seOqA2kY-val"></td>
                        <td id="fk0qU1WDmJj-j9xBW1OhdPL-val"></td>
                        <td id="fk0qU1WDmJj-H0jVoZjaEQc-val"></td>
                        <td id="fk0qU1WDmJj-rwvk7W12oqJ-val"></td>
                        <td id="fk0qU1WDmJj-dCCHGs2tgzl-val"></td>
                        <td id="fk0qU1WDmJj-qut5WjTBNT3-val"></td>
                        <td id="fk0qU1WDmJj-GRLp8SxoHM5-val"></td>
                        <td id="fk0qU1WDmJj-jjGiYe6GtY1-val"></td>
                        <td id="fk0qU1WDmJj-NqLRdsWplFK-val"></td>
                        <td id="fk0qU1WDmJj-yC7jMym8ru6-val"></td>
                        <td id="fk0qU1WDmJj-qATls8jUAlx-val"></td>
                        <td id="fk0qU1WDmJj-VV2rnyQQL5V-val"></td>
                        <td id="fk0qU1WDmJj-zqrvur8vobZ-val"></td>
                        <td id="fk0qU1WDmJj-kxpsiz3cDc3-val"></td>
                        <td id="fk0qU1WDmJj-HNaWlJYHEbU-val"></td>
                        <td id="fk0qU1WDmJj-e6SJ007Vl2n-val"></td>
                        <td id="fk0qU1WDmJj-HBIPIOr5OPF-val"></td>
                        <td id="fk0qU1WDmJj-nkPK7UlaIAK-val"></td>
                        <td id="fk0qU1WDmJj-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>7.2 (b)</td>
                        <td>Clients with symptoms, signs and ill defined conditions.</td>
                        <td id="DuY7D6b6p1Q-PEeRslZLFyQ-val"></td>
                        <td id="DuY7D6b6p1Q-SVXVVsrMtFT-val"></td>
                        <td id="DuY7D6b6p1Q-QE4cD8Q5eH1-val"></td>
                        <td id="DuY7D6b6p1Q-uk1seOqA2kY-val"></td>
                        <td id="DuY7D6b6p1Q-j9xBW1OhdPL-val"></td>
                        <td id="DuY7D6b6p1Q-H0jVoZjaEQc-val"></td>
                        <td id="DuY7D6b6p1Q-rwvk7W12oqJ-val"></td>
                        <td id="DuY7D6b6p1Q-dCCHGs2tgzl-val"></td>
                        <td id="DuY7D6b6p1Q-qut5WjTBNT3-val"></td>
                        <td id="DuY7D6b6p1Q-GRLp8SxoHM5-val"></td>
                        <td id="DuY7D6b6p1Q-jjGiYe6GtY1-val"></td>
                        <td id="DuY7D6b6p1Q-NqLRdsWplFK-val"></td>
                        <td id="DuY7D6b6p1Q-yC7jMym8ru6-val"></td>
                        <td id="DuY7D6b6p1Q-qATls8jUAlx-val"></td>
                        <td id="DuY7D6b6p1Q-VV2rnyQQL5V-val"></td>
                        <td id="DuY7D6b6p1Q-zqrvur8vobZ-val"></td>
                        <td id="DuY7D6b6p1Q-kxpsiz3cDc3-val"></td>
                        <td id="DuY7D6b6p1Q-HNaWlJYHEbU-val"></td>
                        <td id="DuY7D6b6p1Q-e6SJ007Vl2n-val"></td>
                        <td id="DuY7D6b6p1Q-HBIPIOr5OPF-val"></td>
                        <td id="DuY7D6b6p1Q-nkPK7UlaIAK-val"></td>
                        <td id="DuY7D6b6p1Q-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>7.2 (c)</td>
                        <td>Clients with no diagnosis or clinical impressions stated (all visits)</td>
                        <td id="dzS2nJXf5Ky-PEeRslZLFyQ-val"></td>
                        <td id="dzS2nJXf5Ky-SVXVVsrMtFT-val"></td>
                        <td id="dzS2nJXf5Ky-QE4cD8Q5eH1-val"></td>
                        <td id="dzS2nJXf5Ky-uk1seOqA2kY-val"></td>
                        <td id="dzS2nJXf5Ky-j9xBW1OhdPL-val"></td>
                        <td id="dzS2nJXf5Ky-H0jVoZjaEQc-val"></td>
                        <td id="dzS2nJXf5Ky-rwvk7W12oqJ-val"></td>
                        <td id="dzS2nJXf5Ky-dCCHGs2tgzl-val"></td>
                        <td id="dzS2nJXf5Ky-qut5WjTBNT3-val"></td>
                        <td id="dzS2nJXf5Ky-GRLp8SxoHM5-val"></td>
                        <td id="dzS2nJXf5Ky-jjGiYe6GtY1-val"></td>
                        <td id="dzS2nJXf5Ky-NqLRdsWplFK-val"></td>
                        <td id="dzS2nJXf5Ky-yC7jMym8ru6-val"></td>
                        <td id="dzS2nJXf5Ky-qATls8jUAlx-val"></td>
                        <td id="dzS2nJXf5Ky-VV2rnyQQL5V-val"></td>
                        <td id="dzS2nJXf5Ky-zqrvur8vobZ-val"></td>
                        <td id="dzS2nJXf5Ky-kxpsiz3cDc3-val"></td>
                        <td id="dzS2nJXf5Ky-HNaWlJYHEbU-val"></td>
                        <td id="dzS2nJXf5Ky-e6SJ007Vl2n-val"></td>
                        <td id="dzS2nJXf5Ky-HBIPIOr5OPF-val"></td>
                        <td id="dzS2nJXf5Ky-nkPK7UlaIAK-val"></td>
                        <td id="dzS2nJXf5Ky-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>7.3</td>
                        <td>Clients with problems referred to Hospital/Specialist Clinic</td>
                        <td id="hkJtzwqY25K-PEeRslZLFyQ-val"></td>
                        <td id="hkJtzwqY25K-SVXVVsrMtFT-val"></td>
                        <td id="hkJtzwqY25K-QE4cD8Q5eH1-val"></td>
                        <td id="hkJtzwqY25K-uk1seOqA2kY-val"></td>
                        <td id="hkJtzwqY25K-j9xBW1OhdPL-val"></td>
                        <td id="hkJtzwqY25K-H0jVoZjaEQc-val"></td>
                        <td id="hkJtzwqY25K-rwvk7W12oqJ-val"></td>
                        <td id="hkJtzwqY25K-dCCHGs2tgzl-val"></td>
                        <td id="hkJtzwqY25K-qut5WjTBNT3-val"></td>
                        <td id="hkJtzwqY25K-GRLp8SxoHM5-val"></td>
                        <td id="hkJtzwqY25K-jjGiYe6GtY1-val"></td>
                        <td id="hkJtzwqY25K-NqLRdsWplFK-val"></td>
                        <td id="hkJtzwqY25K-yC7jMym8ru6-val"></td>
                        <td id="hkJtzwqY25K-qATls8jUAlx-val"></td>
                        <td id="hkJtzwqY25K-VV2rnyQQL5V-val"></td>
                        <td id="hkJtzwqY25K-zqrvur8vobZ-val"></td>
                        <td id="hkJtzwqY25K-kxpsiz3cDc3-val"></td>
                        <td id="hkJtzwqY25K-HNaWlJYHEbU-val"></td>
                        <td id="hkJtzwqY25K-e6SJ007Vl2n-val"></td>
                        <td id="hkJtzwqY25K-HBIPIOr5OPF-val"></td>
                        <td id="hkJtzwqY25K-nkPK7UlaIAK-val"></td>
                        <td id="hkJtzwqY25K-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">7.4</td>
                        <td className="title">Adults and Elderly screened for first time this year for:</td>
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
                        <td>Diabetes</td>
                        <td id="pFM2zFDC8jL-PEeRslZLFyQ-val"></td>
                        <td id="pFM2zFDC8jL-SVXVVsrMtFT-val"></td>
                        <td id="pFM2zFDC8jL-QE4cD8Q5eH1-val"></td>
                        <td id="pFM2zFDC8jL-uk1seOqA2kY-val"></td>
                        <td id="pFM2zFDC8jL-j9xBW1OhdPL-val"></td>
                        <td id="pFM2zFDC8jL-H0jVoZjaEQc-val"></td>
                        <td id="pFM2zFDC8jL-rwvk7W12oqJ-val"></td>
                        <td id="pFM2zFDC8jL-dCCHGs2tgzl-val"></td>
                        <td id="pFM2zFDC8jL-qut5WjTBNT3-val"></td>
                        <td id="pFM2zFDC8jL-GRLp8SxoHM5-val"></td>
                        <td id="pFM2zFDC8jL-jjGiYe6GtY1-val"></td>
                        <td id="pFM2zFDC8jL-NqLRdsWplFK-val"></td>
                        <td id="pFM2zFDC8jL-yC7jMym8ru6-val"></td>
                        <td id="pFM2zFDC8jL-qATls8jUAlx-val"></td>
                        <td id="pFM2zFDC8jL-VV2rnyQQL5V-val"></td>
                        <td id="pFM2zFDC8jL-zqrvur8vobZ-val"></td>
                        <td id="pFM2zFDC8jL-kxpsiz3cDc3-val"></td>
                        <td id="pFM2zFDC8jL-HNaWlJYHEbU-val"></td>
                        <td id="pFM2zFDC8jL-e6SJ007Vl2n-val"></td>
                        <td id="pFM2zFDC8jL-HBIPIOr5OPF-val"></td>
                        <td id="pFM2zFDC8jL-nkPK7UlaIAK-val"></td>
                        <td id="pFM2zFDC8jL-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Hypertension</td>
                        <td id="FGTwcqQdOtx-PEeRslZLFyQ-val"></td>
                        <td id="FGTwcqQdOtx-SVXVVsrMtFT-val"></td>
                        <td id="FGTwcqQdOtx-QE4cD8Q5eH1-val"></td>
                        <td id="FGTwcqQdOtx-uk1seOqA2kY-val"></td>
                        <td id="FGTwcqQdOtx-j9xBW1OhdPL-val"></td>
                        <td id="FGTwcqQdOtx-H0jVoZjaEQc-val"></td>
                        <td id="FGTwcqQdOtx-rwvk7W12oqJ-val"></td>
                        <td id="FGTwcqQdOtx-dCCHGs2tgzl-val"></td>
                        <td id="FGTwcqQdOtx-qut5WjTBNT3-val"></td>
                        <td id="FGTwcqQdOtx-GRLp8SxoHM5-val"></td>
                        <td id="FGTwcqQdOtx-jjGiYe6GtY1-val"></td>
                        <td id="FGTwcqQdOtx-NqLRdsWplFK-val"></td>
                        <td id="FGTwcqQdOtx-yC7jMym8ru6-val"></td>
                        <td id="FGTwcqQdOtx-qATls8jUAlx-val"></td>
                        <td id="FGTwcqQdOtx-VV2rnyQQL5V-val"></td>
                        <td id="FGTwcqQdOtx-zqrvur8vobZ-val"></td>
                        <td id="FGTwcqQdOtx-kxpsiz3cDc3-val"></td>
                        <td id="FGTwcqQdOtx-HNaWlJYHEbU-val"></td>
                        <td id="FGTwcqQdOtx-e6SJ007Vl2n-val"></td>
                        <td id="FGTwcqQdOtx-HBIPIOr5OPF-val"></td>
                        <td id="FGTwcqQdOtx-nkPK7UlaIAK-val"></td>
                        <td id="FGTwcqQdOtx-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Cancer of the cervix</td>
                        <td id="WV2kwuPiBpb-PEeRslZLFyQ-val"></td>
                        <td id="WV2kwuPiBpb-SVXVVsrMtFT-val"></td>
                        <td id="WV2kwuPiBpb-QE4cD8Q5eH1-val"></td>
                        <td id="WV2kwuPiBpb-uk1seOqA2kY-val"></td>
                        <td id="WV2kwuPiBpb-j9xBW1OhdPL-val"></td>
                        <td id="WV2kwuPiBpb-H0jVoZjaEQc-val"></td>
                        <td id="WV2kwuPiBpb-rwvk7W12oqJ-val"></td>
                        <td id="WV2kwuPiBpb-dCCHGs2tgzl-val"></td>
                        <td id="WV2kwuPiBpb-qut5WjTBNT3-val"></td>
                        <td id="WV2kwuPiBpb-GRLp8SxoHM5-val"></td>
                        <td id="WV2kwuPiBpb-jjGiYe6GtY1-val"></td>
                        <td id="WV2kwuPiBpb-NqLRdsWplFK-val"></td>
                        <td id="WV2kwuPiBpb-yC7jMym8ru6-val"></td>
                        <td id="WV2kwuPiBpb-qATls8jUAlx-val"></td>
                        <td id="WV2kwuPiBpb-VV2rnyQQL5V-val"></td>
                        <td id="WV2kwuPiBpb-zqrvur8vobZ-val"></td>
                        <td id="WV2kwuPiBpb-kxpsiz3cDc3-val"></td>
                        <td id="WV2kwuPiBpb-HNaWlJYHEbU-val"></td>
                        <td id="WV2kwuPiBpb-e6SJ007Vl2n-val"></td>
                        <td id="WV2kwuPiBpb-HBIPIOr5OPF-val"></td>
                        <td id="WV2kwuPiBpb-nkPK7UlaIAK-val"></td>
                        <td id="WV2kwuPiBpb-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Cancer of the breast</td>
                        <td id="zqbIKiYNn34-PEeRslZLFyQ-val"></td>
                        <td id="zqbIKiYNn34-SVXVVsrMtFT-val"></td>
                        <td id="zqbIKiYNn34-QE4cD8Q5eH1-val"></td>
                        <td id="zqbIKiYNn34-uk1seOqA2kY-val"></td>
                        <td id="zqbIKiYNn34-j9xBW1OhdPL-val"></td>
                        <td id="zqbIKiYNn34-H0jVoZjaEQc-val"></td>
                        <td id="zqbIKiYNn34-rwvk7W12oqJ-val"></td>
                        <td id="zqbIKiYNn34-dCCHGs2tgzl-val"></td>
                        <td id="zqbIKiYNn34-qut5WjTBNT3-val"></td>
                        <td id="zqbIKiYNn34-GRLp8SxoHM5-val"></td>
                        <td id="zqbIKiYNn34-jjGiYe6GtY1-val"></td>
                        <td id="zqbIKiYNn34-NqLRdsWplFK-val"></td>
                        <td id="zqbIKiYNn34-yC7jMym8ru6-val"></td>
                        <td id="zqbIKiYNn34-qATls8jUAlx-val"></td>
                        <td id="zqbIKiYNn34-VV2rnyQQL5V-val"></td>
                        <td id="zqbIKiYNn34-zqrvur8vobZ-val"></td>
                        <td id="zqbIKiYNn34-kxpsiz3cDc3-val"></td>
                        <td id="zqbIKiYNn34-HNaWlJYHEbU-val"></td>
                        <td id="zqbIKiYNn34-e6SJ007Vl2n-val"></td>
                        <td id="zqbIKiYNn34-HBIPIOr5OPF-val"></td>
                        <td id="zqbIKiYNn34-nkPK7UlaIAK-val"></td>
                        <td id="zqbIKiYNn34-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Prostate Cancer</td>
                        <td id="JrM24pszPP5-PEeRslZLFyQ-val"></td>
                        <td id="JrM24pszPP5-SVXVVsrMtFT-val"></td>
                        <td id="JrM24pszPP5-QE4cD8Q5eH1-val"></td>
                        <td id="JrM24pszPP5-uk1seOqA2kY-val"></td>
                        <td id="JrM24pszPP5-j9xBW1OhdPL-val"></td>
                        <td id="JrM24pszPP5-H0jVoZjaEQc-val"></td>
                        <td id="JrM24pszPP5-rwvk7W12oqJ-val"></td>
                        <td id="JrM24pszPP5-dCCHGs2tgzl-val"></td>
                        <td id="JrM24pszPP5-qut5WjTBNT3-val"></td>
                        <td id="JrM24pszPP5-GRLp8SxoHM5-val"></td>
                        <td id="JrM24pszPP5-jjGiYe6GtY1-val"></td>
                        <td id="JrM24pszPP5-NqLRdsWplFK-val"></td>
                        <td id="JrM24pszPP5-yC7jMym8ru6-val"></td>
                        <td id="JrM24pszPP5-qATls8jUAlx-val"></td>
                        <td id="JrM24pszPP5-VV2rnyQQL5V-val"></td>
                        <td id="JrM24pszPP5-zqrvur8vobZ-val"></td>
                        <td id="JrM24pszPP5-kxpsiz3cDc3-val"></td>
                        <td id="JrM24pszPP5-HNaWlJYHEbU-val"></td>
                        <td id="JrM24pszPP5-e6SJ007Vl2n-val"></td>
                        <td id="JrM24pszPP5-HBIPIOr5OPF-val"></td>
                        <td id="JrM24pszPP5-nkPK7UlaIAK-val"></td>
                        <td id="JrM24pszPP5-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Other</td>
                        <td id="VOANrNBbe7B-PEeRslZLFyQ-val"></td>
                        <td id="VOANrNBbe7B-SVXVVsrMtFT-val"></td>
                        <td id="VOANrNBbe7B-QE4cD8Q5eH1-val"></td>
                        <td id="VOANrNBbe7B-uk1seOqA2kY-val"></td>
                        <td id="VOANrNBbe7B-j9xBW1OhdPL-val"></td>
                        <td id="VOANrNBbe7B-H0jVoZjaEQc-val"></td>
                        <td id="VOANrNBbe7B-rwvk7W12oqJ-val"></td>
                        <td id="VOANrNBbe7B-dCCHGs2tgzl-val"></td>
                        <td id="VOANrNBbe7B-qut5WjTBNT3-val"></td>
                        <td id="VOANrNBbe7B-GRLp8SxoHM5-val"></td>
                        <td id="VOANrNBbe7B-jjGiYe6GtY1-val"></td>
                        <td id="VOANrNBbe7B-NqLRdsWplFK-val"></td>
                        <td id="VOANrNBbe7B-yC7jMym8ru6-val"></td>
                        <td id="VOANrNBbe7B-qATls8jUAlx-val"></td>
                        <td id="VOANrNBbe7B-VV2rnyQQL5V-val"></td>
                        <td id="VOANrNBbe7B-zqrvur8vobZ-val"></td>
                        <td id="VOANrNBbe7B-kxpsiz3cDc3-val"></td>
                        <td id="VOANrNBbe7B-HNaWlJYHEbU-val"></td>
                        <td id="VOANrNBbe7B-e6SJ007Vl2n-val"></td>
                        <td id="VOANrNBbe7B-HBIPIOr5OPF-val"></td>
                        <td id="VOANrNBbe7B-nkPK7UlaIAK-val"></td>
                        <td id="VOANrNBbe7B-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">7.5</td>
                        <td className="title">Adults and Elderly with positive test results 1st time</td>
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
                        <td>Diabetes</td>
                        <td id="dj7rSmWr9V9-PEeRslZLFyQ-val"></td>
                        <td id="dj7rSmWr9V9-SVXVVsrMtFT-val"></td>
                        <td id="dj7rSmWr9V9-QE4cD8Q5eH1-val"></td>
                        <td id="dj7rSmWr9V9-uk1seOqA2kY-val"></td>
                        <td id="dj7rSmWr9V9-j9xBW1OhdPL-val"></td>
                        <td id="dj7rSmWr9V9-H0jVoZjaEQc-val"></td>
                        <td id="dj7rSmWr9V9-rwvk7W12oqJ-val"></td>
                        <td id="dj7rSmWr9V9-dCCHGs2tgzl-val"></td>
                        <td id="dj7rSmWr9V9-qut5WjTBNT3-val"></td>
                        <td id="dj7rSmWr9V9-GRLp8SxoHM5-val"></td>
                        <td id="dj7rSmWr9V9-jjGiYe6GtY1-val"></td>
                        <td id="dj7rSmWr9V9-NqLRdsWplFK-val"></td>
                        <td id="dj7rSmWr9V9-yC7jMym8ru6-val"></td>
                        <td id="dj7rSmWr9V9-qATls8jUAlx-val"></td>
                        <td id="dj7rSmWr9V9-VV2rnyQQL5V-val"></td>
                        <td id="dj7rSmWr9V9-zqrvur8vobZ-val"></td>
                        <td id="dj7rSmWr9V9-kxpsiz3cDc3-val"></td>
                        <td id="dj7rSmWr9V9-HNaWlJYHEbU-val"></td>
                        <td id="dj7rSmWr9V9-e6SJ007Vl2n-val"></td>
                        <td id="dj7rSmWr9V9-HBIPIOr5OPF-val"></td>
                        <td id="dj7rSmWr9V9-nkPK7UlaIAK-val"></td>
                        <td id="dj7rSmWr9V9-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Hypertension</td>
                        <td id="LtyMahWgMEq-PEeRslZLFyQ-val"></td>
                        <td id="LtyMahWgMEq-SVXVVsrMtFT-val"></td>
                        <td id="LtyMahWgMEq-QE4cD8Q5eH1-val"></td>
                        <td id="LtyMahWgMEq-uk1seOqA2kY-val"></td>
                        <td id="LtyMahWgMEq-j9xBW1OhdPL-val"></td>
                        <td id="LtyMahWgMEq-H0jVoZjaEQc-val"></td>
                        <td id="LtyMahWgMEq-rwvk7W12oqJ-val"></td>
                        <td id="LtyMahWgMEq-dCCHGs2tgzl-val"></td>
                        <td id="LtyMahWgMEq-qut5WjTBNT3-val"></td>
                        <td id="LtyMahWgMEq-GRLp8SxoHM5-val"></td>
                        <td id="LtyMahWgMEq-jjGiYe6GtY1-val"></td>
                        <td id="LtyMahWgMEq-NqLRdsWplFK-val"></td>
                        <td id="LtyMahWgMEq-yC7jMym8ru6-val"></td>
                        <td id="LtyMahWgMEq-qATls8jUAlx-val"></td>
                        <td id="LtyMahWgMEq-VV2rnyQQL5V-val"></td>
                        <td id="LtyMahWgMEq-zqrvur8vobZ-val"></td>
                        <td id="LtyMahWgMEq-kxpsiz3cDc3-val"></td>
                        <td id="LtyMahWgMEq-HNaWlJYHEbU-val"></td>
                        <td id="LtyMahWgMEq-e6SJ007Vl2n-val"></td>
                        <td id="LtyMahWgMEq-HBIPIOr5OPF-val"></td>
                        <td id="LtyMahWgMEq-nkPK7UlaIAK-val"></td>
                        <td id="LtyMahWgMEq-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Cancer of the cervix</td>
                        <td id="MVbBUEMPIM4-PEeRslZLFyQ-val"></td>
                        <td id="MVbBUEMPIM4-SVXVVsrMtFT-val"></td>
                        <td id="MVbBUEMPIM4-QE4cD8Q5eH1-val"></td>
                        <td id="MVbBUEMPIM4-uk1seOqA2kY-val"></td>
                        <td id="MVbBUEMPIM4-j9xBW1OhdPL-val"></td>
                        <td id="MVbBUEMPIM4-H0jVoZjaEQc-val"></td>
                        <td id="MVbBUEMPIM4-rwvk7W12oqJ-val"></td>
                        <td id="MVbBUEMPIM4-dCCHGs2tgzl-val"></td>
                        <td id="MVbBUEMPIM4-qut5WjTBNT3-val"></td>
                        <td id="MVbBUEMPIM4-GRLp8SxoHM5-val"></td>
                        <td id="MVbBUEMPIM4-jjGiYe6GtY1-val"></td>
                        <td id="MVbBUEMPIM4-NqLRdsWplFK-val"></td>
                        <td id="MVbBUEMPIM4-yC7jMym8ru6-val"></td>
                        <td id="MVbBUEMPIM4-qATls8jUAlx-val"></td>
                        <td id="MVbBUEMPIM4-VV2rnyQQL5V-val"></td>
                        <td id="MVbBUEMPIM4-zqrvur8vobZ-val"></td>
                        <td id="MVbBUEMPIM4-kxpsiz3cDc3-val"></td>
                        <td id="MVbBUEMPIM4-HNaWlJYHEbU-val"></td>
                        <td id="MVbBUEMPIM4-e6SJ007Vl2n-val"></td>
                        <td id="MVbBUEMPIM4-HBIPIOr5OPF-val"></td>
                        <td id="MVbBUEMPIM4-nkPK7UlaIAK-val"></td>
                        <td id="MVbBUEMPIM4-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Cancer of the breast</td>
                        <td id="WfeuqGop9QL-PEeRslZLFyQ-val"></td>
                        <td id="WfeuqGop9QL-SVXVVsrMtFT-val"></td>
                        <td id="WfeuqGop9QL-QE4cD8Q5eH1-val"></td>
                        <td id="WfeuqGop9QL-uk1seOqA2kY-val"></td>
                        <td id="WfeuqGop9QL-j9xBW1OhdPL-val"></td>
                        <td id="WfeuqGop9QL-H0jVoZjaEQc-val"></td>
                        <td id="WfeuqGop9QL-rwvk7W12oqJ-val"></td>
                        <td id="WfeuqGop9QL-dCCHGs2tgzl-val"></td>
                        <td id="WfeuqGop9QL-qut5WjTBNT3-val"></td>
                        <td id="WfeuqGop9QL-GRLp8SxoHM5-val"></td>
                        <td id="WfeuqGop9QL-jjGiYe6GtY1-val"></td>
                        <td id="WfeuqGop9QL-NqLRdsWplFK-val"></td>
                        <td id="WfeuqGop9QL-yC7jMym8ru6-val"></td>
                        <td id="WfeuqGop9QL-qATls8jUAlx-val"></td>
                        <td id="WfeuqGop9QL-VV2rnyQQL5V-val"></td>
                        <td id="WfeuqGop9QL-zqrvur8vobZ-val"></td>
                        <td id="WfeuqGop9QL-kxpsiz3cDc3-val"></td>
                        <td id="WfeuqGop9QL-HNaWlJYHEbU-val"></td>
                        <td id="WfeuqGop9QL-e6SJ007Vl2n-val"></td>
                        <td id="WfeuqGop9QL-HBIPIOr5OPF-val"></td>
                        <td id="WfeuqGop9QL-nkPK7UlaIAK-val"></td>
                        <td id="WfeuqGop9QL-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Prostate Cancer</td>
                        <td id="y4gqJ3vVYzS-PEeRslZLFyQ-val"></td>
                        <td id="y4gqJ3vVYzS-SVXVVsrMtFT-val"></td>
                        <td id="y4gqJ3vVYzS-QE4cD8Q5eH1-val"></td>
                        <td id="y4gqJ3vVYzS-uk1seOqA2kY-val"></td>
                        <td id="y4gqJ3vVYzS-j9xBW1OhdPL-val"></td>
                        <td id="y4gqJ3vVYzS-H0jVoZjaEQc-val"></td>
                        <td id="y4gqJ3vVYzS-rwvk7W12oqJ-val"></td>
                        <td id="y4gqJ3vVYzS-dCCHGs2tgzl-val"></td>
                        <td id="y4gqJ3vVYzS-qut5WjTBNT3-val"></td>
                        <td id="y4gqJ3vVYzS-GRLp8SxoHM5-val"></td>
                        <td id="y4gqJ3vVYzS-jjGiYe6GtY1-val"></td>
                        <td id="y4gqJ3vVYzS-NqLRdsWplFK-val"></td>
                        <td id="y4gqJ3vVYzS-yC7jMym8ru6-val"></td>
                        <td id="y4gqJ3vVYzS-qATls8jUAlx-val"></td>
                        <td id="y4gqJ3vVYzS-VV2rnyQQL5V-val"></td>
                        <td id="y4gqJ3vVYzS-zqrvur8vobZ-val"></td>
                        <td id="y4gqJ3vVYzS-kxpsiz3cDc3-val"></td>
                        <td id="y4gqJ3vVYzS-HNaWlJYHEbU-val"></td>
                        <td id="y4gqJ3vVYzS-e6SJ007Vl2n-val"></td>
                        <td id="y4gqJ3vVYzS-HBIPIOr5OPF-val"></td>
                        <td id="y4gqJ3vVYzS-nkPK7UlaIAK-val"></td>
                        <td id="y4gqJ3vVYzS-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Other</td>
                        <td id="BGKsCWcp3g1-PEeRslZLFyQ-val"></td>
                        <td id="BGKsCWcp3g1-SVXVVsrMtFT-val"></td>
                        <td id="BGKsCWcp3g1-QE4cD8Q5eH1-val"></td>
                        <td id="BGKsCWcp3g1-uk1seOqA2kY-val"></td>
                        <td id="BGKsCWcp3g1-j9xBW1OhdPL-val"></td>
                        <td id="BGKsCWcp3g1-H0jVoZjaEQc-val"></td>
                        <td id="BGKsCWcp3g1-rwvk7W12oqJ-val"></td>
                        <td id="BGKsCWcp3g1-dCCHGs2tgzl-val"></td>
                        <td id="BGKsCWcp3g1-qut5WjTBNT3-val"></td>
                        <td id="BGKsCWcp3g1-GRLp8SxoHM5-val"></td>
                        <td id="BGKsCWcp3g1-jjGiYe6GtY1-val"></td>
                        <td id="BGKsCWcp3g1-NqLRdsWplFK-val"></td>
                        <td id="BGKsCWcp3g1-yC7jMym8ru6-val"></td>
                        <td id="BGKsCWcp3g1-qATls8jUAlx-val"></td>
                        <td id="BGKsCWcp3g1-VV2rnyQQL5V-val"></td>
                        <td id="BGKsCWcp3g1-zqrvur8vobZ-val"></td>
                        <td id="BGKsCWcp3g1-kxpsiz3cDc3-val"></td>
                        <td id="BGKsCWcp3g1-HNaWlJYHEbU-val"></td>
                        <td id="BGKsCWcp3g1-e6SJ007Vl2n-val"></td>
                        <td id="BGKsCWcp3g1-HBIPIOr5OPF-val"></td>
                        <td id="BGKsCWcp3g1-nkPK7UlaIAK-val"></td>
                        <td id="BGKsCWcp3g1-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">7.6</td>
                        <td className="title">Other reasons for visit to clinic</td>
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
                        <td>Nebulization</td>
                        <td id="UjvTu2iyWOE-PEeRslZLFyQ-val"></td>
                        <td id="UjvTu2iyWOE-SVXVVsrMtFT-val"></td>
                        <td id="UjvTu2iyWOE-QE4cD8Q5eH1-val"></td>
                        <td id="UjvTu2iyWOE-uk1seOqA2kY-val"></td>
                        <td id="UjvTu2iyWOE-j9xBW1OhdPL-val"></td>
                        <td id="UjvTu2iyWOE-H0jVoZjaEQc-val"></td>
                        <td id="UjvTu2iyWOE-rwvk7W12oqJ-val"></td>
                        <td id="UjvTu2iyWOE-dCCHGs2tgzl-val"></td>
                        <td id="UjvTu2iyWOE-qut5WjTBNT3-val"></td>
                        <td id="UjvTu2iyWOE-GRLp8SxoHM5-val"></td>
                        <td id="UjvTu2iyWOE-jjGiYe6GtY1-val"></td>
                        <td id="UjvTu2iyWOE-NqLRdsWplFK-val"></td>
                        <td id="UjvTu2iyWOE-yC7jMym8ru6-val"></td>
                        <td id="UjvTu2iyWOE-qATls8jUAlx-val"></td>
                        <td id="UjvTu2iyWOE-VV2rnyQQL5V-val"></td>
                        <td id="UjvTu2iyWOE-zqrvur8vobZ-val"></td>
                        <td id="UjvTu2iyWOE-kxpsiz3cDc3-val"></td>
                        <td id="UjvTu2iyWOE-HNaWlJYHEbU-val"></td>
                        <td id="UjvTu2iyWOE-e6SJ007Vl2n-val"></td>
                        <td id="UjvTu2iyWOE-HBIPIOr5OPF-val"></td>
                        <td id="UjvTu2iyWOE-nkPK7UlaIAK-val"></td>
                        <td id="UjvTu2iyWOE-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Urine Tests</td>
                        <td id="nTOCtNBP4jS-PEeRslZLFyQ-val"></td>
                        <td id="nTOCtNBP4jS-SVXVVsrMtFT-val"></td>
                        <td id="nTOCtNBP4jS-QE4cD8Q5eH1-val"></td>
                        <td id="nTOCtNBP4jS-uk1seOqA2kY-val"></td>
                        <td id="nTOCtNBP4jS-j9xBW1OhdPL-val"></td>
                        <td id="nTOCtNBP4jS-H0jVoZjaEQc-val"></td>
                        <td id="nTOCtNBP4jS-rwvk7W12oqJ-val"></td>
                        <td id="nTOCtNBP4jS-dCCHGs2tgzl-val"></td>
                        <td id="nTOCtNBP4jS-qut5WjTBNT3-val"></td>
                        <td id="nTOCtNBP4jS-GRLp8SxoHM5-val"></td>
                        <td id="nTOCtNBP4jS-jjGiYe6GtY1-val"></td>
                        <td id="nTOCtNBP4jS-NqLRdsWplFK-val"></td>
                        <td id="nTOCtNBP4jS-yC7jMym8ru6-val"></td>
                        <td id="nTOCtNBP4jS-qATls8jUAlx-val"></td>
                        <td id="nTOCtNBP4jS-VV2rnyQQL5V-val"></td>
                        <td id="nTOCtNBP4jS-zqrvur8vobZ-val"></td>
                        <td id="nTOCtNBP4jS-kxpsiz3cDc3-val"></td>
                        <td id="nTOCtNBP4jS-HNaWlJYHEbU-val"></td>
                        <td id="nTOCtNBP4jS-e6SJ007Vl2n-val"></td>
                        <td id="nTOCtNBP4jS-HBIPIOr5OPF-val"></td>
                        <td id="nTOCtNBP4jS-nkPK7UlaIAK-val"></td>
                        <td id="nTOCtNBP4jS-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Phlebotomy</td>
                        <td id="hl04aeAllRC-PEeRslZLFyQ-val"></td>
                        <td id="hl04aeAllRC-SVXVVsrMtFT-val"></td>
                        <td id="hl04aeAllRC-QE4cD8Q5eH1-val"></td>
                        <td id="hl04aeAllRC-uk1seOqA2kY-val"></td>
                        <td id="hl04aeAllRC-j9xBW1OhdPL-val"></td>
                        <td id="hl04aeAllRC-H0jVoZjaEQc-val"></td>
                        <td id="hl04aeAllRC-rwvk7W12oqJ-val"></td>
                        <td id="hl04aeAllRC-dCCHGs2tgzl-val"></td>
                        <td id="hl04aeAllRC-qut5WjTBNT3-val"></td>
                        <td id="hl04aeAllRC-GRLp8SxoHM5-val"></td>
                        <td id="hl04aeAllRC-jjGiYe6GtY1-val"></td>
                        <td id="hl04aeAllRC-NqLRdsWplFK-val"></td>
                        <td id="hl04aeAllRC-yC7jMym8ru6-val"></td>
                        <td id="hl04aeAllRC-qATls8jUAlx-val"></td>
                        <td id="hl04aeAllRC-VV2rnyQQL5V-val"></td>
                        <td id="hl04aeAllRC-zqrvur8vobZ-val"></td>
                        <td id="hl04aeAllRC-kxpsiz3cDc3-val"></td>
                        <td id="hl04aeAllRC-HNaWlJYHEbU-val"></td>
                        <td id="hl04aeAllRC-e6SJ007Vl2n-val"></td>
                        <td id="hl04aeAllRC-HBIPIOr5OPF-val"></td>
                        <td id="hl04aeAllRC-nkPK7UlaIAK-val"></td>
                        <td id="hl04aeAllRC-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Catheter Change</td>
                        <td id="iM6R2Qcnvaj-PEeRslZLFyQ-val"></td>
                        <td id="iM6R2Qcnvaj-SVXVVsrMtFT-val"></td>
                        <td id="iM6R2Qcnvaj-QE4cD8Q5eH1-val"></td>
                        <td id="iM6R2Qcnvaj-uk1seOqA2kY-val"></td>
                        <td id="iM6R2Qcnvaj-j9xBW1OhdPL-val"></td>
                        <td id="iM6R2Qcnvaj-H0jVoZjaEQc-val"></td>
                        <td id="iM6R2Qcnvaj-rwvk7W12oqJ-val"></td>
                        <td id="iM6R2Qcnvaj-dCCHGs2tgzl-val"></td>
                        <td id="iM6R2Qcnvaj-qut5WjTBNT3-val"></td>
                        <td id="iM6R2Qcnvaj-GRLp8SxoHM5-val"></td>
                        <td id="iM6R2Qcnvaj-jjGiYe6GtY1-val"></td>
                        <td id="iM6R2Qcnvaj-NqLRdsWplFK-val"></td>
                        <td id="iM6R2Qcnvaj-yC7jMym8ru6-val"></td>
                        <td id="iM6R2Qcnvaj-qATls8jUAlx-val"></td>
                        <td id="iM6R2Qcnvaj-VV2rnyQQL5V-val"></td>
                        <td id="iM6R2Qcnvaj-zqrvur8vobZ-val"></td>
                        <td id="iM6R2Qcnvaj-kxpsiz3cDc3-val"></td>
                        <td id="iM6R2Qcnvaj-HNaWlJYHEbU-val"></td>
                        <td id="iM6R2Qcnvaj-e6SJ007Vl2n-val"></td>
                        <td id="iM6R2Qcnvaj-HBIPIOr5OPF-val"></td>
                        <td id="iM6R2Qcnvaj-nkPK7UlaIAK-val"></td>
                        <td id="iM6R2Qcnvaj-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Other</td>
                        <td id="OFYDWcGq84R-PEeRslZLFyQ-val"></td>
                        <td id="OFYDWcGq84R-SVXVVsrMtFT-val"></td>
                        <td id="OFYDWcGq84R-QE4cD8Q5eH1-val"></td>
                        <td id="OFYDWcGq84R-uk1seOqA2kY-val"></td>
                        <td id="OFYDWcGq84R-j9xBW1OhdPL-val"></td>
                        <td id="OFYDWcGq84R-H0jVoZjaEQc-val"></td>
                        <td id="OFYDWcGq84R-rwvk7W12oqJ-val"></td>
                        <td id="OFYDWcGq84R-dCCHGs2tgzl-val"></td>
                        <td id="OFYDWcGq84R-qut5WjTBNT3-val"></td>
                        <td id="OFYDWcGq84R-GRLp8SxoHM5-val"></td>
                        <td id="OFYDWcGq84R-jjGiYe6GtY1-val"></td>
                        <td id="OFYDWcGq84R-NqLRdsWplFK-val"></td>
                        <td id="OFYDWcGq84R-yC7jMym8ru6-val"></td>
                        <td id="OFYDWcGq84R-qATls8jUAlx-val"></td>
                        <td id="OFYDWcGq84R-VV2rnyQQL5V-val"></td>
                        <td id="OFYDWcGq84R-zqrvur8vobZ-val"></td>
                        <td id="OFYDWcGq84R-kxpsiz3cDc3-val"></td>
                        <td id="OFYDWcGq84R-HNaWlJYHEbU-val"></td>
                        <td id="OFYDWcGq84R-e6SJ007Vl2n-val"></td>
                        <td id="OFYDWcGq84R-HBIPIOr5OPF-val"></td>
                        <td id="OFYDWcGq84R-nkPK7UlaIAK-val"></td>
                        <td id="OFYDWcGq84R-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">7.7</td>
                        <td className="title">BMI Results</td>
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
                        <td>Underweight</td>
                        <td id="gUsE8WEhSZS-PEeRslZLFyQ-val"></td>
                        <td id="gUsE8WEhSZS-SVXVVsrMtFT-val"></td>
                        <td id="gUsE8WEhSZS-QE4cD8Q5eH1-val"></td>
                        <td id="gUsE8WEhSZS-uk1seOqA2kY-val"></td>
                        <td id="gUsE8WEhSZS-j9xBW1OhdPL-val"></td>
                        <td id="gUsE8WEhSZS-H0jVoZjaEQc-val"></td>
                        <td id="gUsE8WEhSZS-rwvk7W12oqJ-val"></td>
                        <td id="gUsE8WEhSZS-dCCHGs2tgzl-val"></td>
                        <td id="gUsE8WEhSZS-qut5WjTBNT3-val"></td>
                        <td id="gUsE8WEhSZS-GRLp8SxoHM5-val"></td>
                        <td id="gUsE8WEhSZS-jjGiYe6GtY1-val"></td>
                        <td id="gUsE8WEhSZS-NqLRdsWplFK-val"></td>
                        <td id="gUsE8WEhSZS-yC7jMym8ru6-val"></td>
                        <td id="gUsE8WEhSZS-qATls8jUAlx-val"></td>
                        <td id="gUsE8WEhSZS-VV2rnyQQL5V-val"></td>
                        <td id="gUsE8WEhSZS-zqrvur8vobZ-val"></td>
                        <td id="gUsE8WEhSZS-kxpsiz3cDc3-val"></td>
                        <td id="gUsE8WEhSZS-HNaWlJYHEbU-val"></td>
                        <td id="gUsE8WEhSZS-e6SJ007Vl2n-val"></td>
                        <td id="gUsE8WEhSZS-HBIPIOr5OPF-val"></td>
                        <td id="gUsE8WEhSZS-nkPK7UlaIAK-val"></td>
                        <td id="gUsE8WEhSZS-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Normal</td>
                        <td id="oNSlfBL46pi-PEeRslZLFyQ-val"></td>
                        <td id="oNSlfBL46pi-SVXVVsrMtFT-val"></td>
                        <td id="oNSlfBL46pi-QE4cD8Q5eH1-val"></td>
                        <td id="oNSlfBL46pi-uk1seOqA2kY-val"></td>
                        <td id="oNSlfBL46pi-j9xBW1OhdPL-val"></td>
                        <td id="oNSlfBL46pi-H0jVoZjaEQc-val"></td>
                        <td id="oNSlfBL46pi-rwvk7W12oqJ-val"></td>
                        <td id="oNSlfBL46pi-dCCHGs2tgzl-val"></td>
                        <td id="oNSlfBL46pi-qut5WjTBNT3-val"></td>
                        <td id="oNSlfBL46pi-GRLp8SxoHM5-val"></td>
                        <td id="oNSlfBL46pi-jjGiYe6GtY1-val"></td>
                        <td id="oNSlfBL46pi-NqLRdsWplFK-val"></td>
                        <td id="oNSlfBL46pi-yC7jMym8ru6-val"></td>
                        <td id="oNSlfBL46pi-qATls8jUAlx-val"></td>
                        <td id="oNSlfBL46pi-VV2rnyQQL5V-val"></td>
                        <td id="oNSlfBL46pi-zqrvur8vobZ-val"></td>
                        <td id="oNSlfBL46pi-kxpsiz3cDc3-val"></td>
                        <td id="oNSlfBL46pi-HNaWlJYHEbU-val"></td>
                        <td id="oNSlfBL46pi-e6SJ007Vl2n-val"></td>
                        <td id="oNSlfBL46pi-HBIPIOr5OPF-val"></td>
                        <td id="oNSlfBL46pi-nkPK7UlaIAK-val"></td>
                        <td id="oNSlfBL46pi-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Overweight</td>
                        <td id="DT1t7BwWa1E-PEeRslZLFyQ-val"></td>
                        <td id="DT1t7BwWa1E-SVXVVsrMtFT-val"></td>
                        <td id="DT1t7BwWa1E-QE4cD8Q5eH1-val"></td>
                        <td id="DT1t7BwWa1E-uk1seOqA2kY-val"></td>
                        <td id="DT1t7BwWa1E-j9xBW1OhdPL-val"></td>
                        <td id="DT1t7BwWa1E-H0jVoZjaEQc-val"></td>
                        <td id="DT1t7BwWa1E-rwvk7W12oqJ-val"></td>
                        <td id="DT1t7BwWa1E-dCCHGs2tgzl-val"></td>
                        <td id="DT1t7BwWa1E-qut5WjTBNT3-val"></td>
                        <td id="DT1t7BwWa1E-GRLp8SxoHM5-val"></td>
                        <td id="DT1t7BwWa1E-jjGiYe6GtY1-val"></td>
                        <td id="DT1t7BwWa1E-NqLRdsWplFK-val"></td>
                        <td id="DT1t7BwWa1E-yC7jMym8ru6-val"></td>
                        <td id="DT1t7BwWa1E-qATls8jUAlx-val"></td>
                        <td id="DT1t7BwWa1E-VV2rnyQQL5V-val"></td>
                        <td id="DT1t7BwWa1E-zqrvur8vobZ-val"></td>
                        <td id="DT1t7BwWa1E-kxpsiz3cDc3-val"></td>
                        <td id="DT1t7BwWa1E-HNaWlJYHEbU-val"></td>
                        <td id="DT1t7BwWa1E-e6SJ007Vl2n-val"></td>
                        <td id="DT1t7BwWa1E-HBIPIOr5OPF-val"></td>
                        <td id="DT1t7BwWa1E-nkPK7UlaIAK-val"></td>
                        <td id="DT1t7BwWa1E-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Obese</td>
                        <td id="aejgxHXRlsI-PEeRslZLFyQ-val"></td>
                        <td id="aejgxHXRlsI-SVXVVsrMtFT-val"></td>
                        <td id="aejgxHXRlsI-QE4cD8Q5eH1-val"></td>
                        <td id="aejgxHXRlsI-uk1seOqA2kY-val"></td>
                        <td id="aejgxHXRlsI-j9xBW1OhdPL-val"></td>
                        <td id="aejgxHXRlsI-H0jVoZjaEQc-val"></td>
                        <td id="aejgxHXRlsI-rwvk7W12oqJ-val"></td>
                        <td id="aejgxHXRlsI-dCCHGs2tgzl-val"></td>
                        <td id="aejgxHXRlsI-qut5WjTBNT3-val"></td>
                        <td id="aejgxHXRlsI-GRLp8SxoHM5-val"></td>
                        <td id="aejgxHXRlsI-jjGiYe6GtY1-val"></td>
                        <td id="aejgxHXRlsI-NqLRdsWplFK-val"></td>
                        <td id="aejgxHXRlsI-yC7jMym8ru6-val"></td>
                        <td id="aejgxHXRlsI-qATls8jUAlx-val"></td>
                        <td id="aejgxHXRlsI-VV2rnyQQL5V-val"></td>
                        <td id="aejgxHXRlsI-zqrvur8vobZ-val"></td>
                        <td id="aejgxHXRlsI-kxpsiz3cDc3-val"></td>
                        <td id="aejgxHXRlsI-HNaWlJYHEbU-val"></td>
                        <td id="aejgxHXRlsI-e6SJ007Vl2n-val"></td>
                        <td id="aejgxHXRlsI-HBIPIOr5OPF-val"></td>
                        <td id="aejgxHXRlsI-nkPK7UlaIAK-val"></td>
                        <td id="aejgxHXRlsI-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">7.8</td>
                        <td className="title">Dressings</td>
                        <td id="hOazk6aRnWC-PEeRslZLFyQ-val"></td>
                        <td id="hOazk6aRnWC-SVXVVsrMtFT-val"></td>
                        <td id="hOazk6aRnWC-QE4cD8Q5eH1-val"></td>
                        <td id="hOazk6aRnWC-uk1seOqA2kY-val"></td>
                        <td id="hOazk6aRnWC-j9xBW1OhdPL-val"></td>
                        <td id="hOazk6aRnWC-H0jVoZjaEQc-val"></td>
                        <td id="hOazk6aRnWC-rwvk7W12oqJ-val"></td>
                        <td id="hOazk6aRnWC-dCCHGs2tgzl-val"></td>
                        <td id="hOazk6aRnWC-qut5WjTBNT3-val"></td>
                        <td id="hOazk6aRnWC-GRLp8SxoHM5-val"></td>
                        <td id="hOazk6aRnWC-jjGiYe6GtY1-val"></td>
                        <td id="hOazk6aRnWC-NqLRdsWplFK-val"></td>
                        <td id="hOazk6aRnWC-yC7jMym8ru6-val"></td>
                        <td id="hOazk6aRnWC-qATls8jUAlx-val"></td>
                        <td id="hOazk6aRnWC-VV2rnyQQL5V-val"></td>
                        <td id="hOazk6aRnWC-zqrvur8vobZ-val"></td>
                        <td id="hOazk6aRnWC-kxpsiz3cDc3-val"></td>
                        <td id="hOazk6aRnWC-HNaWlJYHEbU-val"></td>
                        <td id="hOazk6aRnWC-e6SJ007Vl2n-val"></td>
                        <td id="hOazk6aRnWC-HBIPIOr5OPF-val"></td>
                        <td id="hOazk6aRnWC-nkPK7UlaIAK-val"></td>
                        <td id="hOazk6aRnWC-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">7.9</td>
                        <td className="title">Dermatology Services</td>
                        <td id="vi9Cm2ILqXw-PEeRslZLFyQ-val"></td>
                        <td id="vi9Cm2ILqXw-SVXVVsrMtFT-val"></td>
                        <td id="vi9Cm2ILqXw-QE4cD8Q5eH1-val"></td>
                        <td id="vi9Cm2ILqXw-uk1seOqA2kY-val"></td>
                        <td id="vi9Cm2ILqXw-j9xBW1OhdPL-val"></td>
                        <td id="vi9Cm2ILqXw-H0jVoZjaEQc-val"></td>
                        <td id="vi9Cm2ILqXw-rwvk7W12oqJ-val"></td>
                        <td id="vi9Cm2ILqXw-dCCHGs2tgzl-val"></td>
                        <td id="vi9Cm2ILqXw-qut5WjTBNT3-val"></td>
                        <td id="vi9Cm2ILqXw-GRLp8SxoHM5-val"></td>
                        <td id="vi9Cm2ILqXw-jjGiYe6GtY1-val"></td>
                        <td id="vi9Cm2ILqXw-NqLRdsWplFK-val"></td>
                        <td id="vi9Cm2ILqXw-yC7jMym8ru6-val"></td>
                        <td id="vi9Cm2ILqXw-qATls8jUAlx-val"></td>
                        <td id="vi9Cm2ILqXw-VV2rnyQQL5V-val"></td>
                        <td id="vi9Cm2ILqXw-zqrvur8vobZ-val"></td>
                        <td id="vi9Cm2ILqXw-kxpsiz3cDc3-val"></td>
                        <td id="vi9Cm2ILqXw-HNaWlJYHEbU-val"></td>
                        <td id="vi9Cm2ILqXw-e6SJ007Vl2n-val"></td>
                        <td id="vi9Cm2ILqXw-HBIPIOr5OPF-val"></td>
                        <td id="vi9Cm2ILqXw-nkPK7UlaIAK-val"></td>
                        <td id="vi9Cm2ILqXw-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">7.10</td>
                        <td>(a) Return Clinic Visits This year</td>
                        <td id="r02ylstU2EU-PEeRslZLFyQ-val"></td>
                        <td id="r02ylstU2EU-SVXVVsrMtFT-val"></td>
                        <td id="r02ylstU2EU-QE4cD8Q5eH1-val"></td>
                        <td id="r02ylstU2EU-uk1seOqA2kY-val"></td>
                        <td id="r02ylstU2EU-j9xBW1OhdPL-val"></td>
                        <td id="r02ylstU2EU-H0jVoZjaEQc-val"></td>
                        <td id="r02ylstU2EU-rwvk7W12oqJ-val"></td>
                        <td id="r02ylstU2EU-dCCHGs2tgzl-val"></td>
                        <td id="r02ylstU2EU-qut5WjTBNT3-val"></td>
                        <td id="r02ylstU2EU-GRLp8SxoHM5-val"></td>
                        <td id="r02ylstU2EU-jjGiYe6GtY1-val"></td>
                        <td id="r02ylstU2EU-NqLRdsWplFK-val"></td>
                        <td id="r02ylstU2EU-yC7jMym8ru6-val"></td>
                        <td id="r02ylstU2EU-qATls8jUAlx-val"></td>
                        <td id="r02ylstU2EU-VV2rnyQQL5V-val"></td>
                        <td id="r02ylstU2EU-zqrvur8vobZ-val"></td>
                        <td id="r02ylstU2EU-kxpsiz3cDc3-val"></td>
                        <td id="r02ylstU2EU-HNaWlJYHEbU-val"></td>
                        <td id="r02ylstU2EU-e6SJ007Vl2n-val"></td>
                        <td id="r02ylstU2EU-HBIPIOr5OPF-val"></td>
                        <td id="r02ylstU2EU-nkPK7UlaIAK-val"></td>
                        <td id="r02ylstU2EU-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="title">(b) Total Clinic visits</td>
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
                        <td className="title">7.11</td>
                        <td className="title">Home visits</td>
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
                        <td>(a) First home visit this year</td>
                        <td id="BD6knTESyEi-PEeRslZLFyQ-val"></td>
                        <td id="BD6knTESyEi-SVXVVsrMtFT-val"></td>
                        <td id="BD6knTESyEi-QE4cD8Q5eH1-val"></td>
                        <td id="BD6knTESyEi-uk1seOqA2kY-val"></td>
                        <td id="BD6knTESyEi-j9xBW1OhdPL-val"></td>
                        <td id="BD6knTESyEi-H0jVoZjaEQc-val"></td>
                        <td id="BD6knTESyEi-rwvk7W12oqJ-val"></td>
                        <td id="BD6knTESyEi-dCCHGs2tgzl-val"></td>
                        <td id="BD6knTESyEi-qut5WjTBNT3-val"></td>
                        <td id="BD6knTESyEi-GRLp8SxoHM5-val"></td>
                        <td id="BD6knTESyEi-jjGiYe6GtY1-val"></td>
                        <td id="BD6knTESyEi-NqLRdsWplFK-val"></td>
                        <td id="BD6knTESyEi-yC7jMym8ru6-val"></td>
                        <td id="BD6knTESyEi-qATls8jUAlx-val"></td>
                        <td id="BD6knTESyEi-VV2rnyQQL5V-val"></td>
                        <td id="BD6knTESyEi-zqrvur8vobZ-val"></td>
                        <td id="BD6knTESyEi-kxpsiz3cDc3-val"></td>
                        <td id="BD6knTESyEi-HNaWlJYHEbU-val"></td>
                        <td id="BD6knTESyEi-e6SJ007Vl2n-val"></td>
                        <td id="BD6knTESyEi-HBIPIOr5OPF-val"></td>
                        <td id="BD6knTESyEi-nkPK7UlaIAK-val"></td>
                        <td id="BD6knTESyEi-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(b) Return home visit this year</td>
                        <td id="Ysh5ItxODrw-PEeRslZLFyQ-val"></td>
                        <td id="Ysh5ItxODrw-SVXVVsrMtFT-val"></td>
                        <td id="Ysh5ItxODrw-QE4cD8Q5eH1-val"></td>
                        <td id="Ysh5ItxODrw-uk1seOqA2kY-val"></td>
                        <td id="Ysh5ItxODrw-j9xBW1OhdPL-val"></td>
                        <td id="Ysh5ItxODrw-H0jVoZjaEQc-val"></td>
                        <td id="Ysh5ItxODrw-rwvk7W12oqJ-val"></td>
                        <td id="Ysh5ItxODrw-dCCHGs2tgzl-val"></td>
                        <td id="Ysh5ItxODrw-qut5WjTBNT3-val"></td>
                        <td id="Ysh5ItxODrw-GRLp8SxoHM5-val"></td>
                        <td id="Ysh5ItxODrw-jjGiYe6GtY1-val"></td>
                        <td id="Ysh5ItxODrw-NqLRdsWplFK-val"></td>
                        <td id="Ysh5ItxODrw-yC7jMym8ru6-val"></td>
                        <td id="Ysh5ItxODrw-qATls8jUAlx-val"></td>
                        <td id="Ysh5ItxODrw-VV2rnyQQL5V-val"></td>
                        <td id="Ysh5ItxODrw-zqrvur8vobZ-val"></td>
                        <td id="Ysh5ItxODrw-kxpsiz3cDc3-val"></td>
                        <td id="Ysh5ItxODrw-HNaWlJYHEbU-val"></td>
                        <td id="Ysh5ItxODrw-e6SJ007Vl2n-val"></td>
                        <td id="Ysh5ItxODrw-HBIPIOr5OPF-val"></td>
                        <td id="Ysh5ItxODrw-nkPK7UlaIAK-val"></td>
                        <td id="Ysh5ItxODrw-hTzEOB8oY3j-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="title">(c) Total home visits</td>
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
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>)
    }
}

