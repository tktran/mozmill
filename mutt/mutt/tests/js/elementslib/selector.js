/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, you can obtain one at http://mozilla.org/MPL/2.0/. */

const BASE_URL = collector.addHttpResource("../_files/");
const TEST_DATA = BASE_URL + "complex.html";

var setupModule = function () {
  controller = mozmill.getBrowserController();
}

var test = function () {
  controller.open(TEST_DATA);
  controller.waitForPageLoad();

  var id = new elementslib.ID(controller.tabs.activeTab, "page-title");
  var selector = new elementslib.Selector(controller.tabs.activeTab, "#page-title");

  expect.equal(id.getNode(), selector.getNode(),
               "ID and Selector have to be the same element.");

  selector = new elementslib.Selector(controller.tabs.activeTab, "#organization a");
  expect.equal(selector.getNode().className, "more",
               "Sub element found by Selector.");
}
