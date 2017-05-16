import React from "react";
import Fetch from "../model/Fetch";
import config from "../model/config.json";

export default class PostNatalServicesReport extends React.Component {
    constructor(props) {
        super(props);
        this.css = `table{border-collapse:collapse;width:99%}table,td{padding:2!important;text-align:center;border:1px solid #BDBDBD}table tr:nth-child(1){color:#fff;font-weight:700;text-align:center;font-size:20px;background-color:#66BB6A}table tr:nth-child(2),table tr:nth-child(3){text-align:center;font-weight:700;background-color:#FFD54F}table tr:nth-child(3) td{text-align:center;width:7%}table tr:nth-child(n+4) td:nth-child(1),table tr:nth-child(n+4) td:nth-child(2){text-align:left;background-color:#B2EBF2}.title{font-weight:700}input{width:70%!important}`;
        this.fetch = new Fetch();
    }

    loadData = () => {
        $("td[id*=val]").each((index, element) => {
            $(element).html("");
        });

        if (this.props.param.hasOwnProperty("ouId") === false) {
            return;
        }

        this.api = `${config.baseUrl}/api/analytics.json?dimension=dx:W48l06Apr8w;ah1lzie4CKR;kgnQzpcXxRb;hKlPOVrABsI;eQJB23AhSg4;Z7usUNzSNFR;GDQRuAUgRct;yhCpLth7yXa;ozRuPq59cH9;bz6AzAyivpP;Ru3jqhPbvEt;pOn3cnBwafA;mb8irTJ0zoV;kWQzNXgeVxD;HpdOtdcfbof;M7ueIpnxVFU;ddkx6Zk7q9K;Mae76qj4VIh;o64wr3NWZhz;FmisRWx6SGt;uYkkLOwkqwp;hQuTzz1eiz3;jQjEpfWKGE7;Feb4x6zD2NX;jJsu3uiusfF;q5zTxkZGXax&dimension=co&filter=pe:${this.props.param.pe}&filter=ou:${this.props.param.ouId}`;
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
                        <td colSpan="12">POST NATAL SERVICES<br/>{this.props.param.ouName}<br/>{this.props.param.peText}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" rowSpan="2">SERVICE</td>
                        <td colSpan="10">AGE GROUP</td>
                    </tr>
                    <tr>
                        <td>&lt; 15</td>
                        <td>15-19</td>
                        <td>20-24</td>
                        <td>25-29</td>
                        <td>30-34</td>
                        <td>35-39</td>
                        <td>40-44</td>
                        <td>45+</td>
                        <td>UnKn.</td>
                        <td>TOTAL</td>
                    </tr>
                    <tr>
                        <td className="title">3.1</td>
                        <td className="title">Home visits to PN patients</td>
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
                        <td>(a) 1st visit within 10 days</td>
                        <td id="hKlPOVrABsI-wIGZU5DqMye-val"></td>
                        <td id="hKlPOVrABsI-MhQAYE0y8W0-val"></td>
                        <td id="hKlPOVrABsI-icsjvMtUOw5-val"></td>
                        <td id="hKlPOVrABsI-uvIQwDJh3yy-val"></td>
                        <td id="hKlPOVrABsI-rM9TKCUtpuY-val"></td>
                        <td id="hKlPOVrABsI-aBkDCq6x6mb-val"></td>
                        <td id="hKlPOVrABsI-haRNXFw12wq-val"></td>
                        <td id="hKlPOVrABsI-geJToILFSZG-val"></td>
                        <td id="hKlPOVrABsI-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(b) 1st visit after 10 days</td>
                        <td id="kgnQzpcXxRb-wIGZU5DqMye-val"></td>
                        <td id="kgnQzpcXxRb-MhQAYE0y8W0-val"></td>
                        <td id="kgnQzpcXxRb-icsjvMtUOw5-val"></td>
                        <td id="kgnQzpcXxRb-uvIQwDJh3yy-val"></td>
                        <td id="kgnQzpcXxRb-rM9TKCUtpuY-val"></td>
                        <td id="kgnQzpcXxRb-aBkDCq6x6mb-val"></td>
                        <td id="kgnQzpcXxRb-haRNXFw12wq-val"></td>
                        <td id="kgnQzpcXxRb-geJToILFSZG-val"></td>
                        <td id="kgnQzpcXxRb-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(c) Return home visits</td>
                        <td id="yhCpLth7yXa-wIGZU5DqMye-val"></td>
                        <td id="yhCpLth7yXa-MhQAYE0y8W0-val"></td>
                        <td id="yhCpLth7yXa-icsjvMtUOw5-val"></td>
                        <td id="yhCpLth7yXa-uvIQwDJh3yy-val"></td>
                        <td id="yhCpLth7yXa-rM9TKCUtpuY-val"></td>
                        <td id="yhCpLth7yXa-aBkDCq6x6mb-val"></td>
                        <td id="yhCpLth7yXa-haRNXFw12wq-val"></td>
                        <td id="yhCpLth7yXa-geJToILFSZG-val"></td>
                        <td id="yhCpLth7yXa-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total Home visits</td>
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
                        <td className="title">3.2</td>
                        <td className="title">Clinic visit after delivery</td>
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
                        <td>(a) 1st Clinic visit at or before 6wks.</td>
                        <td id="ah1lzie4CKR-wIGZU5DqMye-val"></td>
                        <td id="ah1lzie4CKR-MhQAYE0y8W0-val"></td>
                        <td id="ah1lzie4CKR-icsjvMtUOw5-val"></td>
                        <td id="ah1lzie4CKR-uvIQwDJh3yy-val"></td>
                        <td id="ah1lzie4CKR-rM9TKCUtpuY-val"></td>
                        <td id="ah1lzie4CKR-aBkDCq6x6mb-val"></td>
                        <td id="ah1lzie4CKR-haRNXFw12wq-val"></td>
                        <td id="ah1lzie4CKR-geJToILFSZG-val"></td>
                        <td id="ah1lzie4CKR-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(b) 1st Clinic visit after 6 wks</td>
                        <td id="W48l06Apr8w-wIGZU5DqMye-val"></td>
                        <td id="W48l06Apr8w-MhQAYE0y8W0-val"></td>
                        <td id="W48l06Apr8w-icsjvMtUOw5-val"></td>
                        <td id="W48l06Apr8w-uvIQwDJh3yy-val"></td>
                        <td id="W48l06Apr8w-rM9TKCUtpuY-val"></td>
                        <td id="W48l06Apr8w-aBkDCq6x6mb-val"></td>
                        <td id="W48l06Apr8w-haRNXFw12wq-val"></td>
                        <td id="W48l06Apr8w-geJToILFSZG-val"></td>
                        <td id="W48l06Apr8w-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(c) Return Clinic visit</td>
                        <td id="GDQRuAUgRct-wIGZU5DqMye-val"></td>
                        <td id="GDQRuAUgRct-MhQAYE0y8W0-val"></td>
                        <td id="GDQRuAUgRct-icsjvMtUOw5-val"></td>
                        <td id="GDQRuAUgRct-uvIQwDJh3yy-val"></td>
                        <td id="GDQRuAUgRct-rM9TKCUtpuY-val"></td>
                        <td id="GDQRuAUgRct-aBkDCq6x6mb-val"></td>
                        <td id="GDQRuAUgRct-haRNXFw12wq-val"></td>
                        <td id="GDQRuAUgRct-geJToILFSZG-val"></td>
                        <td id="GDQRuAUgRct-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total Clinic visit</td>
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
                        <td className="title">3.3</td>
                        <td className="title">Total PN Visits</td>
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
                        <td className="title">3.4</td>
                        <td className="title">PN Women tested for first time after this delivery</td>
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
                        <td>(a) Pap Smear</td>
                        <td id="Mae76qj4VIh-wIGZU5DqMye-val"></td>
                        <td id="Mae76qj4VIh-MhQAYE0y8W0-val"></td>
                        <td id="Mae76qj4VIh-icsjvMtUOw5-val"></td>
                        <td id="Mae76qj4VIh-uvIQwDJh3yy-val"></td>
                        <td id="Mae76qj4VIh-rM9TKCUtpuY-val"></td>
                        <td id="Mae76qj4VIh-aBkDCq6x6mb-val"></td>
                        <td id="Mae76qj4VIh-haRNXFw12wq-val"></td>
                        <td id="Mae76qj4VIh-geJToILFSZG-val"></td>
                        <td id="Mae76qj4VIh-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(b) Haemoglobin</td>
                        <td id="ddkx6Zk7q9K-wIGZU5DqMye-val"></td>
                        <td id="ddkx6Zk7q9K-MhQAYE0y8W0-val"></td>
                        <td id="ddkx6Zk7q9K-icsjvMtUOw5-val"></td>
                        <td id="ddkx6Zk7q9K-uvIQwDJh3yy-val"></td>
                        <td id="ddkx6Zk7q9K-rM9TKCUtpuY-val"></td>
                        <td id="ddkx6Zk7q9K-aBkDCq6x6mb-val"></td>
                        <td id="ddkx6Zk7q9K-haRNXFw12wq-val"></td>
                        <td id="ddkx6Zk7q9K-geJToILFSZG-val"></td>
                        <td id="ddkx6Zk7q9K-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">3.5</td>
                        <td className="title">PN Women with first abnormal test result after delivery</td>
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
                        <td>(a) HB, 10 gms. or less</td>
                        <td id="uYkkLOwkqwp-wIGZU5DqMye-val"></td>
                        <td id="uYkkLOwkqwp-MhQAYE0y8W0-val"></td>
                        <td id="uYkkLOwkqwp-icsjvMtUOw5-val"></td>
                        <td id="uYkkLOwkqwp-uvIQwDJh3yy-val"></td>
                        <td id="uYkkLOwkqwp-rM9TKCUtpuY-val"></td>
                        <td id="uYkkLOwkqwp-aBkDCq6x6mb-val"></td>
                        <td id="uYkkLOwkqwp-haRNXFw12wq-val"></td>
                        <td id="uYkkLOwkqwp-geJToILFSZG-val"></td>
                        <td id="uYkkLOwkqwp-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(b) Pap positive</td>
                        <td id="jQjEpfWKGE7-wIGZU5DqMye-val"></td>
                        <td id="jQjEpfWKGE7-MhQAYE0y8W0-val"></td>
                        <td id="jQjEpfWKGE7-icsjvMtUOw5-val"></td>
                        <td id="jQjEpfWKGE7-uvIQwDJh3yy-val"></td>
                        <td id="jQjEpfWKGE7-rM9TKCUtpuY-val"></td>
                        <td id="jQjEpfWKGE7-aBkDCq6x6mb-val"></td>
                        <td id="jQjEpfWKGE7-haRNXFw12wq-val"></td>
                        <td id="jQjEpfWKGE7-geJToILFSZG-val"></td>
                        <td id="jQjEpfWKGE7-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(c) Dysplasia</td>
                        <td id="FmisRWx6SGt-wIGZU5DqMye-val"></td>
                        <td id="FmisRWx6SGt-MhQAYE0y8W0-val"></td>
                        <td id="FmisRWx6SGt-icsjvMtUOw5-val"></td>
                        <td id="FmisRWx6SGt-uvIQwDJh3yy-val"></td>
                        <td id="FmisRWx6SGt-rM9TKCUtpuY-val"></td>
                        <td id="FmisRWx6SGt-aBkDCq6x6mb-val"></td>
                        <td id="FmisRWx6SGt-haRNXFw12wq-val"></td>
                        <td id="FmisRWx6SGt-geJToILFSZG-val"></td>
                        <td id="FmisRWx6SGt-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(d) Trichomonas</td>
                        <td id="Feb4x6zD2NX-wIGZU5DqMye-val"></td>
                        <td id="Feb4x6zD2NX-MhQAYE0y8W0-val"></td>
                        <td id="Feb4x6zD2NX-icsjvMtUOw5-val"></td>
                        <td id="Feb4x6zD2NX-uvIQwDJh3yy-val"></td>
                        <td id="Feb4x6zD2NX-rM9TKCUtpuY-val"></td>
                        <td id="Feb4x6zD2NX-aBkDCq6x6mb-val"></td>
                        <td id="Feb4x6zD2NX-haRNXFw12wq-val"></td>
                        <td id="Feb4x6zD2NX-geJToILFSZG-val"></td>
                        <td id="Feb4x6zD2NX-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(e) Candida</td>
                        <td id="o64wr3NWZhz-wIGZU5DqMye-val"></td>
                        <td id="o64wr3NWZhz-MhQAYE0y8W0-val"></td>
                        <td id="o64wr3NWZhz-icsjvMtUOw5-val"></td>
                        <td id="o64wr3NWZhz-uvIQwDJh3yy-val"></td>
                        <td id="o64wr3NWZhz-rM9TKCUtpuY-val"></td>
                        <td id="o64wr3NWZhz-aBkDCq6x6mb-val"></td>
                        <td id="o64wr3NWZhz-haRNXFw12wq-val"></td>
                        <td id="o64wr3NWZhz-geJToILFSZG-val"></td>
                        <td id="o64wr3NWZhz-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(f) Other</td>
                        <td id="hQuTzz1eiz3-wIGZU5DqMye-val"></td>
                        <td id="hQuTzz1eiz3-MhQAYE0y8W0-val"></td>
                        <td id="hQuTzz1eiz3-icsjvMtUOw5-val"></td>
                        <td id="hQuTzz1eiz3-uvIQwDJh3yy-val"></td>
                        <td id="hQuTzz1eiz3-rM9TKCUtpuY-val"></td>
                        <td id="hQuTzz1eiz3-aBkDCq6x6mb-val"></td>
                        <td id="hQuTzz1eiz3-haRNXFw12wq-val"></td>
                        <td id="hQuTzz1eiz3-geJToILFSZG-val"></td>
                        <td id="hQuTzz1eiz3-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">3.6</td>
                        <td className="title">Other principal illness or condition first diagnosed or reported after this
                            delivery
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
                        <td>(a) Postpartum haemorrhage</td>
                        <td id="Z7usUNzSNFR-wIGZU5DqMye-val"></td>
                        <td id="Z7usUNzSNFR-MhQAYE0y8W0-val"></td>
                        <td id="Z7usUNzSNFR-icsjvMtUOw5-val"></td>
                        <td id="Z7usUNzSNFR-uvIQwDJh3yy-val"></td>
                        <td id="Z7usUNzSNFR-rM9TKCUtpuY-val"></td>
                        <td id="Z7usUNzSNFR-aBkDCq6x6mb-val"></td>
                        <td id="Z7usUNzSNFR-haRNXFw12wq-val"></td>
                        <td id="Z7usUNzSNFR-geJToILFSZG-val"></td>
                        <td id="Z7usUNzSNFR-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(b) Puerperal sepsis</td>
                        <td id="q5zTxkZGXax-wIGZU5DqMye-val"></td>
                        <td id="q5zTxkZGXax-MhQAYE0y8W0-val"></td>
                        <td id="q5zTxkZGXax-icsjvMtUOw5-val"></td>
                        <td id="q5zTxkZGXax-uvIQwDJh3yy-val"></td>
                        <td id="q5zTxkZGXax-rM9TKCUtpuY-val"></td>
                        <td id="q5zTxkZGXax-aBkDCq6x6mb-val"></td>
                        <td id="q5zTxkZGXax-haRNXFw12wq-val"></td>
                        <td id="q5zTxkZGXax-geJToILFSZG-val"></td>
                        <td id="q5zTxkZGXax-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>(c) Other</td>
                        <td id="eQJB23AhSg4-wIGZU5DqMye-val"></td>
                        <td id="eQJB23AhSg4-MhQAYE0y8W0-val"></td>
                        <td id="eQJB23AhSg4-icsjvMtUOw5-val"></td>
                        <td id="eQJB23AhSg4-uvIQwDJh3yy-val"></td>
                        <td id="eQJB23AhSg4-rM9TKCUtpuY-val"></td>
                        <td id="eQJB23AhSg4-aBkDCq6x6mb-val"></td>
                        <td id="eQJB23AhSg4-haRNXFw12wq-val"></td>
                        <td id="eQJB23AhSg4-geJToILFSZG-val"></td>
                        <td id="eQJB23AhSg4-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">3.7</td>
                        <td className="title">(a ) PN Women requesting FP Services:</td>
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
                        <td>Oral contraceptives</td>
                        <td id="pOn3cnBwafA-wIGZU5DqMye-val"></td>
                        <td id="pOn3cnBwafA-MhQAYE0y8W0-val"></td>
                        <td id="pOn3cnBwafA-icsjvMtUOw5-val"></td>
                        <td id="pOn3cnBwafA-uvIQwDJh3yy-val"></td>
                        <td id="pOn3cnBwafA-rM9TKCUtpuY-val"></td>
                        <td id="pOn3cnBwafA-aBkDCq6x6mb-val"></td>
                        <td id="pOn3cnBwafA-haRNXFw12wq-val"></td>
                        <td id="pOn3cnBwafA-geJToILFSZG-val"></td>
                        <td id="pOn3cnBwafA-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>IUD (including those referred)</td>
                        <td id="bz6AzAyivpP-wIGZU5DqMye-val"></td>
                        <td id="bz6AzAyivpP-MhQAYE0y8W0-val"></td>
                        <td id="bz6AzAyivpP-icsjvMtUOw5-val"></td>
                        <td id="bz6AzAyivpP-uvIQwDJh3yy-val"></td>
                        <td id="bz6AzAyivpP-rM9TKCUtpuY-val"></td>
                        <td id="bz6AzAyivpP-aBkDCq6x6mb-val"></td>
                        <td id="bz6AzAyivpP-haRNXFw12wq-val"></td>
                        <td id="bz6AzAyivpP-geJToILFSZG-val"></td>
                        <td id="bz6AzAyivpP-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Injection</td>
                        <td id="Ru3jqhPbvEt-wIGZU5DqMye-val"></td>
                        <td id="Ru3jqhPbvEt-MhQAYE0y8W0-val"></td>
                        <td id="Ru3jqhPbvEt-icsjvMtUOw5-val"></td>
                        <td id="Ru3jqhPbvEt-uvIQwDJh3yy-val"></td>
                        <td id="Ru3jqhPbvEt-rM9TKCUtpuY-val"></td>
                        <td id="Ru3jqhPbvEt-aBkDCq6x6mb-val"></td>
                        <td id="Ru3jqhPbvEt-haRNXFw12wq-val"></td>
                        <td id="Ru3jqhPbvEt-geJToILFSZG-val"></td>
                        <td id="Ru3jqhPbvEt-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Condom</td>
                        <td id="kWQzNXgeVxD-wIGZU5DqMye-val"></td>
                        <td id="kWQzNXgeVxD-MhQAYE0y8W0-val"></td>
                        <td id="kWQzNXgeVxD-icsjvMtUOw5-val"></td>
                        <td id="kWQzNXgeVxD-uvIQwDJh3yy-val"></td>
                        <td id="kWQzNXgeVxD-rM9TKCUtpuY-val"></td>
                        <td id="kWQzNXgeVxD-aBkDCq6x6mb-val"></td>
                        <td id="kWQzNXgeVxD-haRNXFw12wq-val"></td>
                        <td id="kWQzNXgeVxD-geJToILFSZG-val"></td>
                        <td id="kWQzNXgeVxD-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Counselling</td>
                        <td id="HpdOtdcfbof-wIGZU5DqMye-val"></td>
                        <td id="HpdOtdcfbof-MhQAYE0y8W0-val"></td>
                        <td id="HpdOtdcfbof-icsjvMtUOw5-val"></td>
                        <td id="HpdOtdcfbof-uvIQwDJh3yy-val"></td>
                        <td id="HpdOtdcfbof-rM9TKCUtpuY-val"></td>
                        <td id="HpdOtdcfbof-aBkDCq6x6mb-val"></td>
                        <td id="HpdOtdcfbof-haRNXFw12wq-val"></td>
                        <td id="HpdOtdcfbof-geJToILFSZG-val"></td>
                        <td id="HpdOtdcfbof-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Sterilization referral</td>
                        <td id="mb8irTJ0zoV-wIGZU5DqMye-val"></td>
                        <td id="mb8irTJ0zoV-MhQAYE0y8W0-val"></td>
                        <td id="mb8irTJ0zoV-icsjvMtUOw5-val"></td>
                        <td id="mb8irTJ0zoV-uvIQwDJh3yy-val"></td>
                        <td id="mb8irTJ0zoV-rM9TKCUtpuY-val"></td>
                        <td id="mb8irTJ0zoV-aBkDCq6x6mb-val"></td>
                        <td id="mb8irTJ0zoV-haRNXFw12wq-val"></td>
                        <td id="mb8irTJ0zoV-geJToILFSZG-val"></td>
                        <td id="mb8irTJ0zoV-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Other</td>
                        <td id="M7ueIpnxVFU-wIGZU5DqMye-val"></td>
                        <td id="M7ueIpnxVFU-MhQAYE0y8W0-val"></td>
                        <td id="M7ueIpnxVFU-icsjvMtUOw5-val"></td>
                        <td id="M7ueIpnxVFU-uvIQwDJh3yy-val"></td>
                        <td id="M7ueIpnxVFU-rM9TKCUtpuY-val"></td>
                        <td id="M7ueIpnxVFU-aBkDCq6x6mb-val"></td>
                        <td id="M7ueIpnxVFU-haRNXFw12wq-val"></td>
                        <td id="M7ueIpnxVFU-geJToILFSZG-val"></td>
                        <td id="M7ueIpnxVFU-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total PN FP Service request</td>
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
                        <td className="title">3.7</td>
                        <td className="title">(b) PN Women already sterilized</td>
                        <td id="ozRuPq59cH9-wIGZU5DqMye-val"></td>
                        <td id="ozRuPq59cH9-MhQAYE0y8W0-val"></td>
                        <td id="ozRuPq59cH9-icsjvMtUOw5-val"></td>
                        <td id="ozRuPq59cH9-uvIQwDJh3yy-val"></td>
                        <td id="ozRuPq59cH9-rM9TKCUtpuY-val"></td>
                        <td id="ozRuPq59cH9-aBkDCq6x6mb-val"></td>
                        <td id="ozRuPq59cH9-haRNXFw12wq-val"></td>
                        <td id="ozRuPq59cH9-geJToILFSZG-val"></td>
                        <td id="ozRuPq59cH9-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="title">3.8</td>
                        <td className="title">PN Clinic Sessions conducted</td>
                        <td id="jJsu3uiusfF-wIGZU5DqMye-val"></td>
                        <td id="jJsu3uiusfF-MhQAYE0y8W0-val"></td>
                        <td id="jJsu3uiusfF-icsjvMtUOw5-val"></td>
                        <td id="jJsu3uiusfF-uvIQwDJh3yy-val"></td>
                        <td id="jJsu3uiusfF-rM9TKCUtpuY-val"></td>
                        <td id="jJsu3uiusfF-aBkDCq6x6mb-val"></td>
                        <td id="jJsu3uiusfF-haRNXFw12wq-val"></td>
                        <td id="jJsu3uiusfF-geJToILFSZG-val"></td>
                        <td id="jJsu3uiusfF-vpVbm55SSdL-val"></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>

            </div>)
    }
}

