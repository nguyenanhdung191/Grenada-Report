import React from "react";
import Fetch from "../model/Fetch";

export default class OrgUnitSelector extends React.Component {
    constructor() {
        super();
        this.fetch = new Fetch();
        this.generateOrgUnitTree();
    }

    generateOrgUnitTree() {
        let ouTree = {
            id: "B4K1Jo8oT7K",
            text: "Grenada",
            children: []
        };
        this.fetch.getOrgUnitTree()
            .then(ouList => {
                ouList.forEach(ou => {
                    if (ou.level === 2) {
                        ouTree.children.push({id: ou.id, text: ou.name, children: []});
                    }
                });
                ouList.forEach(ou => {
                    if (ou.level === 3) {
                        ouTree.children.forEach(parish => {
                            if (parish.id === ou.parent.id) {
                                parish.children.push({id: ou.id, text: ou.name, children: []});
                            }
                        })
                    }
                });
                ouList.forEach(ou => {
                    if (ou.level === 4) {
                        ouTree.children.forEach(parish => {
                            parish.children.forEach(commune => {
                                if (commune.id === ou.parent.id) {
                                    commune.children.push({id: ou.id, text: ou.name})
                                }
                            })
                        })
                    }
                });
                $('#ouTree').jstree({
                    'core': {
                        'data': [
                            ouTree
                        ],
                        "themes": {
                            "icons": false
                        },
                        "multiple": false
                    }
                });
            });
    }


    render() {
        return (
            <div id="ouTree"></div>
        )
    }
}

