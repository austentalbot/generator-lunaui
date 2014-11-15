import React = require("react/addons");
import Aura = require("aura");
import build = require("../../build");

var r = React.DOM;

interface Props {
}

interface State {
}

class Component extends Aura.Component<Props, State> {
    render() {
        return;
    }
}

export var create = build(Component);
