/// <reference path="../../../typings/mocha/mocha.d.ts" />
import chai = require("chai");
import detach = require("../../../test/util/detach");
import <%= ComponentName %> = require("./<%= component_name %>");
import React = require("react/addons");

var r = React.DOM;
var expect = chai.expect;
var testUtils = React.addons.TestUtils;
var root: any;

describe("<%= ComponentName %>Spec", () => {
    beforeEach(() => {
        root = testUtils.renderIntoDocument(<%= ComponentName %>.create({
        }));
    });

    it("should be true", () => {
        expect(true).to.eql(true);
    });
});
