import React from "react";
import Fetch from "../model/Fetch";
import config from "../model/config.json";

export default class ChildrenAndAdolescentServicesReport extends React.Component {
    constructor(props) {
        super(props);
        this.css = `table{border-collapse:collapse;width:99%}table,td{padding:2!important;text-align:center;border:1px solid #BDBDBD}table tr:nth-child(1){color:#fff;font-weight:700;text-align:center;font-size:20px;background-color:#66BB6A}table tr:nth-child(2),table tr:nth-child(3),table tr:nth-child(4){text-align:center;font-weight:700;background-color:#FFD54F}table tr:nth-child(4) td{text-align:center;width:8%}table tr:nth-child(n+5) td:nth-child(1),table tr:nth-child(n+5) td:nth-child(2){text-align:left;background-color:#B2EBF2}.title{font-weight:700}input{width:70%!important}`;
        this.fetch = new Fetch();
    }

    loadData = () => {
        $("td[id*=val]").each((index, element) => {
            $(element).html("");
        });

        if (this.props.param.hasOwnProperty("ouId") === false) {
            return;
        }

        this.api = `${config.baseUrl}/api/analytics.json?dimension=dx:oaIBmNmOFK4;tTUsDF6zh4v;joJjinadn8q;Teylsq2fp0P;W7T2ZxM6I6h;WOJRnKyvQC3;VOT6HWt1if9;cYyx5NnrkDt;v26mNlBOKKd;Hi1J8h6cbjr;mjWjdvVMEH4;kl2HbjKJJbp;impZbA0ZbZI;aXJA04UeVrb;FFROArzM30i;zO8tMq9xX3p;EG7D1G2vRRT;Sn6n3hobQZF;OpPyTOtov7G;eBYsXDCIcfM;V2JZjari5zE;laG5TieHnND;Mj3xiwgSv00;foUMtrT6um2;VEEVv9E5kvK;T6FJmF5i3zr;cPnjcMyMTYF;xGBWuuwXiw1;kXHO67iwQVp;K8RXNijYZKi;pteQUy9QgTP&dimension=co&filter=pe:${this.props.param.pe}&filter=ou:${this.props.param.ouId}`;
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
                        <td colSpan="10">SERVICES TO SCHOOL-AGED CHILDREN AND ADOLESCENTS<br/>{this.props.param.ouName}<br/>{this.props.param.peText}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" rowSpan="3">SERVICE</td>
                        <td colSpan="8">AGE GROUP</td>
                    </tr>
                    <tr>
                        <td colSpan="2">5-9</td>
                        <td colSpan="2">10-14</td>
                        <td colSpan="2">15-19</td>
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
                    </tr>
                    <tr>
                        <td className="title">6.1</td>
                        <td className="title">Clinic visits by age group</td>
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
                        <td>First visit this year</td>
                        <td id="oaIBmNmOFK4-TBIX5ACTwmu-val"></td>
                        <td id="oaIBmNmOFK4-Ff6QcTWrI3S-val"></td>
                        <td id="oaIBmNmOFK4-astq56bBwq8-val"></td>
                        <td id="oaIBmNmOFK4-ZcFvtYAIRM6-val"></td>
                        <td id="oaIBmNmOFK4-sRobVpJRnZg-val"></td>
                        <td id="oaIBmNmOFK4-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Return visits this year</td>
                        <td id="VEEVv9E5kvK-TBIX5ACTwmu-val"></td>
                        <td id="VEEVv9E5kvK-Ff6QcTWrI3S-val"></td>
                        <td id="VEEVv9E5kvK-astq56bBwq8-val"></td>
                        <td id="VEEVv9E5kvK-ZcFvtYAIRM6-val"></td>
                        <td id="VEEVv9E5kvK-sRobVpJRnZg-val"></td>
                        <td id="VEEVv9E5kvK-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total clinic visits</td>
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
                        <td className="title">6.2</td>
                        <td className="title">a) Diseases or conditions first detected or reported this year</td>
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
                        <td>Skin condition</td>
                        <td id="xGBWuuwXiw1-TBIX5ACTwmu-val"></td>
                        <td id="xGBWuuwXiw1-Ff6QcTWrI3S-val"></td>
                        <td id="xGBWuuwXiw1-astq56bBwq8-val"></td>
                        <td id="xGBWuuwXiw1-ZcFvtYAIRM6-val"></td>
                        <td id="xGBWuuwXiw1-sRobVpJRnZg-val"></td>
                        <td id="xGBWuuwXiw1-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>URTI</td>
                        <td id="K8RXNijYZKi-TBIX5ACTwmu-val"></td>
                        <td id="K8RXNijYZKi-Ff6QcTWrI3S-val"></td>
                        <td id="K8RXNijYZKi-astq56bBwq8-val"></td>
                        <td id="K8RXNijYZKi-ZcFvtYAIRM6-val"></td>
                        <td id="K8RXNijYZKi-sRobVpJRnZg-val"></td>
                        <td id="K8RXNijYZKi-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Eye infection</td>
                        <td id="Hi1J8h6cbjr-TBIX5ACTwmu-val"></td>
                        <td id="Hi1J8h6cbjr-Ff6QcTWrI3S-val"></td>
                        <td id="Hi1J8h6cbjr-astq56bBwq8-val"></td>
                        <td id="Hi1J8h6cbjr-ZcFvtYAIRM6-val"></td>
                        <td id="Hi1J8h6cbjr-sRobVpJRnZg-val"></td>
                        <td id="Hi1J8h6cbjr-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Obesity</td>
                        <td id="zO8tMq9xX3p-TBIX5ACTwmu-val"></td>
                        <td id="zO8tMq9xX3p-Ff6QcTWrI3S-val"></td>
                        <td id="zO8tMq9xX3p-astq56bBwq8-val"></td>
                        <td id="zO8tMq9xX3p-ZcFvtYAIRM6-val"></td>
                        <td id="zO8tMq9xX3p-sRobVpJRnZg-val"></td>
                        <td id="zO8tMq9xX3p-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Diabetes</td>
                        <td id="cYyx5NnrkDt-TBIX5ACTwmu-val"></td>
                        <td id="cYyx5NnrkDt-Ff6QcTWrI3S-val"></td>
                        <td id="cYyx5NnrkDt-astq56bBwq8-val"></td>
                        <td id="cYyx5NnrkDt-ZcFvtYAIRM6-val"></td>
                        <td id="cYyx5NnrkDt-sRobVpJRnZg-val"></td>
                        <td id="cYyx5NnrkDt-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Hypertension</td>
                        <td id="impZbA0ZbZI-TBIX5ACTwmu-val"></td>
                        <td id="impZbA0ZbZI-Ff6QcTWrI3S-val"></td>
                        <td id="impZbA0ZbZI-astq56bBwq8-val"></td>
                        <td id="impZbA0ZbZI-ZcFvtYAIRM6-val"></td>
                        <td id="impZbA0ZbZI-sRobVpJRnZg-val"></td>
                        <td id="impZbA0ZbZI-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Psychogenic problem</td>
                        <td id="Mj3xiwgSv00-TBIX5ACTwmu-val"></td>
                        <td id="Mj3xiwgSv00-Ff6QcTWrI3S-val"></td>
                        <td id="Mj3xiwgSv00-astq56bBwq8-val"></td>
                        <td id="Mj3xiwgSv00-ZcFvtYAIRM6-val"></td>
                        <td id="Mj3xiwgSv00-sRobVpJRnZg-val"></td>
                        <td id="Mj3xiwgSv00-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Accidents and injuries - Traffic</td>
                        <td id="Teylsq2fp0P-TBIX5ACTwmu-val"></td>
                        <td id="Teylsq2fp0P-Ff6QcTWrI3S-val"></td>
                        <td id="Teylsq2fp0P-astq56bBwq8-val"></td>
                        <td id="Teylsq2fp0P-ZcFvtYAIRM6-val"></td>
                        <td id="Teylsq2fp0P-sRobVpJRnZg-val"></td>
                        <td id="Teylsq2fp0P-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Accidents and injuries - Home</td>
                        <td id="tTUsDF6zh4v-TBIX5ACTwmu-val"></td>
                        <td id="tTUsDF6zh4v-Ff6QcTWrI3S-val"></td>
                        <td id="tTUsDF6zh4v-astq56bBwq8-val"></td>
                        <td id="tTUsDF6zh4v-ZcFvtYAIRM6-val"></td>
                        <td id="tTUsDF6zh4v-sRobVpJRnZg-val"></td>
                        <td id="tTUsDF6zh4v-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Accidents and injuries - Other and unspec.</td>
                        <td id="joJjinadn8q-TBIX5ACTwmu-val"></td>
                        <td id="joJjinadn8q-Ff6QcTWrI3S-val"></td>
                        <td id="joJjinadn8q-astq56bBwq8-val"></td>
                        <td id="joJjinadn8q-ZcFvtYAIRM6-val"></td>
                        <td id="joJjinadn8q-sRobVpJRnZg-val"></td>
                        <td id="joJjinadn8q-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Other</td>
                        <td id="eBYsXDCIcfM-TBIX5ACTwmu-val"></td>
                        <td id="eBYsXDCIcfM-Ff6QcTWrI3S-val"></td>
                        <td id="eBYsXDCIcfM-astq56bBwq8-val"></td>
                        <td id="eBYsXDCIcfM-ZcFvtYAIRM6-val"></td>
                        <td id="eBYsXDCIcfM-sRobVpJRnZg-val"></td>
                        <td id="eBYsXDCIcfM-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">6.3</td>
                        <td className="title">(b) Patients with symptoms, signs and ill-defined conditions</td>
                        <td id="laG5TieHnND-TBIX5ACTwmu-val"></td>
                        <td id="laG5TieHnND-Ff6QcTWrI3S-val"></td>
                        <td id="laG5TieHnND-astq56bBwq8-val"></td>
                        <td id="laG5TieHnND-ZcFvtYAIRM6-val"></td>
                        <td id="laG5TieHnND-sRobVpJRnZg-val"></td>
                        <td id="laG5TieHnND-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6.4</td>
                        <td>Dental</td>
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
                        <td>Age group examined first time this year</td>
                        <td id="W7T2ZxM6I6h-TBIX5ACTwmu-val"></td>
                        <td id="W7T2ZxM6I6h-Ff6QcTWrI3S-val"></td>
                        <td id="W7T2ZxM6I6h-astq56bBwq8-val"></td>
                        <td id="W7T2ZxM6I6h-ZcFvtYAIRM6-val"></td>
                        <td id="W7T2ZxM6I6h-sRobVpJRnZg-val"></td>
                        <td id="W7T2ZxM6I6h-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Of those with problem detected first time this year</td>
                        <td id="OpPyTOtov7G-TBIX5ACTwmu-val"></td>
                        <td id="OpPyTOtov7G-Ff6QcTWrI3S-val"></td>
                        <td id="OpPyTOtov7G-astq56bBwq8-val"></td>
                        <td id="OpPyTOtov7G-ZcFvtYAIRM6-val"></td>
                        <td id="OpPyTOtov7G-sRobVpJRnZg-val"></td>
                        <td id="OpPyTOtov7G-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Of those treated first time this year</td>
                        <td id="EG7D1G2vRRT-TBIX5ACTwmu-val"></td>
                        <td id="EG7D1G2vRRT-Ff6QcTWrI3S-val"></td>
                        <td id="EG7D1G2vRRT-astq56bBwq8-val"></td>
                        <td id="EG7D1G2vRRT-ZcFvtYAIRM6-val"></td>
                        <td id="EG7D1G2vRRT-sRobVpJRnZg-val"></td>
                        <td id="EG7D1G2vRRT-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">6.5</td>
                        <td className="title">School Health</td>
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
                        <td>Total number of school entrants in School in area</td>
                        <td id="kXHO67iwQVp-TBIX5ACTwmu-val"></td>
                        <td id="kXHO67iwQVp-Ff6QcTWrI3S-val"></td>
                        <td id="kXHO67iwQVp-astq56bBwq8-val"></td>
                        <td id="kXHO67iwQVp-ZcFvtYAIRM6-val"></td>
                        <td id="kXHO67iwQVp-sRobVpJRnZg-val"></td>
                        <td id="kXHO67iwQVp-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>School entrants visited in schools first time this school year</td>
                        <td id="cPnjcMyMTYF-TBIX5ACTwmu-val"></td>
                        <td id="cPnjcMyMTYF-Ff6QcTWrI3S-val"></td>
                        <td id="cPnjcMyMTYF-astq56bBwq8-val"></td>
                        <td id="cPnjcMyMTYF-ZcFvtYAIRM6-val"></td>
                        <td id="cPnjcMyMTYF-sRobVpJRnZg-val"></td>
                        <td id="cPnjcMyMTYF-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>School entrants checked first time for immunization status</td>
                        <td id="T6FJmF5i3zr-TBIX5ACTwmu-val"></td>
                        <td id="T6FJmF5i3zr-Ff6QcTWrI3S-val"></td>
                        <td id="T6FJmF5i3zr-astq56bBwq8-val"></td>
                        <td id="T6FJmF5i3zr-ZcFvtYAIRM6-val"></td>
                        <td id="T6FJmF5i3zr-sRobVpJRnZg-val"></td>
                        <td id="T6FJmF5i3zr-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Of those with complete immunization prior to school entrance</td>
                        <td id="Sn6n3hobQZF-TBIX5ACTwmu-val"></td>
                        <td id="Sn6n3hobQZF-Ff6QcTWrI3S-val"></td>
                        <td id="Sn6n3hobQZF-astq56bBwq8-val"></td>
                        <td id="Sn6n3hobQZF-ZcFvtYAIRM6-val"></td>
                        <td id="Sn6n3hobQZF-sRobVpJRnZg-val"></td>
                        <td id="Sn6n3hobQZF-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">6.6</td>
                        <td className="title">Eye Screening</td>
                        <td id="mjWjdvVMEH4-TBIX5ACTwmu-val"></td>
                        <td id="mjWjdvVMEH4-Ff6QcTWrI3S-val"></td>
                        <td id="mjWjdvVMEH4-astq56bBwq8-val"></td>
                        <td id="mjWjdvVMEH4-ZcFvtYAIRM6-val"></td>
                        <td id="mjWjdvVMEH4-sRobVpJRnZg-val"></td>
                        <td id="mjWjdvVMEH4-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">6.7</td>
                        <td className="title">BMI</td>
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
                        <td>(a) Underweight</td>
                        <td id="pteQUy9QgTP-TBIX5ACTwmu-val"></td>
                        <td id="pteQUy9QgTP-Ff6QcTWrI3S-val"></td>
                        <td id="pteQUy9QgTP-astq56bBwq8-val"></td>
                        <td id="pteQUy9QgTP-ZcFvtYAIRM6-val"></td>
                        <td id="pteQUy9QgTP-sRobVpJRnZg-val"></td>
                        <td id="pteQUy9QgTP-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(b) Normal</td>
                        <td id="aXJA04UeVrb-TBIX5ACTwmu-val"></td>
                        <td id="aXJA04UeVrb-Ff6QcTWrI3S-val"></td>
                        <td id="aXJA04UeVrb-astq56bBwq8-val"></td>
                        <td id="aXJA04UeVrb-ZcFvtYAIRM6-val"></td>
                        <td id="aXJA04UeVrb-sRobVpJRnZg-val"></td>
                        <td id="aXJA04UeVrb-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(c) Overweight</td>
                        <td id="V2JZjari5zE-TBIX5ACTwmu-val"></td>
                        <td id="V2JZjari5zE-Ff6QcTWrI3S-val"></td>
                        <td id="V2JZjari5zE-astq56bBwq8-val"></td>
                        <td id="V2JZjari5zE-ZcFvtYAIRM6-val"></td>
                        <td id="V2JZjari5zE-sRobVpJRnZg-val"></td>
                        <td id="V2JZjari5zE-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(d) Obese</td>
                        <td id="FFROArzM30i-TBIX5ACTwmu-val"></td>
                        <td id="FFROArzM30i-Ff6QcTWrI3S-val"></td>
                        <td id="FFROArzM30i-astq56bBwq8-val"></td>
                        <td id="FFROArzM30i-ZcFvtYAIRM6-val"></td>
                        <td id="FFROArzM30i-sRobVpJRnZg-val"></td>
                        <td id="FFROArzM30i-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">6.8</td>
                        <td className="title">Children referred to Specialist or Hospital</td>
                        <td id="WOJRnKyvQC3-TBIX5ACTwmu-val"></td>
                        <td id="WOJRnKyvQC3-Ff6QcTWrI3S-val"></td>
                        <td id="WOJRnKyvQC3-astq56bBwq8-val"></td>
                        <td id="WOJRnKyvQC3-ZcFvtYAIRM6-val"></td>
                        <td id="WOJRnKyvQC3-sRobVpJRnZg-val"></td>
                        <td id="WOJRnKyvQC3-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">6.9</td>
                        <td className="title">Dressings</td>
                        <td id="v26mNlBOKKd-TBIX5ACTwmu-val"></td>
                        <td id="v26mNlBOKKd-Ff6QcTWrI3S-val"></td>
                        <td id="v26mNlBOKKd-astq56bBwq8-val"></td>
                        <td id="v26mNlBOKKd-ZcFvtYAIRM6-val"></td>
                        <td id="v26mNlBOKKd-sRobVpJRnZg-val"></td>
                        <td id="v26mNlBOKKd-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">6.10</td>
                        <td className="title">Dermatology Services</td>
                        <td id="VOT6HWt1if9-TBIX5ACTwmu-val"></td>
                        <td id="VOT6HWt1if9-Ff6QcTWrI3S-val"></td>
                        <td id="VOT6HWt1if9-astq56bBwq8-val"></td>
                        <td id="VOT6HWt1if9-ZcFvtYAIRM6-val"></td>
                        <td id="VOT6HWt1if9-sRobVpJRnZg-val"></td>
                        <td id="VOT6HWt1if9-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">6.11</td>
                        <td className="title">Home Visits to Age group</td>
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
                        <td>First visits this year</td>
                        <td id="kl2HbjKJJbp-TBIX5ACTwmu-val"></td>
                        <td id="kl2HbjKJJbp-Ff6QcTWrI3S-val"></td>
                        <td id="kl2HbjKJJbp-astq56bBwq8-val"></td>
                        <td id="kl2HbjKJJbp-ZcFvtYAIRM6-val"></td>
                        <td id="kl2HbjKJJbp-sRobVpJRnZg-val"></td>
                        <td id="kl2HbjKJJbp-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Return visits this year</td>
                        <td id="foUMtrT6um2-TBIX5ACTwmu-val"></td>
                        <td id="foUMtrT6um2-Ff6QcTWrI3S-val"></td>
                        <td id="foUMtrT6um2-astq56bBwq8-val"></td>
                        <td id="foUMtrT6um2-ZcFvtYAIRM6-val"></td>
                        <td id="foUMtrT6um2-sRobVpJRnZg-val"></td>
                        <td id="foUMtrT6um2-suqbvBo6PxE-val"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total Home Visit</td>
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

