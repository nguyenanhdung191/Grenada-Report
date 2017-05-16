import React from "react";
import Fetch from "../model/Fetch";
import config from "../model/config.json";

export default class AntenatalServicesReport extends React.Component {
    constructor(props) {
        super(props);
        this.css = `table{border-collapse:collapse;width:99%}table,td{text-align:center;border:1px solid #BDBDBD}table tr:nth-child(1){color:#fff;font-weight:700;text-align:center;font-size:20px;background-color:#66BB6A}table tr:nth-child(2),table tr:nth-child(3){text-align:center;font-weight:700;background-color:#FFD54F}table tr:nth-child(3) td{text-align:center;width:7%}table tr:nth-child(n+4) td:nth-child(1),table tr:nth-child(n+4) td:nth-child(2){text-align:left;background-color:#B2EBF2}.title{font-weight:700}input{width:70%!important}`;
        this.fetch = new Fetch();
    }

    loadData = () => {
        $("td[id*=val]").each((index, element) => {
            $(element).html("");
        });

        if (this.props.param.hasOwnProperty("ouId") === false) {
            return;
        }

        this.api = `${config.baseUrl}/api/analytics.json?dimension=dx:KZIUZIBuMYu;DDmUj3bHyRm;Ecd7F4r5doJ;hMRQD2DmhVT;t6uflgtVVtz;kcCKRZruQMf;hNkducMAyTw;pLKUU2RDTv6;wDX1OaoKVqs;mpqUvxIAEFf;UuYsMA4SSmN;M3aBJ0ZAptb;rZLPfFSc02G;ergQSWtlltZ;L7GdFN2recJ;Vyx9X2YIwI2;yqET9L11jsN;Dt4NE0iwxlR;ljhFoM6DbuA;aak2YSGSX4C;h8jPNpiT04G;NaMzsjsFKH8;Hrf1E0GQ1hg;AkdKtyGdz67;hEc1FmY06rc;i3vPgT70Egg;RBTAaDl7LhW;H3Ox1L8eiQK;ZyAhRhfd1vZ;p17UjolEcZA;VcSxcA4EjNw;krXwBLdF0aE;MyGnJUy1uW3;tEeC0bs31LG;AcIo7b2Uumy;zH1VhHneU13;rn0UjIzswPw;E1Avaa0qBoh;s57SAjuDIBV;wvsS5PcEBxN&dimension=co&filter=pe:${this.props.param.pe}&filter=ou:${this.props.param.ouId}`;
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
                        <td colSpan="12">ANTENATAL SERVICE<br/>{this.props.param.ouName}<br/>{this.props.param.peText}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" rowSpan="2">SERVICE</td>
                        <td colSpan="10">AGE GROUP</td>
                    </tr>
                    <tr>
                        <td>&lt;15</td>
                        <td>15-19</td>
                        <td>20-24</td>
                        <td>25-29</td>
                        <td>30-34</td>
                        <td>35-39</td>
                        <td>40-44</td>
                        <td>45+</td>
                        <td>UnKn.</td>
                        <td>Total</td>
                    </tr>
                    <tr>
                        <td className="title">1.1</td>
                        <td className="title">First Clinic Visit this pregnancy by Age:</td>
                        <td id="UuYsMA4SSmN-wIGZU5DqMye-val"></td>
                        <td id="UuYsMA4SSmN-MhQAYE0y8W0-val"></td>
                        <td id="UuYsMA4SSmN-icsjvMtUOw5-val"></td>
                        <td id="UuYsMA4SSmN-uvIQwDJh3yy-val"></td>
                        <td id="UuYsMA4SSmN-rM9TKCUtpuY-val"></td>
                        <td id="UuYsMA4SSmN-aBkDCq6x6mb-val"></td>
                        <td id="UuYsMA4SSmN-haRNXFw12wq-val"></td>
                        <td id="UuYsMA4SSmN-geJToILFSZG-val"></td>
                        <td id="UuYsMA4SSmN-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">1.2</td>
                        <td className="title">Gravidity</td>
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
                        <td>1st</td>
                        <td id="yqET9L11jsN-wIGZU5DqMye-val"></td>
                        <td id="yqET9L11jsN-MhQAYE0y8W0-val"></td>
                        <td id="yqET9L11jsN-icsjvMtUOw5-val"></td>
                        <td id="yqET9L11jsN-uvIQwDJh3yy-val"></td>
                        <td id="yqET9L11jsN-rM9TKCUtpuY-val"></td>
                        <td id="yqET9L11jsN-aBkDCq6x6mb-val"></td>
                        <td id="yqET9L11jsN-haRNXFw12wq-val"></td>
                        <td id="yqET9L11jsN-geJToILFSZG-val"></td>
                        <td id="yqET9L11jsN-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>2nd - 4th</td>
                        <td id="Dt4NE0iwxlR-wIGZU5DqMye-val"></td>
                        <td id="Dt4NE0iwxlR-MhQAYE0y8W0-val"></td>
                        <td id="Dt4NE0iwxlR-icsjvMtUOw5-val"></td>
                        <td id="Dt4NE0iwxlR-uvIQwDJh3yy-val"></td>
                        <td id="Dt4NE0iwxlR-rM9TKCUtpuY-val"></td>
                        <td id="Dt4NE0iwxlR-aBkDCq6x6mb-val"></td>
                        <td id="Dt4NE0iwxlR-haRNXFw12wq-val"></td>
                        <td id="Dt4NE0iwxlR-geJToILFSZG-val"></td>
                        <td id="Dt4NE0iwxlR-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>5th or higher</td>
                        <td id="ljhFoM6DbuA-wIGZU5DqMye-val"></td>
                        <td id="ljhFoM6DbuA-MhQAYE0y8W0-val"></td>
                        <td id="ljhFoM6DbuA-icsjvMtUOw5-val"></td>
                        <td id="ljhFoM6DbuA-uvIQwDJh3yy-val"></td>
                        <td id="ljhFoM6DbuA-rM9TKCUtpuY-val"></td>
                        <td id="ljhFoM6DbuA-aBkDCq6x6mb-val"></td>
                        <td id="ljhFoM6DbuA-haRNXFw12wq-val"></td>
                        <td id="ljhFoM6DbuA-geJToILFSZG-val"></td>
                        <td id="ljhFoM6DbuA-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Not known</td>
                        <td id="aak2YSGSX4C-wIGZU5DqMye-val"></td>
                        <td id="aak2YSGSX4C-MhQAYE0y8W0-val"></td>
                        <td id="aak2YSGSX4C-icsjvMtUOw5-val"></td>
                        <td id="aak2YSGSX4C-uvIQwDJh3yy-val"></td>
                        <td id="aak2YSGSX4C-rM9TKCUtpuY-val"></td>
                        <td id="aak2YSGSX4C-aBkDCq6x6mb-val"></td>
                        <td id="aak2YSGSX4C-haRNXFw12wq-val"></td>
                        <td id="aak2YSGSX4C-geJToILFSZG-val"></td>
                        <td id="aak2YSGSX4C-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total Gravidity</td>
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
                        <td className="title">1.3</td>
                        <td className="title">Gestation at first visit anywhere (incl. physician)</td>
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
                        <td>(a) 12 weeks or less</td>
                        <td id="rZLPfFSc02G-wIGZU5DqMye-val"></td>
                        <td id="rZLPfFSc02G-MhQAYE0y8W0-val"></td>
                        <td id="rZLPfFSc02G-icsjvMtUOw5-val"></td>
                        <td id="rZLPfFSc02G-uvIQwDJh3yy-val"></td>
                        <td id="rZLPfFSc02G-rM9TKCUtpuY-val"></td>
                        <td id="rZLPfFSc02G-aBkDCq6x6mb-val"></td>
                        <td id="rZLPfFSc02G-haRNXFw12wq-val"></td>
                        <td id="rZLPfFSc02G-geJToILFSZG-val"></td>
                        <td id="rZLPfFSc02G-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(b) 13-16 weeks</td>
                        <td id="ergQSWtlltZ-wIGZU5DqMye-val"></td>
                        <td id="ergQSWtlltZ-MhQAYE0y8W0-val"></td>
                        <td id="ergQSWtlltZ-icsjvMtUOw5-val"></td>
                        <td id="ergQSWtlltZ-uvIQwDJh3yy-val"></td>
                        <td id="ergQSWtlltZ-rM9TKCUtpuY-val"></td>
                        <td id="ergQSWtlltZ-aBkDCq6x6mb-val"></td>
                        <td id="ergQSWtlltZ-haRNXFw12wq-val"></td>
                        <td id="ergQSWtlltZ-geJToILFSZG-val"></td>
                        <td id="ergQSWtlltZ-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(c) 17-24 weeks</td>
                        <td id="L7GdFN2recJ-wIGZU5DqMye-val"></td>
                        <td id="L7GdFN2recJ-MhQAYE0y8W0-val"></td>
                        <td id="L7GdFN2recJ-icsjvMtUOw5-val"></td>
                        <td id="L7GdFN2recJ-uvIQwDJh3yy-val"></td>
                        <td id="L7GdFN2recJ-rM9TKCUtpuY-val"></td>
                        <td id="L7GdFN2recJ-aBkDCq6x6mb-val"></td>
                        <td id="L7GdFN2recJ-haRNXFw12wq-val"></td>
                        <td id="L7GdFN2recJ-geJToILFSZG-val"></td>
                        <td id="L7GdFN2recJ-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(d) 25 weeks of more</td>
                        <td id="Vyx9X2YIwI2-wIGZU5DqMye-val"></td>
                        <td id="Vyx9X2YIwI2-MhQAYE0y8W0-val"></td>
                        <td id="Vyx9X2YIwI2-icsjvMtUOw5-val"></td>
                        <td id="Vyx9X2YIwI2-uvIQwDJh3yy-val"></td>
                        <td id="Vyx9X2YIwI2-rM9TKCUtpuY-val"></td>
                        <td id="Vyx9X2YIwI2-aBkDCq6x6mb-val"></td>
                        <td id="Vyx9X2YIwI2-haRNXFw12wq-val"></td>
                        <td id="Vyx9X2YIwI2-geJToILFSZG-val"></td>
                        <td id="Vyx9X2YIwI2-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(d) Not known</td>
                        <td id="M3aBJ0ZAptb-wIGZU5DqMye-val"></td>
                        <td id="M3aBJ0ZAptb-MhQAYE0y8W0-val"></td>
                        <td id="M3aBJ0ZAptb-icsjvMtUOw5-val"></td>
                        <td id="M3aBJ0ZAptb-uvIQwDJh3yy-val"></td>
                        <td id="M3aBJ0ZAptb-rM9TKCUtpuY-val"></td>
                        <td id="M3aBJ0ZAptb-aBkDCq6x6mb-val"></td>
                        <td id="M3aBJ0ZAptb-haRNXFw12wq-val"></td>
                        <td id="M3aBJ0ZAptb-geJToILFSZG-val"></td>
                        <td id="M3aBJ0ZAptb-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total Gestation</td>
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
                        <td className="title">1.4</td>
                        <td className="title">Return A-N Clinic Visits</td>
                        <td id="E1Avaa0qBoh-wIGZU5DqMye-val"></td>
                        <td id="E1Avaa0qBoh-MhQAYE0y8W0-val"></td>
                        <td id="E1Avaa0qBoh-icsjvMtUOw5-val"></td>
                        <td id="E1Avaa0qBoh-uvIQwDJh3yy-val"></td>
                        <td id="E1Avaa0qBoh-rM9TKCUtpuY-val"></td>
                        <td id="E1Avaa0qBoh-aBkDCq6x6mb-val"></td>
                        <td id="E1Avaa0qBoh-haRNXFw12wq-val"></td>
                        <td id="E1Avaa0qBoh-geJToILFSZG-val"></td>
                        <td id="E1Avaa0qBoh-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total A-N Clinic Visits</td>
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
                        <td className="title">1.5</td>
                        <td className="title">No. of clients screened</td>
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
                        <td>1st HIV Test</td>
                        <td id="Hrf1E0GQ1hg-wIGZU5DqMye-val"></td>
                        <td id="Hrf1E0GQ1hg-MhQAYE0y8W0-val"></td>
                        <td id="Hrf1E0GQ1hg-icsjvMtUOw5-val"></td>
                        <td id="Hrf1E0GQ1hg-uvIQwDJh3yy-val"></td>
                        <td id="Hrf1E0GQ1hg-rM9TKCUtpuY-val"></td>
                        <td id="Hrf1E0GQ1hg-aBkDCq6x6mb-val"></td>
                        <td id="Hrf1E0GQ1hg-haRNXFw12wq-val"></td>
                        <td id="Hrf1E0GQ1hg-geJToILFSZG-val"></td>
                        <td id="Hrf1E0GQ1hg-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>2nd HIV Test</td>
                        <td id="RBTAaDl7LhW-wIGZU5DqMye-val"></td>
                        <td id="RBTAaDl7LhW-MhQAYE0y8W0-val"></td>
                        <td id="RBTAaDl7LhW-icsjvMtUOw5-val"></td>
                        <td id="RBTAaDl7LhW-uvIQwDJh3yy-val"></td>
                        <td id="RBTAaDl7LhW-rM9TKCUtpuY-val"></td>
                        <td id="RBTAaDl7LhW-aBkDCq6x6mb-val"></td>
                        <td id="RBTAaDl7LhW-haRNXFw12wq-val"></td>
                        <td id="RBTAaDl7LhW-geJToILFSZG-val"></td>
                        <td id="RBTAaDl7LhW-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>1st HTLV Test</td>
                        <td id="AkdKtyGdz67-wIGZU5DqMye-val"></td>
                        <td id="AkdKtyGdz67-MhQAYE0y8W0-val"></td>
                        <td id="AkdKtyGdz67-icsjvMtUOw5-val"></td>
                        <td id="AkdKtyGdz67-uvIQwDJh3yy-val"></td>
                        <td id="AkdKtyGdz67-rM9TKCUtpuY-val"></td>
                        <td id="AkdKtyGdz67-aBkDCq6x6mb-val"></td>
                        <td id="AkdKtyGdz67-haRNXFw12wq-val"></td>
                        <td id="AkdKtyGdz67-geJToILFSZG-val"></td>
                        <td id="AkdKtyGdz67-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>2nd HTLV Test</td>
                        <td id="H3Ox1L8eiQK-wIGZU5DqMye-val"></td>
                        <td id="H3Ox1L8eiQK-MhQAYE0y8W0-val"></td>
                        <td id="H3Ox1L8eiQK-icsjvMtUOw5-val"></td>
                        <td id="H3Ox1L8eiQK-uvIQwDJh3yy-val"></td>
                        <td id="H3Ox1L8eiQK-rM9TKCUtpuY-val"></td>
                        <td id="H3Ox1L8eiQK-aBkDCq6x6mb-val"></td>
                        <td id="H3Ox1L8eiQK-haRNXFw12wq-val"></td>
                        <td id="H3Ox1L8eiQK-geJToILFSZG-val"></td>
                        <td id="H3Ox1L8eiQK-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>1st VDRL Test</td>
                        <td id="i3vPgT70Egg-wIGZU5DqMye-val"></td>
                        <td id="i3vPgT70Egg-MhQAYE0y8W0-val"></td>
                        <td id="i3vPgT70Egg-icsjvMtUOw5-val"></td>
                        <td id="i3vPgT70Egg-uvIQwDJh3yy-val"></td>
                        <td id="i3vPgT70Egg-rM9TKCUtpuY-val"></td>
                        <td id="i3vPgT70Egg-aBkDCq6x6mb-val"></td>
                        <td id="i3vPgT70Egg-haRNXFw12wq-val"></td>
                        <td id="i3vPgT70Egg-geJToILFSZG-val"></td>
                        <td id="i3vPgT70Egg-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>2nd VDRL Test</td>
                        <td id="p17UjolEcZA-wIGZU5DqMye-val"></td>
                        <td id="p17UjolEcZA-MhQAYE0y8W0-val"></td>
                        <td id="p17UjolEcZA-icsjvMtUOw5-val"></td>
                        <td id="p17UjolEcZA-uvIQwDJh3yy-val"></td>
                        <td id="p17UjolEcZA-rM9TKCUtpuY-val"></td>
                        <td id="p17UjolEcZA-aBkDCq6x6mb-val"></td>
                        <td id="p17UjolEcZA-haRNXFw12wq-val"></td>
                        <td id="p17UjolEcZA-geJToILFSZG-val"></td>
                        <td id="p17UjolEcZA-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>1st Hepatitis B Test</td>
                        <td id="hEc1FmY06rc-wIGZU5DqMye-val"></td>
                        <td id="hEc1FmY06rc-MhQAYE0y8W0-val"></td>
                        <td id="hEc1FmY06rc-icsjvMtUOw5-val"></td>
                        <td id="hEc1FmY06rc-uvIQwDJh3yy-val"></td>
                        <td id="hEc1FmY06rc-rM9TKCUtpuY-val"></td>
                        <td id="hEc1FmY06rc-aBkDCq6x6mb-val"></td>
                        <td id="hEc1FmY06rc-haRNXFw12wq-val"></td>
                        <td id="hEc1FmY06rc-geJToILFSZG-val"></td>
                        <td id="hEc1FmY06rc-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>2nd Hepatitis B Test</td>
                        <td id="ZyAhRhfd1vZ-wIGZU5DqMye-val"></td>
                        <td id="ZyAhRhfd1vZ-MhQAYE0y8W0-val"></td>
                        <td id="ZyAhRhfd1vZ-icsjvMtUOw5-val"></td>
                        <td id="ZyAhRhfd1vZ-uvIQwDJh3yy-val"></td>
                        <td id="ZyAhRhfd1vZ-rM9TKCUtpuY-val"></td>
                        <td id="ZyAhRhfd1vZ-aBkDCq6x6mb-val"></td>
                        <td id="ZyAhRhfd1vZ-haRNXFw12wq-val"></td>
                        <td id="ZyAhRhfd1vZ-geJToILFSZG-val"></td>
                        <td id="ZyAhRhfd1vZ-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">1.6</td>
                        <td className="title">A-N Clients with Abnormal Test Results 1st time this pregnancy:</td>
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
                        <td>HIV</td>
                        <td id="DDmUj3bHyRm-wIGZU5DqMye-val"></td>
                        <td id="DDmUj3bHyRm-MhQAYE0y8W0-val"></td>
                        <td id="DDmUj3bHyRm-icsjvMtUOw5-val"></td>
                        <td id="DDmUj3bHyRm-uvIQwDJh3yy-val"></td>
                        <td id="DDmUj3bHyRm-rM9TKCUtpuY-val"></td>
                        <td id="DDmUj3bHyRm-aBkDCq6x6mb-val"></td>
                        <td id="DDmUj3bHyRm-haRNXFw12wq-val"></td>
                        <td id="DDmUj3bHyRm-geJToILFSZG-val"></td>
                        <td id="DDmUj3bHyRm-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>HTLV</td>
                        <td id="Ecd7F4r5doJ-wIGZU5DqMye-val"></td>
                        <td id="Ecd7F4r5doJ-MhQAYE0y8W0-val"></td>
                        <td id="Ecd7F4r5doJ-icsjvMtUOw5-val"></td>
                        <td id="Ecd7F4r5doJ-uvIQwDJh3yy-val"></td>
                        <td id="Ecd7F4r5doJ-rM9TKCUtpuY-val"></td>
                        <td id="Ecd7F4r5doJ-aBkDCq6x6mb-val"></td>
                        <td id="Ecd7F4r5doJ-haRNXFw12wq-val"></td>
                        <td id="Ecd7F4r5doJ-geJToILFSZG-val"></td>
                        <td id="Ecd7F4r5doJ-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>VDRL</td>
                        <td id="wDX1OaoKVqs-wIGZU5DqMye-val"></td>
                        <td id="wDX1OaoKVqs-MhQAYE0y8W0-val"></td>
                        <td id="wDX1OaoKVqs-icsjvMtUOw5-val"></td>
                        <td id="wDX1OaoKVqs-uvIQwDJh3yy-val"></td>
                        <td id="wDX1OaoKVqs-rM9TKCUtpuY-val"></td>
                        <td id="wDX1OaoKVqs-aBkDCq6x6mb-val"></td>
                        <td id="wDX1OaoKVqs-haRNXFw12wq-val"></td>
                        <td id="wDX1OaoKVqs-geJToILFSZG-val"></td>
                        <td id="wDX1OaoKVqs-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Hepatitis B</td>
                        <td id="kcCKRZruQMf-wIGZU5DqMye-val"></td>
                        <td id="kcCKRZruQMf-MhQAYE0y8W0-val"></td>
                        <td id="kcCKRZruQMf-icsjvMtUOw5-val"></td>
                        <td id="kcCKRZruQMf-uvIQwDJh3yy-val"></td>
                        <td id="kcCKRZruQMf-rM9TKCUtpuY-val"></td>
                        <td id="kcCKRZruQMf-aBkDCq6x6mb-val"></td>
                        <td id="kcCKRZruQMf-haRNXFw12wq-val"></td>
                        <td id="kcCKRZruQMf-geJToILFSZG-val"></td>
                        <td id="kcCKRZruQMf-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>High BP</td>
                        <td id="hNkducMAyTw-wIGZU5DqMye-val"></td>
                        <td id="hNkducMAyTw-MhQAYE0y8W0-val"></td>
                        <td id="hNkducMAyTw-icsjvMtUOw5-val"></td>
                        <td id="hNkducMAyTw-uvIQwDJh3yy-val"></td>
                        <td id="hNkducMAyTw-rM9TKCUtpuY-val"></td>
                        <td id="hNkducMAyTw-aBkDCq6x6mb-val"></td>
                        <td id="hNkducMAyTw-haRNXFw12wq-val"></td>
                        <td id="hNkducMAyTw-geJToILFSZG-val"></td>
                        <td id="hNkducMAyTw-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Urinalisis - albumin</td>
                        <td id="pLKUU2RDTv6-wIGZU5DqMye-val"></td>
                        <td id="pLKUU2RDTv6-MhQAYE0y8W0-val"></td>
                        <td id="pLKUU2RDTv6-icsjvMtUOw5-val"></td>
                        <td id="pLKUU2RDTv6-uvIQwDJh3yy-val"></td>
                        <td id="pLKUU2RDTv6-rM9TKCUtpuY-val"></td>
                        <td id="pLKUU2RDTv6-aBkDCq6x6mb-val"></td>
                        <td id="pLKUU2RDTv6-haRNXFw12wq-val"></td>
                        <td id="pLKUU2RDTv6-geJToILFSZG-val"></td>
                        <td id="pLKUU2RDTv6-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Hb less than 8 gms.</td>
                        <td id="t6uflgtVVtz-wIGZU5DqMye-val"></td>
                        <td id="t6uflgtVVtz-MhQAYE0y8W0-val"></td>
                        <td id="t6uflgtVVtz-icsjvMtUOw5-val"></td>
                        <td id="t6uflgtVVtz-uvIQwDJh3yy-val"></td>
                        <td id="t6uflgtVVtz-rM9TKCUtpuY-val"></td>
                        <td id="t6uflgtVVtz-aBkDCq6x6mb-val"></td>
                        <td id="t6uflgtVVtz-haRNXFw12wq-val"></td>
                        <td id="t6uflgtVVtz-geJToILFSZG-val"></td>
                        <td id="t6uflgtVVtz-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Hb 8-10 gms.</td>
                        <td id="hMRQD2DmhVT-wIGZU5DqMye-val"></td>
                        <td id="hMRQD2DmhVT-MhQAYE0y8W0-val"></td>
                        <td id="hMRQD2DmhVT-icsjvMtUOw5-val"></td>
                        <td id="hMRQD2DmhVT-uvIQwDJh3yy-val"></td>
                        <td id="hMRQD2DmhVT-rM9TKCUtpuY-val"></td>
                        <td id="hMRQD2DmhVT-aBkDCq6x6mb-val"></td>
                        <td id="hMRQD2DmhVT-haRNXFw12wq-val"></td>
                        <td id="hMRQD2DmhVT-geJToILFSZG-val"></td>
                        <td id="hMRQD2DmhVT-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total abnormal Hb</td>
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
                        <td className="title">1.7</td>
                        <td className="title">Tetanus Immunization:</td>
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
                        <td>(a) Women fully immunized prior to 1st visit this pregnancy</td>
                        <td id="s57SAjuDIBV-wIGZU5DqMye-val"></td>
                        <td id="s57SAjuDIBV-MhQAYE0y8W0-val"></td>
                        <td id="s57SAjuDIBV-icsjvMtUOw5-val"></td>
                        <td id="s57SAjuDIBV-uvIQwDJh3yy-val"></td>
                        <td id="s57SAjuDIBV-rM9TKCUtpuY-val"></td>
                        <td id="s57SAjuDIBV-aBkDCq6x6mb-val"></td>
                        <td id="s57SAjuDIBV-haRNXFw12wq-val"></td>
                        <td id="s57SAjuDIBV-geJToILFSZG-val"></td>
                        <td id="s57SAjuDIBV-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(b) Women completing TT immunization during this pregnancy</td>
                        <td id="wvsS5PcEBxN-wIGZU5DqMye-val"></td>
                        <td id="wvsS5PcEBxN-MhQAYE0y8W0-val"></td>
                        <td id="wvsS5PcEBxN-icsjvMtUOw5-val"></td>
                        <td id="wvsS5PcEBxN-uvIQwDJh3yy-val"></td>
                        <td id="wvsS5PcEBxN-rM9TKCUtpuY-val"></td>
                        <td id="wvsS5PcEBxN-aBkDCq6x6mb-val"></td>
                        <td id="wvsS5PcEBxN-haRNXFw12wq-val"></td>
                        <td id="wvsS5PcEBxN-geJToILFSZG-val"></td>
                        <td id="wvsS5PcEBxN-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">1.8</td>
                        <td className="title">Other high risk conditions first diagnosed or identified this pregnancy:
                        </td>
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
                        <td>(a) Sickle cell anaemia</td>
                        <td id="rn0UjIzswPw-wIGZU5DqMye-val"></td>
                        <td id="rn0UjIzswPw-MhQAYE0y8W0-val"></td>
                        <td id="rn0UjIzswPw-icsjvMtUOw5-val"></td>
                        <td id="rn0UjIzswPw-uvIQwDJh3yy-val"></td>
                        <td id="rn0UjIzswPw-rM9TKCUtpuY-val"></td>
                        <td id="rn0UjIzswPw-aBkDCq6x6mb-val"></td>
                        <td id="rn0UjIzswPw-haRNXFw12wq-val"></td>
                        <td id="rn0UjIzswPw-geJToILFSZG-val"></td>
                        <td id="rn0UjIzswPw-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(b) Heart Disease</td>
                        <td id="krXwBLdF0aE-wIGZU5DqMye-val"></td>
                        <td id="krXwBLdF0aE-MhQAYE0y8W0-val"></td>
                        <td id="krXwBLdF0aE-icsjvMtUOw5-val"></td>
                        <td id="krXwBLdF0aE-uvIQwDJh3yy-val"></td>
                        <td id="krXwBLdF0aE-rM9TKCUtpuY-val"></td>
                        <td id="krXwBLdF0aE-aBkDCq6x6mb-val"></td>
                        <td id="krXwBLdF0aE-haRNXFw12wq-val"></td>
                        <td id="krXwBLdF0aE-geJToILFSZG-val"></td>
                        <td id="krXwBLdF0aE-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(c) Diabetes</td>
                        <td id="VcSxcA4EjNw-wIGZU5DqMye-val"></td>
                        <td id="VcSxcA4EjNw-MhQAYE0y8W0-val"></td>
                        <td id="VcSxcA4EjNw-icsjvMtUOw5-val"></td>
                        <td id="VcSxcA4EjNw-uvIQwDJh3yy-val"></td>
                        <td id="VcSxcA4EjNw-rM9TKCUtpuY-val"></td>
                        <td id="VcSxcA4EjNw-aBkDCq6x6mb-val"></td>
                        <td id="VcSxcA4EjNw-haRNXFw12wq-val"></td>
                        <td id="VcSxcA4EjNw-geJToILFSZG-val"></td>
                        <td id="VcSxcA4EjNw-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(d) Obesity</td>
                        <td id="MyGnJUy1uW3-wIGZU5DqMye-val"></td>
                        <td id="MyGnJUy1uW3-MhQAYE0y8W0-val"></td>
                        <td id="MyGnJUy1uW3-icsjvMtUOw5-val"></td>
                        <td id="MyGnJUy1uW3-uvIQwDJh3yy-val"></td>
                        <td id="MyGnJUy1uW3-rM9TKCUtpuY-val"></td>
                        <td id="MyGnJUy1uW3-aBkDCq6x6mb-val"></td>
                        <td id="MyGnJUy1uW3-haRNXFw12wq-val"></td>
                        <td id="MyGnJUy1uW3-geJToILFSZG-val"></td>
                        <td id="MyGnJUy1uW3-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(e) Pre-eclamptic Toxaemia</td>
                        <td id="zH1VhHneU13-wIGZU5DqMye-val"></td>
                        <td id="zH1VhHneU13-MhQAYE0y8W0-val"></td>
                        <td id="zH1VhHneU13-icsjvMtUOw5-val"></td>
                        <td id="zH1VhHneU13-uvIQwDJh3yy-val"></td>
                        <td id="zH1VhHneU13-rM9TKCUtpuY-val"></td>
                        <td id="zH1VhHneU13-aBkDCq6x6mb-val"></td>
                        <td id="zH1VhHneU13-haRNXFw12wq-val"></td>
                        <td id="zH1VhHneU13-geJToILFSZG-val"></td>
                        <td id="zH1VhHneU13-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(f) Past Obs. Problems</td>
                        <td id="AcIo7b2Uumy-wIGZU5DqMye-val"></td>
                        <td id="AcIo7b2Uumy-MhQAYE0y8W0-val"></td>
                        <td id="AcIo7b2Uumy-icsjvMtUOw5-val"></td>
                        <td id="AcIo7b2Uumy-uvIQwDJh3yy-val"></td>
                        <td id="AcIo7b2Uumy-rM9TKCUtpuY-val"></td>
                        <td id="AcIo7b2Uumy-aBkDCq6x6mb-val"></td>
                        <td id="AcIo7b2Uumy-haRNXFw12wq-val"></td>
                        <td id="AcIo7b2Uumy-geJToILFSZG-val"></td>
                        <td id="AcIo7b2Uumy-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(g) Other</td>
                        <td id="tEeC0bs31LG-wIGZU5DqMye-val"></td>
                        <td id="tEeC0bs31LG-MhQAYE0y8W0-val"></td>
                        <td id="tEeC0bs31LG-icsjvMtUOw5-val"></td>
                        <td id="tEeC0bs31LG-uvIQwDJh3yy-val"></td>
                        <td id="tEeC0bs31LG-rM9TKCUtpuY-val"></td>
                        <td id="tEeC0bs31LG-aBkDCq6x6mb-val"></td>
                        <td id="tEeC0bs31LG-haRNXFw12wq-val"></td>
                        <td id="tEeC0bs31LG-geJToILFSZG-val"></td>
                        <td id="tEeC0bs31LG-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">1.9</td>
                        <td className="title">A-N Clients referred to hospital or specialist for problem 1st time this
                            pregnancy
                        </td>
                        <td id="KZIUZIBuMYu-wIGZU5DqMye-val"></td>
                        <td id="KZIUZIBuMYu-MhQAYE0y8W0-val"></td>
                        <td id="KZIUZIBuMYu-icsjvMtUOw5-val"></td>
                        <td id="KZIUZIBuMYu-uvIQwDJh3yy-val"></td>
                        <td id="KZIUZIBuMYu-rM9TKCUtpuY-val"></td>
                        <td id="KZIUZIBuMYu-aBkDCq6x6mb-val"></td>
                        <td id="KZIUZIBuMYu-haRNXFw12wq-val"></td>
                        <td id="KZIUZIBuMYu-geJToILFSZG-val"></td>
                        <td id="KZIUZIBuMYu-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">1.10</td>
                        <td className="title">A-N Clinic Sessions Conducted</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td id="mpqUvxIAEFf-HllvX50cXC0-val"></td>
                    </tr>
                    <tr>
                        <td className="title">1.11</td>
                        <td className="title">Home Visits to A-N Clients</td>
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
                        <td>(a) First visit this pregnancy</td>
                        <td id="h8jPNpiT04G-wIGZU5DqMye-val"></td>
                        <td id="h8jPNpiT04G-MhQAYE0y8W0-val"></td>
                        <td id="h8jPNpiT04G-icsjvMtUOw5-val"></td>
                        <td id="h8jPNpiT04G-uvIQwDJh3yy-val"></td>
                        <td id="h8jPNpiT04G-rM9TKCUtpuY-val"></td>
                        <td id="h8jPNpiT04G-aBkDCq6x6mb-val"></td>
                        <td id="h8jPNpiT04G-haRNXFw12wq-val"></td>
                        <td id="h8jPNpiT04G-geJToILFSZG-val"></td>
                        <td id="h8jPNpiT04G-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(b) Return visits</td>
                        <td id="NaMzsjsFKH8-wIGZU5DqMye-val"></td>
                        <td id="NaMzsjsFKH8-MhQAYE0y8W0-val"></td>
                        <td id="NaMzsjsFKH8-icsjvMtUOw5-val"></td>
                        <td id="NaMzsjsFKH8-uvIQwDJh3yy-val"></td>
                        <td id="NaMzsjsFKH8-rM9TKCUtpuY-val"></td>
                        <td id="NaMzsjsFKH8-aBkDCq6x6mb-val"></td>
                        <td id="NaMzsjsFKH8-haRNXFw12wq-val"></td>
                        <td id="NaMzsjsFKH8-geJToILFSZG-val"></td>
                        <td id="NaMzsjsFKH8-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(c) Total Home visit</td>
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

