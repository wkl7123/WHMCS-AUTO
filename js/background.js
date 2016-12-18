// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var min = 1;
var max = 5;
var current = min;
chrome.browserAction.onClicked.addListener(function() {
	chrome.browserAction.setIcon({path:"img/icon" + current + ".png"});
	current++;

	if (current > max)
	current = min;

	chrome.tabs.executeScript(null,{file:"js/autofill.js"});
});

